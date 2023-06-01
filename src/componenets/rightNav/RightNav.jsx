import "./rightNav.scss"

const RightNav = () => {
  return (
    <div className="rightNav">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <span>First_Friend</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <span>First_Friend</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <p>
              <span>First_Friend</span> Changed their profile picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <p>
              <span>First_Friend</span> Changed their profile picture
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <p>
              <span>First_Friend</span> Liked a post
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <p>
              <span>First_Friend</span> Liked a comment
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <div className="online" />
              <span>First_Friend</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <div className="online" />
              <span>First_Friend</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <div className="online" />
              <span>First_Friend</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg" alt="" />
              <div className="online" />
              <span>First_Friend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightNav