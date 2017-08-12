define([
    'backbone',
    'handlebars',
    'modules/management/collections/experiments',
    'text!../templates/experiment.hbs',
    'js/bootstrap-table/bootstrap-table.min'
], function (Backbone, Handlebars, Experiments, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        events: {
          'click .grid-del': 'removeExprRecords',  
          'click .grid-add': 'addExprRecords'  
        },
        
        initialize: function () {
            this.experiments = new Experiments;
            this.data = [{
                name: "Beverages",
                domainName: "Steeleye Stout",
                version: "UK",
                attackType: "1008.0000",
                status: "65"
            },
                {
                    name: "Beverages",
                    domainName: "Steeleye Stout",
                    version: "UK",
                    attackType: "1008.0000",
                    status: "65"
                }
            ]
        },
        render: function () {
            this.$el.html(this.template());
            this.initGrid(this.data);
            return this;
        },
        afterRender: function () {
            var experiments = new Experiments;
            experiments.fetch({
                success: function (collection, resp, options) {
                }.bind(this),
                error: function (collection, resp, options) {
                }
            });
        },

        initGrid: function (list) {
            this.$exprGrid = this.$('#experimentGrid').bootstrapTable({
                data: list,
                columns: [{
                    title: 'Name',
                    field: 'name'
                }, {
                    title: 'Domain Name',
                    field: 'domainName'
                }, {
                    title: 'ES Version',
                    field: 'version'
                }, {
                    title: 'Attack Type',
                    field: 'attackType'
                }, {
                    title: 'Status',
                    field: 'status'
                }, {
                    title: 'Action',
                    checkbox: true
                }],
                onDblClickRow: function (field, value, row, $element) {
                    // 显示实验信息窗口
                }
            });
        },

        removeExprRecords: function () {
            var ids = $.map(this.$('#experimentGrid').bootstrapTable('getSelections'), function (row) {
                return row.id;
            });
            this.$('#experimentGrid').bootstrapTable('remove', {
                field: 'id',
                values: ids
            });

            // 请求后台删除
            this.experiments = this.experiments.deleteBatch(ids, {
                success: function (collection, resp, options) {
                }.bind(this),
                error: function (collection, resp, options) {
                }
            });
        }
    });
})
;
