const React = require('react');
const itemType = require('../models/itemType.js');
class Index extends React.Component {
    render() {
        return (
        <div> 
            <h1> Inventory </h1>
            <ul>
            {this.props.items.map((item, i) => {
                return (
                    <li><a href={`/itemType/${item.id}`}>
                        {item.name.substring(0,1).toUpperCase() 
                        + item.name.substring(1) +
                    `${item.description}` +
                    `${item.provider}` + 
                    `${item.likes}` + 
                    `${item.quantity}`} </a>
                    <a href={`/itemType/${item.id}/edit`}>Edit</a>
                            <form action={`/itemType/${item.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form>
                    </li>
                )
            })}    
            </ul>
            <nav>
                <a href="/itemType/new">Add a new item</a>
            </nav>
        </div>     
        );
    }
}

module.exports = Index;