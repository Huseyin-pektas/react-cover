import React from 'react'

const User = (props) => {
console.log(props)
    const TechList = () => {
        const techs = ['HTML', 'CSS', 'JavaScript']
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }


    return (
        <div>
            <h3>{props.firstName}</h3>
            <h3>{props.surName}</h3>
            <h3>{props.Country}</h3>
            <button onClick={props.Azalt}>Yeni azalt</button>
            <TechList />
        </div>
    )
}

export default User
