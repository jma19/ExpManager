define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        initialize: function () {
            
        },
        defaults: {
            domainName: 'Cluster Name',
            instanceCount: 99,
            version: 'V1.0.0'
        }
    });
});