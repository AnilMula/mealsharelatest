import React, { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`/api/reviews`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>{review.title}</div>
      ))}
    </div>
  );
}

export default Reviews;
