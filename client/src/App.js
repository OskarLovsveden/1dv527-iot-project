import { useEffect, useState } from 'react'
import axios from 'axios'
import SensorValue from './components/SensorValue'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchValues = async () => {
      const res = await axios(process.env.REACT_APP_THING_URL + '/properties')
      console.log(res.data)
      setData(res.data)
    }

    fetchValues()

    const interval = setInterval(async () => {
      fetchValues()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flexCenterColumn">
      <div className="flexCenterRow">
        {data.map(p => {
          const props = {
            name: p.id,
            value: p.value.value,
            unit: p.value.unitSymbol,
            timestamp: p.value.timestamp
          }

          return <SensorValue key={p.id} {...props} />
        })}
      </div>
      <div className="flexCenterColumn">
        <a href={process.env.REACT_APP_THING_URL} className="largeP link">Thing API</a>
      </div>
    </div >
  )
}

export default App
