define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        url: '/experiment/',
        initialize: function () {
            
        },
        defaults: {
            name: 'Test1',
            startTime: 10000000,
            endTime: 1000000000,
            status: 1,
            esDomainConfig: {
                domainName: 'www.amazon.com',
                instanceCount: 2,
                version: 'V1.0.0'
            },
            chaosMonkeyConfig: {
                domainName: 'www.amazon.com',
                frequency: 2,
                timeUnit: 'DAY',
                esChaosTypes: ['ICDownChaosType', 'ICFailToStartChaosType']
            }

        }
    });
});