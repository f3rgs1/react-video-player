import React from "react";

//import components to app component (view)
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//import APIs
import youtube from '../apis/youtube';

class App extends React.Component {
    //initialise state for the videos to be returned from the GET request to the Youtube Search API
    state = { videos: [], selectedVideo: null };
    //all API calls are asynchronous, which means we either need to use promises or the async/await syntax
    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', { //save request to a const for later access
            params: {
                q: term
            }
        });
        //update state with the videos returned from the api
       this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0] //set the default video to be the first item in the response data array to prevent video sticking behaviour
    });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    //render the components to the screen
    render() {
        return <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>;
    }
}

export default App;