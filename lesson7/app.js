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
