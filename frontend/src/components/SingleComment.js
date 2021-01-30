
const SingleComment = (props) =>{
    const {userName,userPic,comment} = props.single_comment
   
    return(

            <div  className='single_comment'>
                <div className='user_comment'>
                    <img src={userPic} alt='user_pic'/>
                    <p>{`${userName} said:`}</p>
                </div>
                <p>{comment}</p>
            </div>
        
         
    )

}

export default SingleComment