export const createDiv = params => {
    const div = document.createElement('div');

    div.setAttribute('class', params.class);
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.textContent && (div.textContent = params.textContent);
    params.inner && (div.innerHTML = params.inner);

    return div;
}

export const  createHeading = params => {
    const heading = document.createElement('h1');
    heading.setAttribute('class', params.class);
    params.inner && (heading.innerHTML = params.inner);

    return heading;
}

export const  createButton = params => {
    const button = document.createElement('button');

    button.setAttribute('class',params.class);
    params.id && (button.id = params.id);
    params.inner && (button.innerHTML = params.inner);
    params.onclick && (button.onclick = params.onclick);

    return button;
}  

export const createInput = params => {
    const input = document.createElement('input');

    input.setAttribute('class', params.class);
    params.id && (input.id = params.id);
    params.type && (input.type = params.type);
    params.placeholder && (input.placeholder = params.placeholder);
    
    return input;
}

export const  createParagraph = params => {
    const paragraph = document.createElement('p');        
    paragraph.setAttribute('class', params.class);
    params.inner && (paragraph.innerHTML = params.inner);

    return paragraph;
}

export const  createLink = params => {
    const link = document.createElement('a');
    link.setAttribute('class', params.class);
    params.inner && (link.innerHTML = params.inner);

    return link;
}