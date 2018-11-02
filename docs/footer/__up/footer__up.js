modules.define('footer__up', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('footer', 'up', {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents().on('click', this._onClick);
            }
        }
    },

    _onClick: function () {
        var id = this.domElem.data('scroll_to_id');

        var el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
}));

});
