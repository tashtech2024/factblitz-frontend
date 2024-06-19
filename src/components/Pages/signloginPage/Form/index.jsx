import { useState } from "react";


function Form ({factsearch}) {
    const [formData, setFormData] = useState({
        searchFact: "", 
    }); 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        factsearch(formData.searchFact)
        onchange=(handleChange)
    };
    return(
    <div>
        <Form onSubmit={handleSubmit}>
            <input></input>
        </Form>
    </div>
    );
}
    
export default Form; 




