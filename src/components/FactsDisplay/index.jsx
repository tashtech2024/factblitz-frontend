import { useState } from "react";

function FactDisplay({ fact, getFact, FactsData }) {
    console.log(fact);

    const updateFact = (factId, newFactContent) => {
        getFact(
            facts.map((f) => {
                if (f.id === factId) {
                    return {
                        ...f,
                        content: newFactContent,
                    };
                } else {
                    return f;
                }
            })
        )
    }
    return (
        <div>
            <h1>{fact}</h1>
            {/* fact 
            fact={item}
            key={item_id ? item_id : item.id} */}

{/* BUTTON */}
        <button onClick={getFact}>
  <span>Fact Me Please!</span>
</button>
    
        </div>
    )
}

export default FactDisplay;