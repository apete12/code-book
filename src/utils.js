import article from './images/article.png';
import video from './images/video.png';

const checkIcon = (type) => {
  if (type === 'Article') {
    return <img className='resource-icon' src={article} alt="Article Icon" />
  } else if (type === 'Video'){
    return <img className='resource-icon' src={video} alt="Video Icon" />
  }
}

// const checkLinkImage = (petType) => {
//   if (petType === 'Dog') {
//     return <img className='detail-link-icon' src={bone} alt="Dog Detail Link" />
//   } else if (petType === 'Cat'){
//     return <img className='detail-link-icon' src={fish} alt="Cat Detail Link" />
//   }
// }

export { checkIcon }