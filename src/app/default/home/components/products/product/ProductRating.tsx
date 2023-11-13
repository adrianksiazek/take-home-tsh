import FilledStarIcon from 'assets/images/star.svg?react';
import StarIcon from 'assets/images/star_border.svg?react';

export const ProductRating = ({ rating }: { rating: number }) => {
  const maxRating = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? (
            <FilledStarIcon className="h-4 w-4 fill-tertiary" />
          ) : (
            <StarIcon className="h-4 w-4 fill-gray" />
          )}
        </span>,
      );
    }
    return stars;
  };

  return <div className="flex gap-2">{renderStars()}</div>;
};
