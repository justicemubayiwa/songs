import { combineReducers } from "redux"

const songsReducer =  () => {
    return [
        {title: 'Amg', duration: '2:48'},
        {title: 'Easy Bake', duration: '4:52'},
        {title: 'Hurricane', duration: '4:03'},
        {title: '1942 Flows', duration: '4:43'}
    ]
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer 
})