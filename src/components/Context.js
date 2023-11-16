import { useReducer, useContext, createContext} from 'react';
import { fuochi, menu, crowd } from '../Articles/Menu';

const Stato = createContext(null);
const Statodis = createContext(null);

export default function Task({children}) {

  function reducer(state, action){
    switch (action.type){
      case "increment": {
        return {
          age: state.age + 1,
          name: state.name
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

  const initialState = { age: 42, name: "testo", fires: fuochi(), meals: menu(), people: crowd()};
  const [instate, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <Stato.Provider value={instate}>
        <Statodis.Provider value={dispatch} >
          {children}
        </Statodis.Provider>
      </Stato.Provider>
    </div>
  );
}
    

export function useStato() {
  return useContext(Stato);
}
export function useStatodis() {
  return useContext(Statodis);
}