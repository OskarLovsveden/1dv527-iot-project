const SensorValue = (props) => {
    return (
        <div className="sensor flexCenterColumn">
            <p className="largeP">{props.value}{props.unit}</p>
            <p className="smallP">{props.name}</p>
        </div>
    )
}

export default SensorValue
