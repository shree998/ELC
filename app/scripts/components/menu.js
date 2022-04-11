/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React, {Fragment} from 'react';
import Home from './home';
class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            showingSearch: false,
            searchValue: "",
            productList: [],
            products: null,
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        });
        if(this.state.showingSearch === true) {
            e.target.value = "";
            this.setState({
                productList: [],
                searchValue: ""
            })
        }
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        
        // Start Here
        // ...
        this.setState({
            searchValue: e.target.value
        })
        fetch('http://localhost:3035/product', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				searchTerm:this.state.searchValue,
			})
		})
		.then(response => response.json())
        .then(response => this.setState({
            productList: response
        }))
        if(this.state.productList.length>=1)
        {
           
            this.setState({products: "valid"})
        }

    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <Fragment>
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" value={this.state.searchValue} onChange={(e) => this.onSearch(e)} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
             <div>
               <Home props={this.state.productList}/>
             </div>
             </Fragment>
        );
    }


}

// Export out the React Component
module.exports = Menu;