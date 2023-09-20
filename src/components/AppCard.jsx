import Card from "./card";
import txt from "./txt";
import './card.css'

export default function AppCard(){

    const cards = txt.map(item => {
        return(
            <Card {...item}/>
        )
    })

    return(
        <div className="main-container">
            {cards}

        </div>
            
        
        
    )
}