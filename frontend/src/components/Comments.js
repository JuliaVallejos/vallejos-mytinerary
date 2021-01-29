
const Comment = (props) =>{
    const {comments} = props
   
    return(
        
        <div className='comments'>
            {comments.map(({userName,userPic,comment},index) => {
                return(
                    <div key={index} className='single_comment'>
                        <div className='user_comment'>
                            <img src={userPic} alt='user_pic'/>
                            
                            <p>{`${userName} said:`}</p>
                        </div>
                   
                    <p>{comment}</p>
                    </div>
                )
            })}
        </div>
       
    )

}

export default Comment