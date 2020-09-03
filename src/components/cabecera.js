import React from 'react'
import './styles/card.css'

class CabeceraS extends React.Component{
    render(){
        return <div>
                    <nav id='cabecera' className='navbar'>
                        <div className='container container-fluid col-md-8'>
                            <form>
                                <div className='form-group form-inline'>
                                    <label>Buscar producto</label>
                                    <input type='text' className='form-control' placeholder='Nombre del producto'></input>
                                    <input className='btn btn-primary' type='submit' value='Buscar'></input>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
                }
    }
export default CabeceraS 