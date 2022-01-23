import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import stl from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

  const onChangeRange = (value: number) => {
    setValue1(value)
    if (value1 > value2) setValue2(value)
  }
  const onChangeDoubleRanger = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

    return (
        <div>
          <h3>Homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div className={stl.container}>
                <span>{value1}</span>
                <SuperRange
                  value={value1}
                  onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={stl.container}>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                  value={[value1, value2]}
                  onChangeRange={onChangeDoubleRanger}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
