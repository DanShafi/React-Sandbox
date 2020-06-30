import React from "react"

function TheDate() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon" 
    } else {
        timeOfDay = "Evening"
    }

    const styles = {
        color: "red",
        fontFamily: "Open Sans, sans-serif",
        backgroundColor: "blue",
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default TheDate
