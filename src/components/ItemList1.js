import { useDispatch } from "react-redux";
import { addItem } from "../reduxStore/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>   {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
    //Dispatch An Action (Redux)
    dispatch(addItem(item)); 
}
    return (
        <div>
                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <div className="font-bold text-lg">{item.card.info.name}</div>
                                <div className="p-2 font-bold">
                                    ₹{item.card.info.price
                                    ? item.card.info.price /100
                                    : item.card.info.defaultPrice/100}
                                </div>
                            </div>
                            <p className=" pl-4">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 mb-12" >
                            <div className="absolute">
                                <button className="bg-white hover:bg-gray-200 border shadow-lg text-[#1ba672] rounded-md mx-9 mt-28 w-32 h-10 font-bold text-lg"
                                onClick={() => handleAddItem(item)}> 
                                ADD 
                                </button>
                                <br/>
                                <div className="mx-14 text-sm text-gray-500"> Costomisable </div>
                            </div>
                            <div className=" overflow-hidden rounded-xl w-48 h-32">
                                <img src={CDN_URL + item.card.info.imageId} className="object-cover"/>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ItemList;