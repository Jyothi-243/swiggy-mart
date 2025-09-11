import ItemList from './ItemList';

const RestarauntCategory = ({ data, showItems, setShowIndex }) => {
    //onClick of the div , we have to call the setShowindex() , to set the index.

    return (
        <div className="accordian-container" onClick={setShowIndex}>
            {/* header section */}
            <div className='accordian-title'>
                <span>{data.title} ({data.itemCards.length})</span>
                {showItems ? <span>⬆️</span> : <span>⬇️</span>}
            </div>
            {/* Accordian body section */}
            {showItems && <ItemList itemCards={data.itemCards} />}

        </div >
    )
}

export default RestarauntCategory;