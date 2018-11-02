modules.define('slider__button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('slider', 'button', {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents().on('click', this._onClick);
            },
        },
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
