block('how')(
    tag()('section'),

    elem('subtitle')(
        content()(function() {
            return {
                elem: 'text',
                content: this.ctx.content
            }
        })
    ),

    elem('comment')(
        content()(function() {
            return this.ctx.lines.map(function (item) {
                return {
                    elem: 'commtext',
                    content: item
                }
            })
        })
    )
);
