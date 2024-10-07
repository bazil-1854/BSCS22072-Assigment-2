import React from 'react'
import LiveCoffeeMaking from './LiveCoffeeMaking'
import CoffeeServe from './CoffeeServe'
import KindofCoffee from './KindofCoffee'
import CoffeeStats from './CoffeeStats'
import Navbar from './Navbar'
import EcoFriendlySystem from './EcoFriendlySystem'
import Footer from './Footer'
import Main from './Main'

const Index = () => {
    return (
        <>
            <Navbar />
            <Main />
            <LiveCoffeeMaking />
            <CoffeeServe />
            <KindofCoffee />
            <CoffeeStats />
            <EcoFriendlySystem />
            <Footer />
        </>
    )
}

export default Index
