import React from 'react';
import axios from 'axios';
import { convertAlbum, convertAlbums, skip } from '../utils';
// import AppContainer from '../containers/AppContainer';
import { Link } from 'react-router';

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
  const artistId = this.props.routeParams.artistId;
  const selectArtistAlbums = this.props.selectArtistAlbums;

  selectArtistAlbums(artistId);
}

  render() {
    const artistAlbums = this.props.artistAlbums;
    // const currentSong = this.props.currentSong;
    // const isPlaying = this.props.isPlaying;
    // const toggleOne = this.props.toggleOne;

    return (
      <div className="artist">
        <h3>ARTIST NAME</h3>
        <h4>Albums</h4>
        <div className="row">
        {
          artistAlbums.map(album => (
            <div className="col-xs-4" key={ album.id }>
                <Link className="thumbnail" to={'/albums/' + album.id}>
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </Link>
            </div>
          ))
        }
        </div>
        <h4>SONGS</h4>
      </div>
    );
  }
}


