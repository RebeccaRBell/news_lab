import React from 'react';

const Story = ({story}) => {
  return(
        <li><a href={story.url} target="_blank">{story.title}</a></li>
  )
}
export default Story;
