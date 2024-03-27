// Constants.jsx
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTcxMTYzNzQ3NywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0In0.t4GoUqDAymlsq9A_wqmjsRrgsEIdO3-PM8tNLhao3ns';

// Course images

export const imageUrls = [   
    "../../../public/Course_images/img1.jpg",
    "../../../public/Course_images/img2.jpg",
    "../../../public/Course_images/img3.jpg",
    "../../../public/Course_images/img4.jpg",
    "../../../public/Course_images/img5.jpg",
    "../../../public/Course_images/img6.jpg",
];

export const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
};