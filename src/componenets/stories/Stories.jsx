import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id: 1,
            name: "Jon Doe",
            image: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
        {
            id: 1,
            name: "Jon Doe",
            image: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
        {
            id: 1,
            name: "Jon Doe",
            image: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
        {
            id: 1,
            name: "Jon Doe",
            image: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
        {
            id: 1,
            name: "Jon Doe",
            image: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
    ]

  return (

    <div className='stories'>
        <div className='story'>
                <img src={currentUser.profilePicture} alt="" />
                <span> Add Story </span>
                <button>+</button>
        </div>

        {stories.map(story => (
            <div className='story' key={story.id}>
                <img src={story.image} alt="" />
                <span> {story.name} </span>
            </div>
        ))}

    </div>
  )
}

export default Stories