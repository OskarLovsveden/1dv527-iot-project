import { useEffect, useState } from 'react'
import axios from 'axios'
import SensorValue from './components/SensorValue'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchValues = async () => {
      const res = await axios('http://localhost:8000/things/lil-opy-iv/properties')
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
        {data.map(p => (
          <SensorValue key={p.id} name={p.id} value={p.value.value} unit={p.value.unitSymbol} />
        ))}
      </div>
      <div className="flexCenterColumn">
      </div>
    </div >
  )
}

export default App
