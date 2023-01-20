export function renderBaby(baby) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    li.classList.add('baby-li');
    img.src = baby.image;
    h2.textContent = `Name: ${baby.title}`;
    p1.textContent = `Sign: ${baby.astroSign}`;
    p2.textContent = `Release Date: ${baby.birthday}`;

    li.append(h2, img, p1, p2);
    return li;
}

export function renderSignOption(sign) {
    const option = document.createElement('option');
    option.textContent = sign.name;
    option.value = sign.name;

    return option;
}
