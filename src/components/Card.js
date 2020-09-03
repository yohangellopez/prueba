import React from 'react'
import './styles/card.css'
import dulces from '../img/dulce.png'
import bebidas from '../img/bebidas.png'
import higiene from '../img/higiene.png'
import charcuteria from '../img/carniceria.png'
import alimentos from '../img/alimentos.png'
import licores from '../img/licor.png'


class Card extends React.Component{
    render(){ 
            return    <div>
                    <div className='container col-md-7'>
                        <div className='card-group row row-12'>
                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img id='imagenm' className="card-img-top img-fluid" src={licores} ></img>
                                        <h5 class="card-title">Licores</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>
                        

                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img id='imagenm' className="card-img-top img-fluid" src={alimentos} ></img>
                                        <h5 class="card-title">Alimentos</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img className="card-img-top img-fluid" src={charcuteria} ></img>
                                        <h5 class="card-title">Charcuteria</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img className="card-img-top img-fluid" src={bebidas} ></img>
                                        <h5 class="card-title">Bebidas</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>
                        

                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img className="card-img-top img-fluid" src={dulces} ></img>
                                        <h5 class="card-title">Dulces</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <img className="card-img-top img-fluid" src={higiene} ></img>
                                        <h5 class="card-title">Higiene</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <input className='btn btn-success' type='submit' value='Ver mas'></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
                    
}
export default Card 