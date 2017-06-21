var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({
    render: function () {
        return (
            div(null,
            h1({ style: { color: this.props.color } }, this.props.title)
            )
        )
    }
})

var MyTitleFactory = React.createFactory(myTitle)

var myFirstComponent = React.createClass({
            render: function () {
                return (
                    div(null, 
                        MyTitleFactory({ title: 'props are the best', color: 'red' }),
                        MyTitleFactory({ title: 'semicolons are the worst', color: 'blue'  }),
                        MyTitleFactory({ title: 'jklol its ok i like semicolons', color: 'green'  }),
                        MyTitleFactory({ title: 'haha i like to watch youtube', color: 'yellow'  })
                    )
                )
            }
        })

        ReactDOM.render(React.createElement(myFirstComponent), document
        .getElementById('app'))