block('noscript')(
    tag()('noscript'),

    content()(function() {
        return {
            elem: 'div',
            content: {
                elem: 'img',
                src: 'https://mc.yandex.ru/watch/51050828',
                style: 'position:absolute; left:-9999px;'
            }
        }
    })
);
