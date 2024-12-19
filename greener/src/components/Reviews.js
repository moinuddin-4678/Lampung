import photo2 from '../img/sarah.jpg';

function Reviews({ReviewCards}) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={photo2} alt="" />
                <h3>{ReviewCards.name}</h3>
                <div class="bttm"></div>
            </div>
            <div class="info">
                <p>{ReviewCards.par}</p>
            </div>
        </div>
    )
}

export default Reviews;