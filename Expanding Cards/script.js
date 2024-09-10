const allContainers = document.querySelectorAll(".image-container");

allContainers.forEach(container => {
    container.addEventListener("click", () => {
        allContainers.forEach(otherContainer => {
            if (otherContainer !== container) {
                otherContainer.classList.remove("active");  // It removes the otherImages except the clicked image, which leads the clicked image to active it
            }
        });

        // This adds or removes the active class to/from the currently clicked container (container).
        // The .toggle() method works like this:
        // If the element already has the active class, it removes it.
        // If the element does not have the active class, it adds it.
        // As a result, when you click on an image, it expands, and if you click on the same image again, it collapses back to its original size.
        container.classList.toggle("active");
    });
});
