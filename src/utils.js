import article from './images/article.png';
import video from './images/video.png';

const checkIcon = (type) => {
  if (type === 'Article') {
    return <img className='resource-icon' src={article} alt="Article Icon" />
  } else if (type === 'Video'){
    return <img className='resource-icon' src={video} alt="Video Icon" />
  }
}

export { checkIcon }