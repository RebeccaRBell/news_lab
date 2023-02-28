import React from 'react';
import Story from './Story';

const StoryList = ({stories, searchResults }) => {

        const ListOfStories = stories.map((story, index) => {
                return <Story story={story} key={index}/>
        })

        const Searched = (event) => {
        event.preventDefault();
          const searchValue = event.target.value;
          searchResults(searchValue);
        }


  return(
        <div>
        <form>
        <input type="text" onChange={Searched}/>
                <input type="submit"/>
        </form>
        <ul>
                {ListOfStories}
        </ul>
        </div>
  )
}

export default StoryList;