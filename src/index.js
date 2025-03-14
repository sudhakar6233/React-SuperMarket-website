import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './page/Layout'
import Home from './page/Home'
import Deals from './page/Deals'
import Login from './page/Login'
import Register from './page/Register'

export default function App()
{
    return (
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="Login" element={<Login />} />
             <Route path="Register" element={<Register />} />
             <Route path="Deals" element={<Deals />} />

            </Route>
           </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)