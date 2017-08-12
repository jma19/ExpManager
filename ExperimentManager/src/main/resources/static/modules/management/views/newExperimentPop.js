define([
    'backbone',
    'handlebars',
    'text!modules/management/templates/newExperimentPop.hbs'
], function (Backbone, Handlebars, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        events: {
            'click .btn-edit' : 'openForm',
            'click .btn-ok' : 'saveForm',
            'click .btn-cancel' : 'hide'
        },
        initialize: function (options) {
            this.formObj = options.formObj;
        },
        render: function () {
            this.$el.html(this.template());

            if (this.formObj) {
                this.loadFormData(this.formObj);
                this.adjustForm('disable');
            } else {
                this.adjustForm('enable');
            }
            return this;
        },
        show: function () {
            this.$('.modal').modal('show');
            return this;
        },
        hide: function () {
            this.$('.modal').modal('hide');
            return this;
        },

        loadFormData: function (formObj) {

        },

        openForm: function () {
          this.adjustForm();
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
           this.$('.btn-ok').show();
           this.$('.btn-cancel').show();
        }
    });
});