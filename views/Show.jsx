const React = require('react');

class Show extends React.Component {
    render() {
        var Item = this.props;
            //if{
            return (
            <div className="buy-container">
            <h1> Product Stock </h1>
            <h3 className="stock">
            <form action={`/Item/BUY/${Item.id}?_method=PUT`} method="POST">
            
            </form></h3>
            <div>
                {'Name' + `${Item.name}`.charAt(0).toUpperCase() + `${Item.name}`.slice(1)}
                <br />
                {`Quantity: ${Item.quantity}`}
            </div>
                {'In-Stock:' + `${Item.inStock}`}
                
                <a href="/itemType/">Back</a>
                <br />
            <input className="buy-button" type="submit" value="BUY"/>

        </div>
        );
    }
}

module.exports = Show;