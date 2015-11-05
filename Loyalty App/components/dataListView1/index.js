'use strict';

app.dataListView1 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_dataListView1
// END_CUSTOM_CODE_dataListView1
(function(parent) {
    var dataProvider = app.data.defaultProvider,
        flattenLocationProperties = function(dataItem) {
            var propName, propValue,
                isLocation = function(value) {
                    return propValue && typeof propValue === 'object' &&
                        propValue.longitude && propValue.latitude;
                };

            for (propName in dataItem) {
                if (dataItem.hasOwnProperty(propName)) {
                    propValue = dataItem[propName];
                    if (isLocation(propValue)) {
                        dataItem[propName] =
                            kendo.format('Latitude: {0}, Longitude: {1}',
                                propValue.latitude, propValue.longitude);
                    }
                }
            }
        },
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'Comments',
                dataProvider: dataProvider
            },

            change: function(e) {
                var data = this.data();
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];

                    flattenLocationProperties(dataItem);
                }
            },
            schema: {
                model: {
                    fields: {
                        'Comment': {
                            field: 'Comment',
                            defaultValue: ''
                        },
                        'UserId': {
                            field: 'UserId',
                            defaultValue: ''
                        },
                    }
                }
            },
            serverSorting: true,
            serverPaging: true,
            pageSize: 50
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListView1Model = kendo.observable({
            dataSource: dataSource
        });

    parent.set('dataListView1Model', dataListView1Model);
})(app.dataListView1);

// START_CUSTOM_CODE_dataListView1Model
// END_CUSTOM_CODE_dataListView1Model