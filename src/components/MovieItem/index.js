// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        // <button type="button" className="thumbnail-container">
        //   <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        // </button>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      }
      className="popup-content"
    >
      {close => (
        <div className="my-popup-container">
          <button
            type="button"
            className="trigger-button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <ReactPlayer url={videoUrl} controls width="100%" />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
