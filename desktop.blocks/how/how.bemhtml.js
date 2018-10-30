block('how')(
    tag()('section'),

    elem('subtitle')(
        content()(function() {
            return {
                elem: 'text',
                content: this.ctx.content
            }
        })
    )
);
