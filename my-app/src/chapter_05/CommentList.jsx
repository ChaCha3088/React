import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={'차명훈'} comment={'제가 만든 첫 컴포넌트입니다.'} />
            <Comment name={'손보'} comment={'손보가 만든 컴포넌트입니다.'} />
        </div>
    );
}

export default CommentList;