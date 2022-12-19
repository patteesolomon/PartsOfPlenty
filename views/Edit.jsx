const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./DefaultLayout.jsx');

class Edit extends React.Component{
  render() {
    {
        return (<div>
          <h2> {`${this.props.itemType.quantity}`} Items Remaining </h2> <br/>
          <form action={`/itemType/${this.props.itemType._id}/update?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.itemType.name}/><br/>
          Description: <input type="text" name="description" defaultValue={this.props.itemType.description}/><br/>
          Provider: <input type="text" name="provider" defaultValue={this.props.itemType.provider}/><br/>
          Likes: <input type="number" name="likes" defaultValue={this.props.itemType.likes}/><br/>
          Quantity: <input type="number" name="quantity" defaultValue={this.props.itemType.quantity}/><br/>
          Sponsored: <input type="checkbox" name="sponsored" defaultValue={this.props.itemType.sponsored}/><br/>
          In-Stock: {
                    this.props.itemType.quantity > 0 ? <input type="checkbox" name="inStock" defaultChecked />: <input type="checkbox" name="inStock"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
        </div>)
      }
    }
  }

module.exports= Edit;