const React = require('react');

class Show extends React.Component {
    render() {
        var Item = this.props.itemType;
        return(
            <div>
                <h1> Current Trends </h1>
                <h2>{Item.name.charAt(0).toUpperCase() + Item.name.slice(1)}</h2>
                <h3>{Item.quantity}</h3>
                <a href="/itemType/">Back</a>
                <form action={`/Item/${Item.id}?method=PUT`} method="POST">
                     <input type="submit" name="quantity" value="BUY" />
                  </form>

            </div>
        );
    }
}

module.exports = Show;