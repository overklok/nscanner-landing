block('blog')(
    tag()('section'),

    elem('post')(
        content()(function() {
            return [
                {
                    elem: 'image',
                    url: this.ctx.url
                },
                {
                    elem: 'cont',
                    content: [
                        {
                            elem: 'heading',
                            content: this.ctx.heading
                        },
                        {
                            elem: 'date',
                            content: this.ctx.date
                        },
                        {
                            elem: 'text',
                            content: this.ctx.text
                        }
                    ]
                }
            ]
        })
    ),

    elem('image')(
        tag()('img'),

        attrs()(function() {
            return {src: this.ctx.url}
        })
    )
);
