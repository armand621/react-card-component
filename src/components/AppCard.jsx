import Card from "./card";
import txt from "./txt";

export default function AppCard(){

    const cards = txt.map(item => {
        return(
            <Card {...item}/>
        )
    })

    return(
        <>
            {cards}
        
        </>
    )
}