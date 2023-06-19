const profiles = [
    {
        id: 1,
        name: "Nandini",
        image: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
        bannerImage: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
        isfriend: false,
        posts: [{
            id: 1,
            authorImage: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
            authorName: "Jerry",
            likes: 1104,
            isLiked: false,
            media: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Beautiful-Nature-Desktop-Wallpapers-Free-Download.jpg",
            description: "asf aslf alsfka efkaslf erklflaef kasnflnasmlfmlas lerlamef klmnelmasfeelaw lamelm ajjemfoqmwef lmmefpqwm mfmlqwemf pqewjfmq pjmlm",
            comments: [
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
                    authorName: "Nandini",
                    authorId: 1,
                    comment: "Beautiful"
                },
                {
                    authorImage: "https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg",
                    authorName: "Sarika",
                    authorId: 2,
                    comment: "Gourgeous"
                },
                {
                    authorImage: "https://images.srkh.in/wp-content/uploads/2020/08/Boy-Alone-Dp.jpg",
                    authorName: "Raj",
                    authorId: 3,
                    comment: "Nature"
                }
            ]
        }]
    },
    {
        id: 2,
        name: "Sarika",
        image: "https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg",
        bannerImage: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
        isfriend: false,
        posts: [{
            id: 1,
            authorImage: "https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg",
            authorName: "Sarika",
            likes: 324,
            isLiked: false,
            media: "https://www.wallpapers13.com/wp-content/uploads/2019/04/Thailand-Waterfalls-The-Beauty-Of-Nature-Landscape-HD-Wallpapers-Tablets-And-Mobile-Phones-Free-Download-For-Desktop-840x525.jpg",
            description: "asf aslf alsfka efkaslf erklflaef kasnflnasmlfmlas lerlamef klmnelmasfeelaw lamelm ajjemfoqmwef lmmefpqwm mfmlqwemf pqewjfmq pjmlm",
            comments: [
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
                    authorName: "Nandini",
                    authorId: 1,
                    comment: "Beautiful"
                },
                {
                    authorImage: "https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg",
                    authorName: "Sarika",
                    authorId: 2,
                    comment: "Gourgeous"
                },
                {
                    authorImage: "https://images.srkh.in/wp-content/uploads/2020/08/Boy-Alone-Dp.jpg",
                    authorName: "Raj",
                    authorId: 3,
                    comment: "Nature"
                }
            ]
        }]
    },
    {
        id: 3,
        name: "Raj",
        image: "https://images.srkh.in/wp-content/uploads/2020/08/Boy-Alone-Dp.jpg",
        bannerImage: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
        isfriend: false,
        posts: [{
            id: 1,
            authorImage: "https://images.srkh.in/wp-content/uploads/2020/08/Boy-Alone-Dp.jpg",
            authorName: "Raj",
            likes: 15,
            isLiked: false,
            media: "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
            description: "asf aslf alsfka efkaslf erklflaef kasnflnasmlfmlas lerlamef klmnelmasfeelaw lamelm ajjemfoqmwef lmmefpqwm mfmlqwemf pqewjfmq pjmlm",
            comments: [
                {
                    authorImage: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg",
                    authorName: "Nandini",
                    authorId: 1,
                    comment: "Beautiful"
                },
                {
                    authorImage: "https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg",
                    authorName: "Sarika",
                    authorId: 2,
                    comment: "Gourgeous"
                },
                {
                    authorImage: "https://images.srkh.in/wp-content/uploads/2020/08/Boy-Alone-Dp.jpg",
                    authorName: "Raj",
                    authorId: 3,
                    comment: "Nature"
                }
            ]
        }]
    }
]

exports.getProfileById = (id)=>{
    const profile = profiles.find(item=>item.id==id);
    return profile;
}

exports.getAllProfiles = ()=>{
    return profiles;
}