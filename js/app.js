const app = Vue.createApp({
    data: function () {
        return {
            toolBox: [
                {
                    name: '7mm',
                    category: 'Socket',
                },
                {
                    name: '8mm',
                    category: 'Socket',
                },
                {
                    name: '9mm',
                    category: 'Socket',
                },
                {
                    name: '10mm',
                    category: 'Socket',
                },
                {
                    name: '11mm',
                    category: 'Socket',
                },
                {
                    name: '12mm',
                    category: 'Socket',
                },
                {
                    name: '13mm',
                    category: 'Socket',
                },
                {
                    name: '14mm',
                    category: 'Socket',
                },
                {
                    name: '15mm',
                    category: 'Socket',
                },
                {
                    name: '11/32"',
                    category: 'Socket',
                },
                {
                    name: '3/8"',
                    category: 'Socket',
                },
                {
                    name: '7/16"',
                    category: 'Socket',
                },
                {
                    name: '1/2"',
                    category: 'Socket',
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
        addToTable(item) {
            console.log('added from the app method')
            this.toolBox.push(item);
        },
        removeFromTable(item) {
            console.log("removed from table");
            this.toolBox.splice(this.toolBox.indexOf(item), 1);
        },

        editTable(item){
            console.log("editing item in app.js");
        },
    },
    computed: {
        topDrawer: function () {
            return this.toolBox.filter(function (item) {
                return item.category === 'Socket';
            })
        },

        rightBottomDrawer: function () {
            return this.toolBox.filter(function (item) {
                return item.category === 'PowerTool';
            })
        },
    },

    mounted: function () {
        if (localStorage.getItem('toolBox')) {
            this.toolBox = JSON.parse(localStorage.getItem('toolBox'));
        }
    },

    watch: {
        toolBox: {
            handler: function (newList) {
                localStorage.setItem('toolBox', JSON.stringify(newList));
            }
        },
    }
})