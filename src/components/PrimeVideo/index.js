// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="prime-video-main-container">
      <div className="app-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-img"
        />
      </div>
      <div className="videos-container">
        <div className="genre-container">
          <h1 className="genre-heading">Action Movies</h1>
          <MoviesSlider
            movies={moviesList.filter(movie => movie.categoryId === 'ACTION')}
          />
        </div>
        <div className="genre-container">
          <h1 className="genre-heading">Comedy Movies</h1>
          <MoviesSlider
            movies={moviesList.filter(movie => movie.categoryId === 'COMEDY')}
          />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
