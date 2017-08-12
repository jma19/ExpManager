require.config({
    paths: {
        jquery: 'js/jquery/jquery-3.1.1',
        underscore: 'js/underscore/underscore',
        backbone: 'js/backbone/backbone-1.3.3.min',
        bootstrap: 'js/bootstrap/js/bootstrap.min',
        handlebars: 'js/handlebars/handlebars',
        text: 'js/text/text'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});
require(['backbone', 'modules/management/views/mainView'],
    function (Backbone, MainView) {
    var AppView = Backbone.View.extend({
        el: '#mainContent',
        render: function () {
            var mainView = new MainView();
            this.$el.append(mainView.render());
        }
    });
        (new AppView).render();
})