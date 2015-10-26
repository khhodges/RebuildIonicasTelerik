'use strict';

app.shirtSelection = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_shirtSelection
        function initListView() {
            var ds = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "https://bs1.cdn.telerik.com/v1/zaXw8H0sTlOGZnOx/b4fd5bd0-7b19-11e5-b9e7-99804654be7b",
                        dataType: "json"
                    }
                },
                change: function() {
                    debugger;
                }
            });
            $("#listview").kendoMobileListView({
                dataSource: ds,
                template: "#:name#"
            });
        }

// END_CUSTOM_CODE_shirtSelection