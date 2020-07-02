import React from "react"

const YouTubeTiles = props => {
    return (
        <div className="YouTubeCards">
            <img src={props.tile.imgUrl}/>
            <h3>{props.tile.title}</h3>
            <p style={{color: !props.tile.title && "red"}}>{props.tile.description}</p>
        </div>
    )
}

export default YouTubeTiles

{/* <YouTubeTiles 
    tile={{
        imgUrl: "http://www.greenway.ie/images/200x100/newstop130.jpg", 
        title: "My First Bike Trip", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}} 
    />
<YouTubeTiles 
    tile={{
        imgUrl: "http://www.greenway.ie/images/200x100/newstop131.jpg", 
        title: "Basic Mapmaking Skills", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}} 
    />
<YouTubeTiles 
    tile={{
        imgUrl: "http://www.greenway.ie/images/200x100/newstop201.jpg", 
        title: "DJI Phantom: Aerial Footage", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}
    />
<YouTubeTiles 
    tile={{
        imgUrl: "http://www.greenway.ie/images/200x100/newstop207.jpg", 
        title: "The New Nikon 5100-C Series", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}
    /> */}