import { createContext,useState } from "react";

const InputContext = createContext();

const InputProvider = ({children}) =>{
    const [dataList,setDataList] = useState([]);
    const updateDatalist = (newData) =>{
        setDataList((currentData)=>[...currentData,newData])
    }

    const passValue ={
        updateDatalist,
        dataList
    }

    return(
        <InputContext.Provider value = {passValue}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext;
export {InputProvider};