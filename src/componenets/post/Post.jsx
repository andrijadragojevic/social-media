import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlined from '@mui/icons-material/TextsmsOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import './post.scss';



const Post = ({post}) => {
  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="user-info">
                    <img src={post.profilePicture} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                            <span>{post.name}</span>
                        </Link>
                        <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MoreHoriz />
            </div>
            <div className="content">
                <p> {post.description} </p>
                <img src={post.img} alt="" />
            </div>
            <div className="info"></div>
        </div>
    </div>
  )
}

export default Post