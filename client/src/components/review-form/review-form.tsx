import React from 'react';
import { useState } from 'react';

type ReviewFormProps = {
  onSubmit: (comment: string, rating: number) => void;
  isSubmitting?: boolean;
};

function ReviewForm({ onSubmit, isSubmitting = false }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isValid = comment.length >= 50 && rating > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit(comment, rating);
    setComment('');
    setRating(0);
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value={5} id="5-stars" type="radio" checked={rating === 5} onChange={() => setRating(5)} disabled={isSubmitting} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={4} id="4-stars" type="radio" checked={rating === 4} onChange={() => setRating(4)} disabled={isSubmitting} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={3} id="3-stars" type="radio" checked={rating === 3} onChange={() => setRating(3)} disabled={isSubmitting} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={2} id="2-stars" type="radio" checked={rating === 2} onChange={() => setRating(2)} disabled={isSubmitting} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={1} id="1-star" type="radio" checked={rating === 1} onChange={() => setRating(1)} disabled={isSubmitting} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={isSubmitting}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };