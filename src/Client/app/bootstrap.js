System.register(["angular2/platform/browser", "./Components/home.component"], function(exports_1) {
    var browser_1, home_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_component_1.HomeComponent);
        }
    }
});
