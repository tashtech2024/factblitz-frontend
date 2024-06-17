import { useState } from "react";

function Form({factsearch}) {
    const [factData, setfactData] = useState({
        searchFact: "", 
    }); 
    const handleChange = (e) => {
        setfactData({
            ...factData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        factsearch(factData.searchFact)
        onchange=(handleChange)
    };
    return(
    <div>
        <Form onSubmit={handleSubmit}>
        </Form>
    </div>
    );
}
    
export default Form; 





