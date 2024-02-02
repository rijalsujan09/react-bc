function ProfilePicture() {
  const imageUrl = "./src/assets/profile.png";

  const handleFunc = (e) => {
    e.target.style.display = "none";
    console.log("OUCH!");
  };

  return <img onClick={(e) => handleFunc(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
