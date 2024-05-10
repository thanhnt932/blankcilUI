import React from "react";
import './List_podcast.css';
import Single_podcast from './Single_podcast';

const List_podcast = ({ podcasts }) => {
  return (
    <div className="podcast-list">
      {podcasts.map((podcast, index) => (
        <Single_podcast
          key={index}
          podcast={podcast}
        />
      ))}
    </div>
  );
};

export default List_podcast;