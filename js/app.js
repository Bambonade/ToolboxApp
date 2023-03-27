const app = Vue.createApp({
    data: function () {
        return {
            tool: [
                {
                    name: '1/4" METRIC Socket Set',
                    category: 'Socket',
                },
                {
                    name: '1/4" SAE Socket Set',
                    category: 'Socket',
                },
                {
                    name: '3/8" METRIC Socket Set',
                    category: 'Socket',
                },
                {
                    name: '3/8" SAE Socket Set',
                    category: 'Socket',
                },
                {
                    name: '1/4" Ratchet',
                    category: 'Ratchet',
                },
                {
                    name: '3/8" Ratchet',
                    category: 'Ratchet',
                },
                {
                    name: '1/2" Ratchet',
                    category: 'Ratchet',
                },
                {
                    name: '123 Piece Bit Set',
                    category: 'Bit',
                },
                {
                    name: '12 Piece Metric Wrench Set',
                    category: 'Wrench',
                },
                {
                    name: 'Torx/Alan Socket Set',
                    category: 'Torx',
                },
                {
                    name: '3/8" MAC Air Ratchet',
                    category: 'Pneumatic',
                },
                {
                    name: 'Cornwell Orbital Sander (DA)',
                    category: 'Pneumatic',
                },
                {
                    name: 'Cornwell Right Angle Die Grinder',
                    category: 'Pneumatic',
                },
                {
                    name: 'Cornwell Die Grinder',
                    category: 'Pneumatic',
                },
                {
                    name: '10 Piece Screw Driver Set',
                    category: 'ScrewDriver',
                },
                {
                    name: 'Milwaukee 5 Piece Locking Pliers',
                    category: 'Pliers',
                },
                {
                    name: 'Cornwell 5 Piece Pliers Set',
                    category: 'Pliers',
                },
                {
                    name: 'Electrical Tape',
                    category: 'Electrical',
                },
                {
                    name: 'Wire Stripper',
                    category: 'Electrical',
                },
                {
                    name: 'Milwaukee Impact Driver',
                    category: 'PowerTool',
                },
                {
                    name: 'Milwaukee 1/4" Ratchet',
                    category: 'PowerTool',
                },
                {
                    name: 'DeWalt Drill',
                    category: 'PowerTool',
                },
                {
                    name: 'DeWalt Angle Grinder',
                    category: 'PowerTool',
                },
                {
                    name: 'DeWalt Impact Driver',
                    category: 'PowerTool',
                },
            ],
        }
    },

    methods: {
        addToDrawer(item) {
            this.tool.push(item);
        },
        removeFromDrawer(item) {
            this.tool.splice(this.tool.indexOf(item), 1);
        },

        editDrawer(item, newItem){
            this.tool.splice(this.tool.indexOf(item))
        },
    },
    computed: {
        topDrawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Socket' && 'Ratchet';
            })
        },

        left2Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Torx';
            })
        },

        right2Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Wrench';
            })
        },

        left3Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Bit';
            })
        },

        right3Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'ScrewDriver';
            })
        },

        left4Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Electrical';
            })
        },

        right4Drawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Pliers';
            })
        },

        leftBottomDrawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'Pneumatic';
            })
        },

        rightBottomDrawer: function () {
            return this.tool.filter(function (item) {
                return item.category === 'PowerTool';
            })
        },
    },

    mounted: function () {
        if (localStorage.getItem('tool')) {
            this.tool = JSON.parse(localStorage.getItem('tool'));
        }
    },

    watch: {
        tool: {
            handler: function (newList) {
                localStorage.setItem('tool', JSON.stringify(newList));
            }
        },
    }
})