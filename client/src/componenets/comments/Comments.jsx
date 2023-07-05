import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext";

const Comments = () => {

    //  TEMPORARY COMMENTS
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempora.",
            userId: 1,
            name: "Jane Doe",
            profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempora.",
            userId: 2,
            name: "Jane Doe",
            profilePicture: "https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg"
        }
    ]

    const {currentUser} = useContext(AuthContext)

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder="Leave a comment..." />
                <button> Comment </button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }</div>
    )
}

export default Comments;