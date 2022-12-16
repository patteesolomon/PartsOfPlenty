const React = require('react');

class Show extends React.Component {
    render() {
        var Item = this.props.itemType;
        const renderForm = () => {
            if(Item.quantity > 0){
            return <div className="buy-container"><form action={`/Item/BUY/${Item.id}?_method=PUT`} method="POST">
            <input className="buy-button" type="submit" value="BUY"/>
        </form>
        <h3>There is {Item.quantity} {Item.name}'s left</h3>
        </div>
            }
            else
            {
                return <h3 className="outofstock">Out Of Stock</h3>
            }
        }
        return(
            <div>
                <h1> Product Stock </h1>
                <h2>{Item.name.charAt(0).toUpperCase() + Item.name.slice(1)}</h2>
                <h3>{Item.quantity}</h3>
                <a href="/itemType/">Back</a>
            </div>
        );
    }
}

module.exports = Show;