const React = require('react');

class Show extends React.Component {
    render() {
        var Item = this.props.itemType;
            return (
            <div style={{backgroundColor: '#737373', font: 'Serif', color: 'orange', padding: '5px', textAlign: "center", textShadow: 'rgb(173, 60, 60)',
            height: '400px', boxShadow: '0 4px 6px rgb(80, 255, 173)'}}>
            <div className="buy-container">
            <h1> {Item.name} </h1>
            <h3 className="stock">
            </h3>
            <div>
                <><img style ={{height: '400px', width: 'auto'}} src={Item.img}/></>
                <br />
                {'Name: ' + `${Item.name}`.charAt(0).toUpperCase() + `${Item.name}`.slice(1)}
                <br />
                {`Quantity: ${Item.quantity}`}
                <br />
                {`Description: ${Item.description}`}
            
                {'In-Stock: ' + `${Item.inStock}`}
                <br />
                <a href="/itemType">Back</a>
                <br />
                <br />
                </div>
                {/* 
                Always use the route name for forum actions unless you're using a magic 
                marker from God. In this case you're not. ${Item.id} and stuff like this is 
                the only thing that works. 
                */}
            <form action={`/itemType/buy/${Item.id}?_method=PUT`} method="POST"> 
            {this.props.itemType.quantity > 0 ? <input className="buy-button" type="submit" value="BUY"/> :
            <h3>Out of stock</h3>}
            </form>
        </div>
        </div>
        );
    }
}

module.exports = Show;