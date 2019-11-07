import React, { Component } from 'react'
import { HashRouter , BrowserRouter , Route , Switch , Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buku from './components/buku/buku';
import Kategori from './components/kategori/kategori';
import Penulis from './components/penulis/penulis';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
class Routes extends Component{
    render() {
        return (
            <BrowserRouter>
                <HashRouter>
                <React.Suspense fallback={loading()}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">CRUD</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/buku'} className="nav-link">Buku</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/kategori'} className="nav-link">Kategori</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/penulis'} className="nav-link">Penulis</Link>
                            </li>
                        </ul>
                        </div>
                    </nav> <br/>
                    <h2>CRUD Buku, Penulis , Kategori</h2> <br/>
                    <Switch>
                        <Route path='/buku' component={ Buku } />
                        <Route path='/kategori' component={ Kategori } />
                        <Route path='/penulis' component={ Penulis } />
                    </Switch>
                </div>
                </React.Suspense>
                </HashRouter>
            </BrowserRouter>
        )
    }
}
export default Routes