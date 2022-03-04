function viewMore(){
    var refToViewMore = document.getElementById("HiddenCityCards");
    var refToButton = document.getElementById("ButtonId");
    if(refToButton.innerText === 'View More'){
            refToViewMore.style.display = "flex";
            refToButton.innerText = "View Less";
    }
    else if(refToButton.innerText === 'View Less'){
            refToViewMore.style.display = "none";
            refToButton.innerText = "View More";
    }
}