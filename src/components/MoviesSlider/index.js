// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(eachMovie => (
          <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
