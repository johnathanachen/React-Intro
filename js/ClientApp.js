import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var myFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
      <MyTitle title='props are cool' color='rebeccapurple'/>
      <MyTitle title='props are amazing' color='mediumaquarium'/>
      <MyTitle title='props are wonderful' color='blue'/>
      </div>
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document
        .getElementById('app'))
