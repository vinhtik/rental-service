import { Review } from "../review/review";

function ReviewList() {
    return(
        <ul className="reviews__list">
            <Review />
        </ul>
    )
}

export { ReviewList }