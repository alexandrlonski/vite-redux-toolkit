import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../src/app/hooks'
import { incremented, amounAdded } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState<number>(0)
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const { data } = useFetchBreedsQuery(value);

  function handleClick() {
    dispatch(amounAdded(value));
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <select onChange={e => setValue(Number(e.target.value))}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <p>Number of dogs fetched: {data?.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((breed)=> (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height='250px'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
