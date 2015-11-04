'use strict';

app.accountView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_accountView
// END_CUSTOM_CODE_accountView
(function(parent) {
    var accountViewModel = kendo.observable({
        fields: {
            username1: '',
            dropdownlist: '',
            points: '',
            date: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('accountViewModel', accountViewModel);
})(app.accountView);

// START_CUSTOM_CODE_accountViewModel
// END_CUSTOM_CODE_accountViewModel