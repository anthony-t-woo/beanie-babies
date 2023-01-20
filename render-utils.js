export function renderBaby(baby) {
    // create individual HTML elements
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const pContainer = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    
    // add class to parent element for CSS 
    li.classList.add('baby-li');
    
    // assign attributes to elements
    img.src = baby.image;
    h2.textContent = `Name: ${baby.title}`;
    p1.textContent = `Sign: ${baby.astroSign}`;
    p2.textContent = `Release Date: ${baby.birthday}`;

    // append elements
    pContainer.append(p1, p2);
    li.append(h2, img, pContainer;
    return li;
}

export function renderSignOption(sign) {
    const option = document.createElement('option');
    option.textContent = sign.name;
    option.value = sign.name;

    return option;
}
