modules.define('slider__pager-item', ['i-bem-dom', 'slider__pager-item-line'], function(provide, bemDom, ItemLine) {

provide(bemDom.declElem('slider', 'pager-item', {
    onSetMod: {
        js: {
            inited: function() {
                var line = this.findChildElem(ItemLine);

                if (line) line.setMod('hidden');
            }
        },

        selected: function(name, val) {
            var line = this.findChildElem(ItemLine);

            if (!line) return;

            if (val) {
                line.setMod('hidden', false);
            } else {
                line.setMod('hidden');
            }
        }
    }
}));

});
