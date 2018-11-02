INTVL = 4000;

modules.define('slider__pager', ['i-bem-dom', 'slider__pager-item'], function(provide, bemDom, SliderPagerItem) {

provide(bemDom.declElem('slider', 'pager', {
    onSetMod: {
        js: {
            inited: function() {
                var items = this.findChildElems(SliderPagerItem)._entities;

                this._runAutoSwitch(items);

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    item._domEvents().on('click', this._onItemClick(item, items));
                }
            }
        }
    },

    _runAutoSwitch: function(items) {
        this.ausnum = 0;
        var self = this;

        self._makeAutoSwitch(items);

        this.aus = setInterval(function() {
            self._makeAutoSwitch(items);
        }, INTVL);
    },

    _makeAutoSwitch: function(items) {
        this.ausnum = this.ausnum === (items.length - 1) ? 0 : this.ausnum + 1;

        this._click(items[this.ausnum], items);
    },

    _onItemClick: function(item, items) {
        var self = this;

        return function() {
            clearInterval(self.aus);

            self._click(item, items);

            setTimeout(function() {
                self.aus = setInterval(function() {
                    self._makeAutoSwitch(items);
                }, INTVL);
            }, 1000)
        }
    },

    _click: function(item, items) {
        var text = item.domElem.data('content');

        for (var i = 0; i < items.length; i++) {
            var _item = items[i];

            if (_item === item) {
                _item.setMod("selected");
            } else {
                _item.setMod("selected", false);
            }
        }

        var id = this.domElem.data('target_id');

        var el = document.getElementById(id);

        if (el) {
            el.classList.remove('show');
            el.classList.add('hide');

            setTimeout(function() {
                el.innerText = text;
                el.classList.remove('hide');
                el.classList.add('show');
            }, 500)
        }
    }
}));

});
