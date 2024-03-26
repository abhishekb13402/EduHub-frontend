// Constants.jsx
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFiaGlAZ21haWwuY29tIiwiZXhwIjoxNzExNTE4NTQ0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcyNDQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcyNDQifQ.qQnfR4P6L4SFvy6joksUsFomS6Ec1CuAI_rJKn2-k4I';
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