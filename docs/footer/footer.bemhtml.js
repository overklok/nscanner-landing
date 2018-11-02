block('footer')(
    tag()('section'),

    elem('icons')(
        content()(function () {
            return this.ctx.icons.map(function (item) {
                return {
                        elem: 'icon',
                        img_url: item.img_url,
                        href_url: item.href_url
                    }
                })
            }
        )
    ),

    elem('icon')(
        tag()('a'),

        attrs()(function() {
            return {
                'href': this.ctx.href_url,
                'style': 'background-image: url(\'' + this.ctx.img_url + '\');'
            }
        })
    )
);
