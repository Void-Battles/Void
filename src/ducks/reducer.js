import axios from 'axios'

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'

let initialState = {
    login: true,
}

export function toggleLogin(){
    console.log('lololol')
    return {
        type: LOGIN,
        payload: !initialState.login
    }
}

export function toggleSignup(){
    return {
        type: SIGNUP,
        payload: initialState.login = true
    }
}

export function registerUser(userInfo){
    console.log(userInfo)
    axios.post(`http://localhost:4000/register_user`, userInfo ).then(res => {
        console.log(res  )
    })
    return {
        type: REGISTER_USER,
        action: userInfo

    }
   
}

function reducer(state = initialState , action){
    switch(action.type){
        case LOGIN:
         return Object.assign({}, state, {login: action.payload});
         case SIGNUP:
         return Object.assign({}, state, {login: action.payload});
         case REGISTER_USER:
         return 

    }
    return state;

}

export default reducer






// export function getAllPokemon(){
//     const request = axios.get('http://pokeapi.co/api/v2/pokemon/?limit=500')
//     console.log(request)
//     return {
//         type: ALL_POKEMON,
//         payload: request
//     }
// }





// function reducer(state = initialState , action){
//     switch(action.type){
//         case ALL_POKEMON + '_FULFILLED':
//             return Object.assign({}, state, {allPokemon: action.payload.data})
//         case SELECTED_POKEMON +'_FULFILLED':
//             return  Object.assign({}, state, {pokemonTeam: [action.payload.data, ...state.pokemonTeam]})

//     }
//     return state;

// }