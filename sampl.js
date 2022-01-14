var showMore = document.getElementById('showmore');



showMore.addEventListener('click', show);


function show(event){
    event.preventDefault();

    const showDiv = document.createElement("div");
    showDiv.classList.add('showDivstyle')


    const newp = document.createElement('p');
    showDiv.appendChild(newp);
}
