define([
    'backbone',
    '../models/Cluster'
], function (Backbone, cluster) {

    return Backbone.Collection.extend({
        url: '/cluster',
        model: cluster,

        // 删除集合中所有的模型
        deleteBatch: function(ids, options) {
            var result = Backbone.sync.call(this, 'delete', this, _.extend({
                url: this.url + '/' + ids
            }, options));
            this.remove(ids);
            return result;
        }
    });
});