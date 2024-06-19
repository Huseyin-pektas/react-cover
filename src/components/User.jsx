import React from 'react'
import Button from './button.jsx'

const User = (props) => {
    
    console.log(props)
    const TechList = () => {
        const techs = ['HTML', 'CSS', 'JavaScript']
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
    const ShowDate = (time) => {
        const months = [
            "january", "fabruary", "march", "april",
            "may", "june", "july", "agust", "september",
            "octaber", "november", "december"
        ]
        const firstFiveMonthShow = months.slice(0, 5).join(" , ")
        return `${firstFiveMonthShow} `
    }

    return (
        <div>
            {/* <h3>{props.firstName}</h3>
            <h3>{props.surName}</h3>
            <h3>{props.Country}</h3>
            <button onClick={props.Azalt}>Yeni azalt</button>
            <br/> */}
            <Button ShowDate={ShowDate} /> <br />
            <ShowDate /> <br />
            {/* <TechList /> */}
        </div>
    )
}

export default User
