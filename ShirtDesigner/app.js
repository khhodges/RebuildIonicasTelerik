(function() {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        data: {}
    };

    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {

                // you can change the default transition (slide, zoom or fade)
                transition: 'overlay',
                // comment out the following line to get a UI which matches the look
                // and feel of the operating system
                skin: 'flat',
                statusBarStyle: 'black-translucent'
            });
        });
    };

    if (window.cordova) {
        // this function is called by Cordova when the application is loaded by the device
        document.addEventListener('deviceready', function() {
            // hide the splash screen as soon as the app is ready. otherwise
            // Cordova will wait 5 very long seconds to do it for you.
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element != null) {
                if (window.navigator.msPointerEnabled) {
                    $("#navigation-container").on("MSPointerDown", "a", function(event) {
                        app.keepActiveState($(this));
                    });
                } else {
                    $("#navigation-container").on("touchstart", "a", function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $("#navigation-container li a.active").removeClass("active");
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
    
    
     app.anotherListView =  function initListView() {
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
        };
}());

// START_CUSTOM_CODE_kendoUiMobileApp
// END_CUSTOM_CODE_kendoUiMobileApp