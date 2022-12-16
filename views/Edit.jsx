const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./DefaultLayout.jsx');

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form
      action = {`/itemType/${this.props.itemType._id}?_method=PUT`}
      method='POST'
      >
          Name: <input type="text" name="name" defaultValue={this.props.itemType.name}/><br/>
          Description: <input type="text" name="description" defaultValue={this.props.itemType.description}/><br/>
          Provider: <input type="text" name="provider" defaultValue={this.props.itemType.provider}/><br/>
          Likes: <input type="number" name="number" defaultValue={this.props.itemType.likes}/><br/>
          Quantity: <input type="number" name="number" defaultValue={this.props.itemType.likes}/><br/>
          Sponsored: <input type="checkbox" name="sponsored" defaultValue={this.props.itemType.sponsored}/><br/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;