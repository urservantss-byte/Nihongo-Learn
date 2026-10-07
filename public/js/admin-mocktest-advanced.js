// ===== Advanced Mock Test Admin Component =====
// Reusable advanced admin table with search, filter, sort, pagination, bulk ops

const MockTestAdvancedMixin = {
  data() {
    return {
      admMockSearch: '',
      admMockSort: 'id',
      admMockSortDir: 'asc',
      admMockPage: 1,
      admMockPerPage: 10,
      admMockSelected: [],
      admMockFilter: 'all',
      admMockStats: null,
    };
  },
  
  computed: {
    admMockQsFiltered() {
      let qs = this.admMockQs || [];
      
      // Search filter
      if (this.admMockSearch.trim()) {
        const search = this.admMockSearch.toLowerCase();
        qs = qs.filter(q => 
          (q.question || '').toLowerCase().includes(search) ||
          (q.instruction || '').toLowerCase().includes(search) ||
          (q.type || '').toLowerCase().includes(search) ||
          (q.options || []).some(o => (o || '').toLowerCase().includes(search))
        );
      }
      
      // Type filter
      if (this.admMockFilter !== 'all') {
        qs = qs.filter(q => q.type === this.admMockFilter);
      }
      
      // Sort
      qs = [...qs].sort((a, b) => {
        let valA = a[this.admMockSort];
        let valB = b[this.admMockSort];
        
        if (this.admMockSort === 'id') {
          valA = parseInt(valA) || 0;
          valB = parseInt(valB) || 0;
        }
        
        if (valA < valB) return this.admMockSortDir === 'asc' ? -1 : 1;
        if (valA > valB) return this.admMockSortDir === 'asc' ? 1 : -1;
        return 0;
      });
      
      return qs;
    },
    
    admMockQsPaginated() {
      const start = (this.admMockPage - 1) * this.admMockPerPage;
      const end = start + this.admMockPerPage;
      return this.admMockQsFiltered.slice(start, end);
    },
    
    admMockTotalPages() {
      return Math.ceil(this.admMockQsFiltered.length / this.admMockPerPage);
    },
    
    admMockAllSelected() {
      return this.admMockQsPaginated.length > 0 && 
             this.admMockQsPaginated.every(q => this.admMockSelected.includes(q.id));
    }
  },
  
  methods: {
    calculateMockStats() {
      const types = {};
      this.admMockQs.forEach(q => {
        types[q.type] = (types[q.type] || 0) + 1;
      });
      return {
        total: this.admMockQs.length,
        byType: types
      };
    },
    
    admMockSortBy(field) {
      if (this.admMockSort === field) {
        this.admMockSortDir = this.admMockSortDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.admMockSort = field;
        this.admMockSortDir = 'asc';
      }
    },
    
    admMockToggleSelect(id) {
      const idx = this.admMockSelected.indexOf(id);
      if (idx > -1) {
        this.admMockSelected.splice(idx, 1);
      } else {
        this.admMockSelected.push(id);
      }
    },
    
    admMockToggleAll() {
      if (this.admMockAllSelected) {
        this.admMockQsPaginated.forEach(q => {
          const idx = this.admMockSelected.indexOf(q.id);
          if (idx > -1) this.admMockSelected.splice(idx, 1);
        });
      } else {
        this.admMockQsPaginated.forEach(q => {
          if (!this.admMockSelected.includes(q.id)) {
            this.admMockSelected.push(q.id);
          }
        });
      }
    },
    
    async admMockBulkDelete() {
      if (this.admMockSelected.length === 0) {
        toast('Pilih soal yang ingin dihapus');
        return;
      }
      if (!confirm(`Hapus ${this.admMockSelected.length} soal yang dipilih?`)) return;
      
      try {
        for (const id of this.admMockSelected) {
          const idx = this.admMockQs.findIndex(q => q.id === id);
          if (idx > -1) {
            await api(`/api/admin/mocktest/${this.admMockLevel}/${this.admMockSection}/${idx}`, {
              method: 'DELETE'
            });
          }
        }
        toast(`${this.admMockSelected.length} soal dihapus ✅`);
        this.admMockSelected = [];
        this.admLoadMockTest();
      } catch (e) {
        toast('Gagal hapus: ' + e.message);
      }
    },
    
    admMockClone(idx) {
      const q = this.admMockQs[idx];
      this.admMockQEdit = null;
      this.admMockQForm = {
        id: this.admMockQs.length + 1,
        type: q.type,
        instruction: q.instruction,
        question: q.question + ' (copy)',
        underline: q.underline,
        passage: q.passage,
        audio: q.audio,
        options: [...(q.options || ['', '', '', ''])],
        answer: q.answer
      };
    },
    
    admMockExportJSON() {
      const data = {
        level: this.admMockLevel,
        section: this.admMockSection,
        exported: new Date().toISOString(),
        questions: this.admMockQs
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mocktest-${this.admMockLevel}-${this.admMockSection}-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast('Exported ✅');
    },
    
    admMockExportCSV() {
      const headers = ['ID', 'Type', 'Question', 'Option1', 'Option2', 'Option3', 'Option4', 'Answer'];
      const rows = this.admMockQs.map(q => [
        q.id,
        q.type,
        `"${(q.question || '').replace(/"/g, '""')}"`,
        `"${((q.options && q.options[0]) || '').replace(/"/g, '""')}"`,
        `"${((q.options && q.options[1]) || '').replace(/"/g, '""')}"`,
        `"${((q.options && q.options[2]) || '').replace(/"/g, '""')}"`,
        `"${((q.options && q.options[3]) || '').replace(/"/g, '""')}"`,
        q.answer
      ]);
      const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mocktest-${this.admMockLevel}-${this.admMockSection}-${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      toast('Exported ✅');
    }
  }
};
