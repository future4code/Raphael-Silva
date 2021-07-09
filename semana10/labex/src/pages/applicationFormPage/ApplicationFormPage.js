import React from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"

export const ApplicationFormPage = () => {
    const { form, onChange, cleanFields } = useForm({
        name:"",
        age:"",
        applicationText:"",
        profession:"",
        country:"",
        tripId:"",
    });
    
    const cadastrarUsuario = (event) => {
        
        cleanFields();
        
    };

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    };

    return (
        <div>
            <p>ApplicationFormPage</p>

            <form onSubmit={cadastrarUsuario}>

            <input name={"name"} value={form.name} onChange={onChange} placeholder="name" required pattern={"^.{3,}"} title={"O nome deve ter no mínimo 3 letras"} /> 
            <input name={"age"} value={form.age} onChange={onChange} placeholder="age" required type={"number"} min={18} />
            <input name={"applicationText"} value={form.applicationText} onChange={onChange} placeholder="applicationText" required pattern={"^.{30,}"} title={"O nome deve ter no mínimo 30 caracteres "} />
            <input name={"profession"} value={form.profession} onChange={onChange} placeholder="profession" required pattern={"^.{10,}"} title={"O nome deve ter no mínimo 10 caracteres"}/>
            <input name={"country"} value={form.country} onChange={onChange} placeholder="country" required />
            <input name={"tripId"} value={form.tripId} onChange={onChange} placeholder="tripId" required />

            <button>Enviar Formulário</button>

            </form>

            <button onClick={goBack}>Voltar</button>
        </div>
    )
}