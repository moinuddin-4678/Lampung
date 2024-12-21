
function Reviews({ReviewCards}) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={ReviewCards.img} alt="" />
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