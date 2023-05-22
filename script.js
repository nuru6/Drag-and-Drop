let container = document.querySelector('.container'),
    i = document.querySelector('i'),
    text = document.querySelector('#text'),
    btn = document.querySelector('#btn'),
    file = document.querySelector('#file'),
    myFile;
// Step 1;
btn.onclick = () => {
    file.click();
};
// Step 2;
file.addEventListener('change', () => {
    container.classList.add('active');
    myFile = file.files[0];
    showMe();
});
// Step 3;
container.addEventListener('dragover', (event) => {
    event.preventDefault();
    container.classList.add('active');
    text.textContent = "Release To Upload File";
    i.style.color = '#198754';
    btn.style.color = '#198754';
});
// Step 4;
container.addEventListener('dragleave', (event) => {
    event.preventDefault();
    container.classList.remove('active');
    text.textContent = "Drag & Drop";
    i.style.color = '#0D6EFD';
    btn.style.color = '#0D6EFD';
});
// Step 5;
container.addEventListener('drop', (event) => {
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
    showMe();
});
// Step 6;
let showMe = () => {
    let type = myFile.type,
        typeArr = ['image/jpeg', 'image/jpg', 'image/png'];
    //
    if (typeArr.includes(type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(myFile);
        //
        fileReader.onload = () => {
            let imgUrl = fileReader.result,
                img = `<img src='${imgUrl}'>`;
            container.innerHTML = img;
        };
    } else {
        alert('Invalid file type!!');
        container.classList.remove('active');
        i.style.color = '#0D6EFD';
        btn.style.color = '#0D6EFD';
    }
};
