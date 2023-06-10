import "./home.scss"
import Stories from "../../componenets/stories/Stories"
import Posts from "../../componenets/posts/Posts"

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}

export default Home