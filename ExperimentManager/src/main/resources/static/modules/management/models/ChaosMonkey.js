define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        initialize: function () {
            
        },
        defaults: {
            attackType: '1',
            frequency: '60',
            startTime: '9',
            endTime: '10'
        }
    });
});