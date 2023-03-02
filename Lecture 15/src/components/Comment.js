import React from 'react'

const CommentData = [
    {
        name : "Ankush 1",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
        replies : [
            {
                name : "Ankush 11",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
                replies : []
            },
            {
                name : "Ankush 12",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
                replies : [
                    {
                        name : "Ankush 121",
                        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
                        replies : [
                            {
                                name : "Ankush 1211",
                                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
                                replies : [
                                    {
                                        name : "Parth Ladani",
                                        text : "Hello Ankush",
                                        replies : [
                                            {
                                                name : "Neeta Ladani",
                                                text : "Hello Parth",
                                                replies : [
                                                    {
                                                        name : "Jagdish Ladani",
                                                        text : "Hello Nita",
                                                        replies : []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name : "Ankush 2",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
        replies : []
    },
    {
        name : "Ankush 3",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, est.",
        replies : []
    }
]

const CommentList = ({comments}) => {
    return comments.map((comm,index) => (
        <>
            <Comment key={index} data={comm} />
            <div className="pl-5 border-2 border-l-black">
                <CommentList comments={comm.replies} />
            </div>
        </>
    ))
}

const Comment = ({data}) => {
    const {name , text , replies} = data;
    return (
        <div className='mt-5 flex bg-slate-400 p-2'>
            <img className='w-12 mr-6' src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
            <div>
                <p> {name} </p>
                <p> {text} </p>
            </div>
        </div>
    )
}

const CommentContainer = () => {
  return (
    <div className='mt-10'>
        <h1>Comments :- </h1> 
        <CommentList comments={CommentData} />
    </div>
  )
}

export default CommentContainer