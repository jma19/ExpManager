define([
    'backbone',
    'handlebars',
    'modules/management/views/experiment',
    'modules/management/views/cluster',
    'modules/management/views/analysis',
    'text!modules/management/templates/main.hbs'
], function (Backbone, HandleBars, Experiment, Cluster, Analysis, tpl) {
    return Backbone.View.extend({
        template: HandleBars.compile(tpl),

        initialize: function () {
          this.experimentView = new Experiment;
          this.clusterView = new Cluster;
        },

        render: function () {
            this.$el.html(this.template());
            this.$('#experiments').append(this.experimentView.render());
            this.$('#clusters').append(this.clusterView.render());
            return this.$el;
        },

        afterRender: function () {
            this.$('#experiments').append(this.experimentView.render());
            this.$('#clusters').append(this.clusterView.render());
            // this.$('#clusters').append(Cluster.afterRender());
            return this.$el;
        }
    });
});