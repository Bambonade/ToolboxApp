
app.component('toolBox', {
    props: {
        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            console.log("Removed at Table");
            this.$emit('remove-item', item)
        },

        editItem(item){
            console.log("editing at the table");
            this.$emit('edit-this-item', item);
        }
    },

    computed: {},

    template: `
      <div class="container text-center">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            {{ title }}
          </button>
          <ul class="dropdown-menu">
            <tool
                v-for="item in items"
                :item="item"
                :key="item.category"
                @remove-item="removeItem"
            ></tool>
            <br>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#addToToolBoxModal">
              Add Tool
            </button>
          </ul>
        </div>
      </div>
      </div>
    `
});

app.component('tool', {
    data() {
        return {
            vid: 'sli' + Math.floor(Math.random() * 10e16)
        }
    },

    props: {
        item: Object,
    },
    methods: {
        add() {
            this.$emit('add-item', this.item);
        },
        remove() {
            this.$emit('remove-item', this.item);
        },

    },


    template: `
      <li>{{ item.category }} || {{ item.name }}<li>
      <button class="btn btn-danger" v-on:click="remove"><i class="fas fa-minus-circle"></i> Remove</button>
    `
});