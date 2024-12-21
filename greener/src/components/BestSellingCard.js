
function BestSellingCard({Cards}) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={Cards.img} alt="" />
            </div>
            <div class="info">
                <h3>{Cards.name}</h3>
                <p>{Cards.par}</p>
                <span class="price">{Cards.Price}</span>
                <a href="" class="button">{Cards.btn}</a>
            </div>
        </div>
    )
}

export default BestSellingCard;