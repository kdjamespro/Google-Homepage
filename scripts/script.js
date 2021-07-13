const elements1 = document.getElementsByClassName('clear-button')
const searchForm = document.getElementById('search-form')
const elements2 = document.getElementsByClassName('search-input')
const clearMark = elements1[0];
const searchInput = elements2[0];

searchForm.addEventListener('input', () =>{
    if(searchInput.value.length > 0){
        clearMark.style.display = "flex";
    }
    else{
        clearMark.style.display = "none";
    }
});

clearMark.onclick = function clear(){
    searchInput.value = '';
    clearMark.style.display = "none";
}

