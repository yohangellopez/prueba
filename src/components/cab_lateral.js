import React from 'react'
import './styles/card.css'
import logo from '../img/bodegon.png'



class Cabecera extends React.Component{
    render(){
        return <div>
                    <div class="wrapper">
                                <nav id="sidebar">
                                    <div class="sidebar-header">
                                        <img src={logo} className='img-fluid' id='imagen'></img>
                                        <h4>Bodegon Guayana </h4>
                                    </div>
                                   <ul class="list-unstyled components">
                                    <p>Opciones</p>
                                    <li class="active"> <a href="#menu">Tienda</a> </li>
                                    <li>  <a href="#menu">Carrito de Compras</a>   </li>
                                    <li>  <a href="#menu">Mas Vendidos</a>         </li>
                                    <li>  <a href="#">Ofertas</a>                  </li>
                                    <li>  <a href="#">Servicio al cliente</a>      </li>
                                  </ul>
                                </nav>
                    </div>
                </div>
                }
    }
export default Cabecera 