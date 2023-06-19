const profiles = [
    {
        id: 1,
        name: "Nandini",
        image: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
        bannerImage: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
        isfriend: false,
        posts: [{
            id: 1,
            authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
            authorName: "Jerry",
            likes: 34,
            isLiked: false,
            media: "https://media.istockphoto.com/id/898926286/photo/cute-girl.jpg?s=170667a&w=0&k=20&c=QIP2aOV6Z33HhV4D44AZ8cuwzgKt3FlM1BLiOO8dAuw=",
            description: "asf aslf alsfka efkaslf erklflaef kasnflnasmlfmlas lerlamef klmnelmasfeelaw lamelm ajjemfoqmwef lmmefpqwm mfmlqwemf pqewjfmq pjmlm",
            comments: [
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
                    authorName: "abcd",
                    comment: "sdf, alkfl alksf ads lsd"
                },
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
                    authorName: "abcd",
                    comment: "sdf, alkfl alksf ads lsd"
                },
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
                    authorName: "abcd",
                    comment: "sdf, alkfl alksf ads lsd"
                }
            ]
        }]
    },
    {
        id: 2,
        name: "Sarika",
        image: "abcd",
        isfriend: false
    },
    {
        id: 3,
        name: "abcd",
        image: "abcd",
        isfriend: false
    }
]

exports.getProfileById = (id)=>{
    const profile = profiles.find(item=>item.id==id);
    return profile;
}

exports.getAllProfiles = ()=>{
    return profiles;
}