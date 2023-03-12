import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(99);
  const [isClicked, setIsClicked] = useState(false);

  // stateを増減させる関数
  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button
      // &&は、インラインifで、isClickedがtrueならlikedが付与される
      className={`rounded-md bg-slate-200 p-1 ${isClicked && 'liked'}`}
      onClick={handleClick}
    >
      <span className="">{`いいね | ${likes}`}</span>
    </button>
  );
};

export default LikeButton;
