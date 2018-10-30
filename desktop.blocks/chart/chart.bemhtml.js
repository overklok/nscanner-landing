block('chart')(
    tag()('svg'),

    content()(function() {
        return {
            elem: 'circle'
        }
    }),

    attrs()(function() {
        return {
            'viewBox': "0 0 36 36"
        }
    }),

    elem('circle')(
        tag()('path'),

        attrs()(function() {
            return {
                'stroke-dasharray': "100, 100",
                'd':    "M18 2.0845" +
                        "a 15.9155 15.9155 0 0 1 0 31.831" +
                        "a 15.9155 15.9155 0 0 1 0 -31.831"
            }
        })
    )
);
