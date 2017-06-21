import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
                    div(null,
                        MyTitleFactory({ title: 'props are the best', color: 'red' }),
                        MyTitleFactory({ title: 'semicolons are the worst', color: 'blue' }),
                        MyTitleFactory({ title: 'jklol its ok i like semicolons', color: 'green' }),
                        MyTitleFactory({ title: 'haha i like to watch youtube', color: 'yellow' })
                    )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document
        .getElementById('app'))
