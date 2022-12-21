const React = require('react');
const DefaultLayout = require('./DefaultLayout');

class Show extends React.Component {
    render() {
        var Item = this.props.itemType;
            return (
            <DefaultLayout>
            <div className="buy-container">
            <h1> Product Stock </h1>
            <h3 className="stock">
            </h3>
            <div>
                <div className='product-card'><img src={Item.img}/></div>
                <br />
                {'Name: ' + `${Item.name}`.charAt(0).toUpperCase() + `${Item.name}`.slice(1)}
                <br />
                {`Quantity: ${Item.quantity}`}
            </div>
                {'In-Stock: ' + `${Item.inStock}`}
                <br />
                <a href="/itemType/">Back</a>
                <br />
                <br />
                {/* 
                Always use the route name for forum actions unless you're using a magic 
                marker from God. In this case you're not. ${Item.id} and stuff like this is 
                the only thing that works. 
                */}
            <form action={`/itemType/buy/${Item.id}?_method=PUT`} method="POST"> 
            {this.props.itemType.quantity > 0 ? <input className="buy-button" type="submit" value="buy"/> :
            <h3>Out of stock</h3>}
            </form>
        </div>
        </DefaultLayout>
        );
    }
}

module.exports = Show;