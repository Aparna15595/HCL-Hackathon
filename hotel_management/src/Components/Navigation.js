import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends React.Component {
render() {
return (
    <div class="nav">
        <Router>
<Link to="/">Home</Link>
<Link to="/login">Login</Link>
</Router>
    </div>
);
}
}

export default Navigation;