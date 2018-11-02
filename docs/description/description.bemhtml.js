block('description')(
    tag()('section'),

    elem('logo')(
        tag()('img'),

        attrs()(function() {
            return {src: this.ctx.url}
        })
    ),

    elem('texts')(
        content()(function() {
            return this.ctx.texts.map(function(item) {
                return {
                    elem: 'text',
                    content: item
                }
            })
        })
    ),

    elem('text')(
        tag()('p')
    )
);
