define([
    'backbone',
    'handlebars',
    'modules/management/models/experiment',
    'text!modules/management/templates/newExperimentPop.hbs'
], function (Backbone, Handlebars, Experiment, tpl) {
    return Backbone.View.extend({
        template: Handlebars.compile(tpl),

        events: {
            'click .btn-edit': 'openForm',
            'click .btn-ok': 'saveForm',
            'click .btn-cancel': 'hide'
        },

        initialize: function () {
            this.exprModel = new Experiment;
        },

        render: function () {
            this.$el.html(this.template());
            this.exprFormValidator();
            this.domainFormValidator();
            this.ebsFormValidator();
            this.clusterFormValidator();
            this.monkeyFormValidator();
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
            this.$('.expr-form').data('bootstrapValidator').validate();
            this.$('.domain-form').data('bootstrapValidator').validate();
            this.$('.ebs-form').data('bootstrapValidator').validate();
            this.$('.cluster-form').data('bootstrapValidator').validate();
            this.$('.monkey-form').data('bootstrapValidator').validate();
            // 组织数据
            var exprData = this.$('.expr-form').data();
            var domainData = this.$('.domain-form').data();
            var ebsData = this.$('.ebs-form').data();
            var clusterData = this.$('.cluster-form').data();
            var monkeyData = this.$('.monkey-form').data();
            this.exprModel.set();
            if (exprData.expId) {
                this.exprModel.update();
            } else {
                this.exprModel.save();
            }
        },

        exprFormValidator: function () {
            this.$('.expr-form').bootstrapValidator({
                excluded: [':disabled', ':hidden', ':not(:visible)'],
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: 'Please input a name.'
                            }
                        }
                    }
                }
            })
        },

        domainFormValidator: function () {
            this.$('.domain-form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    domainName: {
                        validators: {
                            notEmpty: {
                                message: 'Please input domain name.'
                            }
                        }
                    },
                    instanceCount: {
                        validators: {
                            notEmpty: {
                                message: 'Please input instance count.'
                            },
                            regexp: {
                                regexp: /^[1-9]*[1-9][0-9]*$/,
                                message: 'The count must be a positive number.'
                            }
                        }
                    },
                    instanceType: {
                        validators: {
                            notEmpty: {
                                message: 'Please select instance type.'
                            }
                        }
                    }
                }
            })
        },

        clusterFormValidator: function () {
            this.$('.cluster-form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    dedicatedMasterType: {
                        validators: {
                            notEmpty: {
                                message: 'Please select dedicated master type.'
                            }
                        }
                    },
                    dedicatedMasterCount: {
                        validators: {
                            notEmpty: {
                                message: 'Please input dedicated master count.'
                            },
                            regexp: {
                                regexp: /^[1-9]*[1-9][0-9]*$/,
                                message: 'The count must be a positive number.'
                            }
                        }
                    }
                }
            })
        },

        ebsFormValidator: function () {
            this.$('.ebs-form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    volumeType: {
                        validators: {
                            notEmpty: {
                                message: 'Please select dedicated volume type.'
                            }
                        }
                    },
                    volumeSize: {
                        validators: {
                            notEmpty: {
                                message: 'Please input dedicated master count.'
                            },
                            regexp: {
                                regexp: /^[1-9]*[1-9][0-9]*$/,
                                message: 'The count must be a positive number.'
                            }
                        }
                    }
                }
            })
        },

        monkeyFormValidator: function () {
            this.$('.monkey-form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    period: {
                        validators: {
                            notEmpty: {
                                message: 'Please select dedicated volume type.'
                            }
                        }
                    },
                    timeUnit: {
                        validators: {
                            notEmpty: {
                                message: 'Please input dedicated master count.'
                            },
                            regexp: {
                                regexp: /^[1-9]*[1-9][0-9]*$/,
                                message: 'The count must be a positive number.'
                            }
                        }
                    },
                    esChaosType: {
                        validators: {
                            notEmpty: {
                                message: 'Please input dedicated master count.'
                            }
                        }
                    }
                }
            })
        }
    });
});