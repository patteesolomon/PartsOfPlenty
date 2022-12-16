const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./DefaultLayout.jsx');

class Edit extends React.Component{
  render() {
    const {e} = this.props.itemType;
    {
        return (<div>
          <h2>{e.quantity} remaining</h2> <br/>
          <form action={`/items/${e._id}/update?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.itemType.name}/><br/>
          Description: <input type="text" name="description" defaultValue={this.props.itemType.description}/><br/>
          Provider: <input type="text" name="provider" defaultValue={this.props.itemType.provider}/><br/>
          Likes: <input type="number" name="likes" defaultValue={this.props.itemType.likes}/><br/>
          Quantity: <input type="number" name="quantity" defaultValue={this.props.itemType.quantity}/><br/>
          Sponsored: <input type="checkbox" name="sponsored" defaultValue={this.props.itemType.sponsored}/><br/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
        </div>)
      }
    }
  }

module.exports= Edit;