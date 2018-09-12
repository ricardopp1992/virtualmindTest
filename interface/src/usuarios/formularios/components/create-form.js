import React from 'react'

function CreateForm(props) {
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" value="Crear Usuario" />
        </form>
    )
}

export default CreateForm