
const SingleComment = (props) =>{
    const {name,userPic,comment} = props.single_comment
   
    return(
            <div className='single_comment'>
                <div className='user_comment'>
                    <img src={userPic} alt='user_pic'/>
                    <p>{`${name} said:`}</p>
                </div>
                <p>{comment}</p>
            </div>
        
         
    )

}

export default SingleComment