define(['rivets'], function(rivets){
    rivets.configure({
        prefix: 'rv',
        adapter: {
            subscribe: function(obj, keypath, callback) {
                callback.wrapped = function(m, v) { callback(v) };
                obj.on('change:' + keypath, callback.wrapped);
            },
            unsubscribe: function(obj, keypath, callback) {
                obj.off('change:' + keypath, callback.wrapped);
            },
            read: function(obj, keypath) {
                return obj.get(keypath);
            },
            publish: function(obj, keypath, value) {
                obj.set(keypath, value);
            }
        }
    });
    return rivets;
});