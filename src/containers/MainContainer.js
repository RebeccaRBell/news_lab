import React, { useState, useEffect } from 'react';
import Story from '../components/Story';
import StoryList from '../components/StoryList';

const MainContainer = () => {

        const [stories, setStories] = useState([]);
        const [searchedStories, setSearchedStories] = useState(null);

        useEffect(() => {
          fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
          .then(results => results.json())
          .then(data => {
                const storyPromises = data.slice(0,20).map((storyId) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
          .then(res => res.json())
          })
          Promise.all(storyPromises)
          .then((data) => {setStories(data)})
          })
});
      const searchResults = function(searchValue){
                const checkStories = stories.filter((story => story.title.includes(searchValue)))
                setSearchedStories(checkStories);
                console.log(checkStories);
      }
     
   
  return(
        <div>
        <ul>{searchedStories ? <StoryList  stories={searchedStories} searchResults={searchResults} /> : stories ?<StoryList  stories={stories} searchResults={searchResults} /> : null } </ul>
        </div>
  )
  }

export default MainContainer;