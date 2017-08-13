define([
    'backbone',
    'handlebars',
    '../collections/clusters',
    'text!../templates/cluster.hbs'
], function (Backbone, Handlebars, Clusters, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        initialize: function () {
            this.cluster = new Clusters;
            // 模拟数据
            this.data = [{
                domainName: 'www.amz.com',
                instanceCount: 2,
                version: 'V1.0.0'
            }, {
                domainName: 'www.amz.com',
                instanceCount: 2,
                version: 'V1.0.0'
            }];
        },

        render: function () {
            this.$el.html(this.template());
            // this.cluster.fetch({
            //     success: function (collection, resp, options) {
            //         this.data = collection;
            //         this.initGrid(this.data);
            //     }.bind(this),
            //     error: function (collection, resp, options) {
            //         alert('Failed to fetch cluster list');
            //     }
            // });
            // 模拟初始化表格，真实初始化点在line 29
            this.initGrid(this.data);
            return this.$el;
        },

        initGrid: function (collection) {
            this.$('#clusterGrid').bootstrapTable({
                data: collection,
                columns: [{
                    label: 'Domain Name',
                    name: 'domainName'
                }, {
                    label: 'Instance Count',
                    name: 'instanceCount'
                }, {
                    label: 'Version',
                    name: 'version'
                }]
            });
        }
    });
});
