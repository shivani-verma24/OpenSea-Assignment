const Cars = (props) => {
    return <div className = "col-md-4">
        <div className="car">
        <img src={props.imageUrl} className="car-img-top" alt="..."/>
        <div className="car-body">
            <p className="car-text">{props.carName}</p>
            <p className="car-text">{props.price}</p>
        </div>
    </div>
    </div>
}

export default Cars;