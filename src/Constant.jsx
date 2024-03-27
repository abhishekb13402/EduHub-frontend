// Constants.jsx
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTcxMTYwMjg3MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo3MjQ0In0.BWI4rWjY4U7YJ6DoGBdywcvNiCvFmjE7si53qJbwA2A';
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