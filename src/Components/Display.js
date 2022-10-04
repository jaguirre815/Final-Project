function Display({ place }){
    return(
        <div>
            <ul key={"locations"}>
            <li>{place.name}
                <p>{place.vicinity}</p>
                    <p>{place.rating}</p>
                </li>
            
            </ul>

        </div>
    )
}

export default Display
                

