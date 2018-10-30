block('benefits')(
    tag()('section'),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return {src: this.ctx.url}
        })
    )
);
