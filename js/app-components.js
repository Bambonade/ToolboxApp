
app.component('drawer', {
    props: {
        allowEdit: Boolean,

        title: String,
        items: Array,
    },

    methods: {
        removeItem(item) {
            this.$emit('remove-item', item)
        },

        editItem(item, newItem){
            this.$emit('edit-drawer', item, newItem);
        }
    },

    computed: {},

    template: `
      <div class="container text-center">
        
          <button class="btn btn-secondary w-100 mx-0 px-0 border-1" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
          </button>
          <div class="dropdown-menu">
            <ul class="list-group">
              <tool
                  :allow-edit="allowEdit"
                  v-for="item in items"
                  :item="item"
                  :key="item.category"
                  @edit-this-item="editItem"
                  @remove-item="removeItem"
              ></tool>
            </ul>
            <button type="button" class="btn btn-primary fas fa-plus-circle" data-bs-toggle="modal"
                    data-bs-target="#addtodrawermodal">
              <i class="fas fa-plus-circle">Add Tool</i>
            </button>
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
        allowEdit: Boolean,
        item: Object,
    },
    methods: {
        add() {
            this.$emit('add-item', this.item);
        },
        remove() {
            this.$emit('remove-item', this.item);
        },

        edit(item, newItem){
            this.$emit('edit-this-item', item, newItem)
        }
    },

    template: `
      <li class="list-group-item">
      {{ item.category }} || {{ item.name }}
      <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="editdrawermodal" v-on:click="edit"><i class="fa-solid fa-pencil"></i>Edit</button>
      <button class="btn btn-danger" v-on:click="remove"><i class="fas fa-minus-circle"></i> Remove</button>
      </li>
    `
});