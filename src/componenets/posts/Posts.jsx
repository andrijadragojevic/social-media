import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

  //  TEMPORARY DATA
  const posts = [
    {
      id: 1,
      userId: 3,
      name: "Jane Doe",
      profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem rem est culpa, quam, dolorem, a animi neque harum perferendis architecto tempore nostrum minus maiores.",
    },
    {
      id: 1,
      name: "Foo Bar",
      userId: 4,
      profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg",
      img: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem rem est culpa, quam, dolorem, a animi neque harum perferendis architecto tempore nostrum minus maiores."
    },
    {
      id: 1,
      name: "Jane Doe",
      userId: 3,
      profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem rem est culpa, quam, dolorem, a animi neque harum perferendis architecto tempore nostrum minus maiores.",
      img: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
    },
    {
      id: 1,
      name: "Jane Doe",
      userId: 3,
      profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem rem est culpa, quam, dolorem, a animi neque harum perferendis architecto tempore nostrum minus maiores.",
    }
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}

    </div>
  )
}

export default Posts