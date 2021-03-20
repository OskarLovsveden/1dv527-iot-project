import moment from 'moment'

const SensorValue = (props) => {
    return (
        <div className="sensor flexCenterColumn">
            <p className="largeP">{props.value}{props.unit}</p>
            <p className="smallP">{props.name}</p>
            <p className="smallerP">{moment(props.timestamp).format("YYYY-MM-DD HH:mm")}</p>
        </div>
    )
}

export default SensorValue
