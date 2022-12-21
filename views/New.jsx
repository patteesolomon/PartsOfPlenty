const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Item Page</h1>
        <form action='/itemType' method='POST'>
          Name: <input type="text" name="name" /><br/>
          Description: <input type="text" name="description"/><br/>
          Provider: <input type="text" name="provider"/><br/>
          Likes: <input type="number" name="likes"/><br/>
          Quantity: <input type="number" name="quantity"/><br/>
          Sponsored: <input type="checkbox" name="sponsored" /><br/>
          In-Stock: <input type="checkbox" name="inStock"/><br/>
          Image: <input type="text" name="img" /><br/>
          <input type='submit' name='' value='Create Item' />
        </form>
      </div>
    );
  }
}

module.exports = New;
