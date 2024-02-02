import profilePic  from './assets/profile.png'

function  Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Sujan Rijal</h2>
            <p className='card-text'>I am Software Engineer, I love Cooding</p>
        </div>
    );
}

export default Card;