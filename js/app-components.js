
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
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle w-50" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
          </button>
          <div class="dropdown-menu">
            <ul class="list-group">
              <tool
                  v-for="item in items"
                  :item="item"
                  :key="item.category"
                  @remove-item="removeItem"
              ></tool>
            </ul>
            <button type="button" class="btn btn-primary fas fa-plus-circle" data-bs-toggle="modal"
                    data-bs-target="#addToToolBoxModal">
              <i class="fas fa-plus-circle">Add Tool</i>
            </button>
          </div>
        </div>
      </div>
    `
});

app.component('tool', {

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
      <li class="list-group-item flex-fill">
      {{ item.category }} || {{ item.name }}
      <button class="btn btn-danger" v-on:click="remove"><i class="fas fa-minus-circle"></i> Remove</button>
      </li>
    `
});