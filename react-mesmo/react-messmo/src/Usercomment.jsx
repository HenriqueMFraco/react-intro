function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props){
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

function createCommentData() {
    return {
        author: {
            name: "João Silvano",
            avatarUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        },
        text: "comentário",
        date: new Date() 
    };
}


function App() {
    const commentData = createCommentData();

    return (
        <div>
            <Comment
                author={commentData.author}
                text={commentData.text}
                date={commentData.date}
            />
        </div>
    );
}
