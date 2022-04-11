/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import List from './List';
import Scroll from './scroll';

class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        console.log(this.props)
        return (
            <section id="home">
                <div className="content">
                   
                    <Scroll>
                    { this.props && <List element={this.props}/>}
                    </Scroll>
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;