import {useState} from 'react'

export default function LogInForm ({onAdd}){

    const [form, setForm] = useState({
        email:"",
        password:""
    })

    function handleChange(e){
        const {name, value}= e.target
        setForm({...form, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()

        onAdd(form)
    }

    return(
        <>
        <form className="masuk" onSubmit={handleSubmit} > 
            <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
            />

            <input 
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />

            <button type="submit">
                Masuk
            </button>
        </form>
        </>
    )


}
