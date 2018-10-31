block('slider').elem('pager')(
    content()(function() {
        var counter = 0;

        return this.ctx.items.map(function (item) {
            return {
                elem: 'pager-item',
                js: true,
                content: [
                    {
                        elem: 'pager-item-line'
                    },
                    {
                        elem: 'pager-item-text',
                        content: '0' + (++counter)
                    }
                ],
                attrs: {
                    'data-content': item
                }
            }
        })
    }),

    elem('pager-item')(
        tag()('div')
    )
);
