'use strict';

app.contacts = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_contacts
// END_CUSTOM_CODE_contacts
(function(parent) {
    var contactsModel = kendo.observable({
        openLink: function(url) {
            window.open(url, '_system');
            if (window.event) {
                window.event.preventDefault && window.event.preventDefault();
                window.event.returnValue = false;
            }
        }
    });

    parent.set('contactsModel', contactsModel);
})(app.contacts);

// START_CUSTOM_CODE_contactsModel
// END_CUSTOM_CODE_contactsModel