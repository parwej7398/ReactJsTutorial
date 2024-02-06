import React, { useEffect, useState } from 'react'

const FormHandling = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [users, setUsers] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault()
        setUsers([...users, { name: name, email: email, password: password, confirm: confirm }])
        setName('')
        setEmail('')

        setPassword('')
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         handleSubmit()
    //     }, 3000000);
    // }, [])
    console.log({ users });

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder='Enter Name' value={name} onChange={(event) => setName(event.target.value)} />

            <input type="email" placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)} />


            <input type="password" placeholder='Enter Password' value={password} onChange={(event) => setPassword(event.target.value)} />

            <span>  I Agree   <input type="checkbox" onChange={(event) => setConfirm(event.target.checked)} /></span>


            <button disabled={!confirm} type='submit'>Submit</button>
            {/* <button type='button'>Submit</button>
            <button type='reset'>Reset</button> */}
        </form>
    )
}

export default FormHandling