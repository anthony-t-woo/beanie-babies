export function renderBaby(baby) {
    // create individual HTML elements
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const pContainer = document.createElement('div');
    const content = document.createElement('section');
    // add class to parent element for CSS
    li.classList.add('baby-li');
    content.classList.add('baby-content');

    // assign attributes to elements
    img.src = baby.image;
    h2.textContent = baby.title;
    p1.textContent = `Sign: ${baby.astroSign}`;
    p2.textContent = `Release Date: ${baby.birthday}`;

    // append elements
    pContainer.append(p1, p2);
    content.append(img, pContainer);
    li.append(h2, content);
    return li;
}

export function renderSignOption(sign) {
    const option = document.createElement('option');
    option.textContent = sign.name;
    option.value = sign.name;

    return option;
}
