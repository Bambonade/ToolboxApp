
app.component('toolbox', {
    template: `
      <div class="container-fluid">
        <!-- TOP DRAWER -->
        <div class="row">
            <div class="col bg-primary">
                <drawer :items="topDrawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
        </div>
        <div class="row">
            <!-- LEFT 2nd DRAWER -->
            <div class="col bg-secondary">
                <drawer :items="left2Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
            <!-- RIGHT 2nd DRAWER -->
            <div class="col bg-secondary">
                <drawer :items="right2Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
        </div>

        <div class="row">
            <!-- LEFT 3nd DRAWER -->
            <div class="col bg-primary">
                <drawer :items="left3Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
            <!-- RIGHT 3nd DRAWER -->
            <div class="col bg-primary">
                <drawer :items="right3Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
        </div>

        <div class="row">
            <!-- LEFT 4nd DRAWER -->
            <div class="col bg-secondary">
                <drawer :items="left4Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
            <!-- RIGHT 4nd DRAWER -->
            <div class="col bg-secondary">
                <drawer :items="right4Drawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
        </div>


        <div class="row">
            <!-- LEFT BOTTOM DRAWER -->
            <div class="col bg-primary">
                <drawer :items="leftBottomDrawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
            <!-- RIGHT BOTTOM DRAWER -->
            <div class="col bg-primary">
                <drawer :items="rightBottomDrawer"
                          @remove-item="removeFromTable"></drawer>
            </div>
        </div>

    </div>
    `
});