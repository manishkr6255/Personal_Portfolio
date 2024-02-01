function scrollToElement(elementSelector, instance = 0){
    //select all the elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //check if there are elements matching the selector and if the request
    if (elements.length > instance){
        //scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("Link1");
const link2 = document.getElementById("Link2");
const link3 = document.getElementById("Link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    //scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});

