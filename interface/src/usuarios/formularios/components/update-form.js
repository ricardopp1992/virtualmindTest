import React from 'react'

function UpdateForm(props) {
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button>Ingresar</button>
        </form>
    )
}

export default UpdateForm