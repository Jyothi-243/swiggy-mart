import ItemList from './ItemList';

const RestarauntCategory = (props) => {
    const { data } = props;
    console.log("propssss");
    return (
        <div className="accordian-container">
            {/* header section */}
            <div className='accordian-title'>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬆️</span>
            </div>
            {/* Accordian body section */}
            <ItemList itemCards={data.itemCards} />
        </div>
    )
}

export default RestarauntCategory;