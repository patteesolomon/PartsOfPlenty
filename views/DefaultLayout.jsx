const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href='https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple|3d-float' rel='stylesheet' type='text/css'></link>
          <link rel="stylesheet" type="text/css" href='style.css'/>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;