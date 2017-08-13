define([
    'backbone',
    '../views/experiment',
    '../views/cluster'
], function (Backbone, Experiment, Cluster) {
    return Backbone.Router.extend({
        routes: {
            "/experiments" : "reloadExperiments",
            "/cluster" : "reloadClusters"
        },

        initialize: function () {
          this.experiment = new Experiment();
          this.cluster = new Cluster();
        },

        reloadExperiments: function(id) {
            this.$('#experiments').append(this.experiment.afterRender());
        },

        reloadClusters : function(actions){
            this.$('#clusters').append(this.cluster.afterRender());
        }
    });
});