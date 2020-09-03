import React from 'react';
import Cabecera from './components/cab_lateral'
import CabeceraS from './components/cabecera'
import Card from './components/Card'
import Pie from './components/pie'


function App(){
    return(<div className="App">
        <section className="componentes">
            <Cabecera />
            <CabeceraS />
            <Card />
            <Pie />
        </section>
    </div>)
}

export default App
