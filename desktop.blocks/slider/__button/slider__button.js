modules.define('slider__button', ['i-bem-dom'], function(provide, bemDom) {

    console.log(this);

provide(bemDom.declElem('slider', 'button', {
    onSetMod: {
        js: {
            inited: function() {
                console.log(this);
                this._domEvents().on('click', this._onClick);
            },
        },

        'mod1': function(modName, modVal, prevModVal) {
            console.log('m1 trig');
        }
    },

    _onClick: function () {
        console.log("ONCLK", this.ctx);
    }
}));

});
