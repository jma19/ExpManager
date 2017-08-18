define([
    'backbone',
    'handlebars',
    'modules/management/collections/experiments',
    'modules/management/views/newExperimentPop',
    'text!../templates/experiment.hbs'
], function (Backbone, Handlebars, Experiments, ExprPop, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        events: {
          'click .grid-del': 'removeExprRecords',  
          'click .grid-add': 'addExprRecord'  
        },
        
        initialize: function () {
            this.experiments = new Experiments;
            this.exprPop = new ExprPop;
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
            return this.$el;
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
                    this.$el.append(this.exprPop.render());
                    this.exprPop.show(row);
                }.bind(this)
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
        },

        addExprRecord: function () {
            var exprPop = new ExprPop;
            this.$('.experiment-list').append(exprPop.render());
            exprPop.show();
        },
        
        refreshGrid: function () {
            
        }
    });
})
;
