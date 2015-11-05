'use strict';

app.eventEntry = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_eventEntry

// END_CUSTOM_CODE_eventEntry
(function(parent) {
    var eventEntryModel = kendo.observable({
        fields: {
            username3: '',
            username2: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('eventEntryModel', eventEntryModel);
})(app.eventEntry);

// START_CUSTOM_CODE_eventEntryModel
// END_CUSTOM_CODE_eventEntryModel