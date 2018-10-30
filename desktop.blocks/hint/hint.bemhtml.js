block('hint')(
    content()(function() {
            return [
                {
                    elem: 'line',
                    content: ''
                },
                {
                    elem: 'text',
                    content: this.ctx.text
                }
            ]
        }
    )
);
