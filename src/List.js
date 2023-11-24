import { useContext } from "react";
import InputContext from "./input-context";
const List = () => {
    const {dataList} = useContext(InputContext);
    const renderList = dataList.map((item, index) => {
        return (
            <div key={index}>
                {item}
            </div>
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )
}

export default List;