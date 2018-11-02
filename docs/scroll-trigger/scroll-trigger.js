modules.define('scroll-trigger', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var trigger = new ScrollTrigger({once: true});
            }
        }
    }
}));

});
