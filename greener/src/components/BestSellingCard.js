import monstrll from '../img/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.webp';

function BestSellingCard({Cards}) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={monstrll} alt="" />
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