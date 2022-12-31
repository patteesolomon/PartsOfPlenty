const React = require('react');
const DefaultLayout = require('./DefaultLayout.jsx');
class Index extends React.Component {
    render() {
        return (
        <DefaultLayout> 
            <h1 className="test"> Parts O' Plenty! </h1>
            <div className ="bodyi">
                <ul>
            {this.props.items.map((item, i) => {
                return(
                    <main>
                        <li>
                        <div className="product-card">
                        <img src={`${item.img}`}/>
                        <div className='product-info'>
                        <br />
                        <a href={`/itemType/${item.id}`}>
                        {item.name.substring(0,1).toUpperCase() 
                        + item.name.substring(1)}</a>
                        <br />
                        <p>
                        <h3>{`${item.description}`}</h3>
                        <br /> 
                        Provider: {`${item.provider}`}
                        <br />
                        Likes: {`${item.likes}`}
                        <br /> 
                        Quantity: {`${item.quantity}`}
                        <br />
                        In Stock : {(item.inStock === true)? `Yes` : `No`}
                    </p>
                    </div>
                    <a href={`/itemType/${item.id}/edit`}>Edit</a>
                    </div>
                    <br />
                            <form action={`/itemType/${item.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form>
                        <br />
                    </li>
                </main>
                )
            })}    
            </ul>
            </div>
            <nav>
                
            <a>Add an item here!<form action={`/itemType/new?_method=NEW`} method="GET">
                            <input type="submit" value="NEW"/>
                        </form></a>
                
            </nav>
            <footer> Ardent Corp. Ltd </footer>
        </DefaultLayout> 
        )
    }
}

module.exports = Index;