// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '~/routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div style={{ overflow: 'hidden' }} className="App">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
