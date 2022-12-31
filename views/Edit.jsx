const React = require('react');
// As you can see we are using the app layout

class Edit extends React.Component{
  render() {
        return (
        <div style={{backgroundColor: '#737373', font: 'Serif', color: 'white', padding: '5px', height: 'fitContent', textAlign: "center", textShadow: '0 4px 6px rgb(80, 255, 173)', boxShadow: '0 4px 6px rgb(80, 255, 173)'}}>
          <div className='product-card'>
          <h3> {`${this.props.itemType.quantity}`} Items Remaining </h3>
          </div>
          <br/>
          <form action={`/itemType/${this.props.itemType._id}/update?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.itemType.name}/><br/><br />
          Description: <input type="text" name="description" defaultValue={this.props.itemType.description}/><br/><br />
          Provider: <input type="text" name="provider" defaultValue={this.props.itemType.provider}/><br/><br />
          Likes: <input type="number" name="likes" defaultValue={this.props.itemType.likes}/><br/><br />
          Quantity: <input type="number" name="quantity" defaultValue={this.props.itemType.quantity}/><br/><br />
          Sponsored: <input type="checkbox" name="sponsored" defaultValue={this.props.itemType.sponsored}/><br/><br />
          In-Stock: {
                    this.props.itemType.inStock ? <input type="checkbox" name="inStock" defaultChecked />: <input type="checkbox" name="inStock"/> }
          <br />
          Image Url: <input type="text" name="img" defaultValue={this.props.itemType.img}/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
        </div>
        );
      }
  }

module.exports= Edit;