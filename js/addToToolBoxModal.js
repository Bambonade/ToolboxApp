
app.component('addToToolBoxModal', {
    data: function () {
        return {
            newItem: {
                name: '',
                category: '',
            },
        }
    },

    props: {

        title: {
            type: String,
            required: true,
        },

        formSubmit: {
            type: Function,
            default: function () {
            }

        }
    },

    methods: {
        addToTable() {
            if (this.newItem.name && this.newItem.category) {
                this.$emit('add-To-Table', this.newItem);

                this.newItem = {
                    name: '',
                    category: '',
                }
                bootstrap.Modal.getInstance(this.$el).hide();
            }

        },
    },

    mounted() {

        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
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
      <div class="modal fade" tabindex="-1" role="dialog">
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
                  <select id="category" type="text" class="form-select" v-model="newItem.category" autofocus required>
                    <option value="Socket">Socket</option>
                    <option value="Wrench">Wrench</option>
                    <option value="Ratchet">Ratchet</option>
                    <option value="PowerTool">Power Tool</option>
                    <option value="Pneumatic">Pneumatic</option>
                    <option value="Plier">PLIER</option>
                    <option value="Bit">BIT</option>
                  </select>
                  <div class="invalid-feedback">
                    Please enter the product's category
                  </div>
                </div>
              </div>
              <hr>
              <div class="container-fluid" id="modalFooter">
                <div class="text-center">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                  <button type="submit" class="btn btn-primary" @click="addToTable">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>


    `
});
