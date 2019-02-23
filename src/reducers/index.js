import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Hoppy Poppy', duration: '4:05' },
    { title: 'Apocalypse Now', duration: '3:35' },
    { title: 'Where is my fax', duration: '5:32' },
    { title: 'Fly away wombat', duration: '2:45' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});