import ItemList from "./ItemList1";

const RestaurantCategories = ({data, showItem, setShowindex, setShowItem}) => {

    const expandAccodian = () => {
        setShowindex();
        setShowItem();
    }
    return(
        <div>
            <div className="w-7/12 mx-auto my-4 bg-white shadow-lg p-4">
            {/* Accodian Header */}
                <div className="flex justify-between cursor-pointer" 
                onClick={expandAccodian}>
                    <span className="font-bold"> {data.title} ({data.itemCards.length}) </span>
                    <span>⬇️</span> 
                </div>
            {/* Accodian Body */}
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategories;