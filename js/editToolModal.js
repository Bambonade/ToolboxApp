app.component('editItemModal', {
    data: function () {
        return {
            newItem: {
                name: this.item.name,
                category: this.item.category,
            },
        }
    },

    props: {
        item: Object,

        title: {
            type: String,
            required: true,
        },

        formSubmit: {
            type: Function,
            default: function(){}
        }
    },

    methods: {
        editDrawerItem() {
            if (this.newItem.name && this.newItem.category){
                this.$emit('edit-drawer-item', this.item, this.newItem);
                bootstrap.Modal.getInstance(this.$refs.ModalElement).hide();
            }
        },
    },

    mounted() {

        (function () {
            'use strict'

            let forms = document.querySelectorAll('.needs-validation')

            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        console.log("function is running ")
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })();
        this.$el.addEventListener('shown.bs.modal', function () {
            this.querySelector('[autofocus]').focus();
        });
    },

    template: `
      <div ref="ModalElement" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h3 class="text-center p-2">{{ title }}</h3>
              <form @submit.prevent="formSubmit" class="needs-validation" novalidate>
                <div>
                  <label for="name" class="form-label">Name</label>
                  <input id="name" type="text" class="form-control" required v-model="newItem.name" autofocus>
                  <div class="invalid-feedback">
                    Please enter the product name.
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="category" class="form-label">Category</label>
                    <input id="category" type="text" class="form-control" v-model="newItem.category">
                    <div class="invalid-feedback">
                      Please enter the Category
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container-fluid" id="modalFooter">
                  <div class="text-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                    <button type="submit" class="btn btn-primary" @click="editDrawerItem">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `
});