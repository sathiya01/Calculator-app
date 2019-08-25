import {createStore} from 'redux';

const initialState={
    input:'',
    finalres:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CALC':
            return Object.assign({},state,{input:state.input.concat(action.payload)})
        case 'FINAL_RES':
         try{
             console.log("inside try")
            const a=eval(state.input)
           return Object.assign({},state,{
                        finalres:a })
         }catch(e){
            
            return Object.assign({},state,{
                finalres:'Enter valid input' })

         }      
        case 'DEL':
            
              return Object.assign({},state,{input:state.input.slice(0,-1)})
        case 'CLEAR':
                return Object.assign({},state,{input:'',finalres:''})
        default:
                return state
    }
    
}
const store=createStore(reducer)
export default store
