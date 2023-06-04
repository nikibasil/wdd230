//
// const toLoad = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute('data-src');
//     if(!src) {
//         return;
//     } 

//     img.src = src;
//     console.log("finished with preloadImg function");
// }


// imgOptions = {
//     threshold: 0,
//     rootMargin: "200px 0px 100px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//             console.log("finished with imgObserver function");
//         }
//     })
// }, imgOptions);


// toLoad.forEach(image => {
//     imgObserver.observe(image);
//     console.log("finished with toLoad function");
// });

// get all images data-src or srcset attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters for intersection observer
const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

// check if intersector observor is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) =>
    {
        items.forEach((item) =>
        {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    // loop through each image -check status and load if necessary 
    imagesToLoad.forEach((img) =>
    {
        observer.observe(img);
    });
}
else
{
    imagesToLoad.forEach((img) =>
    {
        loadImages(img);
    });
}



 