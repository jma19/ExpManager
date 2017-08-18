define([
    'backbone',
    'handlebars',
    'modules/management/models/experiment',
    'text!modules/management/templates/newExperimentPop.hbs'
], function (Backbone, Handlebars, Experiment, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        events: {
            'click .btn-edit' : 'openForm',
            'click .btn-ok' : 'saveForm',
            'click .btn-cancel' : 'hide'
        },
        // initialize: function (options) {
        //     this.formObj = options.formObj;
        // },
        render: function () {
            this.$el.html(this.template());


            return this.$el;
        },
        show: function (exprInfo) {
            if (exprInfo) {
                this.loadFormData(exprInfo);
                this.adjustForm('disable');
            } else {
                this.adjustForm('enable');
            }
            this.$('.modal').modal('show');
        },
        hide: function () {
            this.$('.modal').modal('hide');
        },

        loadFormData: function (formObj) {

        },

        openForm: function () {
          this.adjustForm('enable');
        },
        adjustForm: function (operType) {
            switch (operType) {
                case 'enable':
                    this.$('input').attr('disabled', false);
                    this.$('select').attr('disabled', false);
                    this.$('.btn-edit').hide();
                    this.$('.btn-ok').show();
                    this.$('.btn-cancel').show();
                    break;
                default:
                    this.$('input').attr('disabled', true);
                    this.$('select').attr('disabled', true);
                    this.$('.btn-edit').show();
                    this.$('.btn-ok').hide();
                    this.$('.btn-cancel').hide();
                    break;
            }
          //初始化多选框等控件
        },
        
        saveForm: function () {
            var exprModel = new Experiment;
            exprModel.set();
        }
    });
});