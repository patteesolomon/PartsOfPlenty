const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#737373', font: 'Serif', color: 'white', padding: '5px', height: 'fit-content', textAlign: "center", textShadow: '0 4px 6px rgb(80, 255, 173)', boxShadow: '0 4px 6px rgb(80, 255, 173)'}}>
        <h1>New Item Page</h1>
        <form action='/itemType' method='POST'>
          Name: <input type="text" name="name" /><br/>
          Description: <input type="text" name="description"/><br/>
          Provider: <input type="text" name="provider"/><br/>
          Likes: <input type="number" name="likes"/><br/>
          Quantity: <input type="number" name="quantity"/><br/>
          Sponsored: <input type="checkbox" name="sponsored" /><br/>
          Image: <input type="text" name="img" /><br/>
          <input type='submit' name='' value='Create Item' />
        </form>
      </div>
    );
  }
}

module.exports = New;
