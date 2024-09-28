const container = document.querySelector('.flex-container'); // Select the container div

fetchData('info-boxes')

// Loop through the events data
.then((infos) => {
    infos.forEach(info => {
    // Create the flex item container
    const flexItem = document.createElement('div');
    flexItem.className = "flex-item";

    // Create and set the title div element
    const title = document.createElement('h2');
    title.textContent = info.title;    

    // Append all created elements to the flex item container
    flexItem.appendChild(title);
    for (para of info.content) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = para;
        flexItem.appendChild(paragraph);
    }

    // Append the flex item into the flex container
    container.appendChild(flexItem);
    }
)})
.then(() => (fetchData('project-boxes')

// Loop through the events data
.then((projects) => {
    projects.forEach(project => {
    // Create the flex item container
    const flexItem = document.createElement('div');
    flexItem.className = "flex-image";

    // Create and set the link element
    const url = document.createElement('a');
    url.href = project.url;

    // Create and set the image element
    const img = document.createElement('img');
    img.src = project.img;
    img.alt = `Image of ${project.title}`;

    // Create and set the title div element
    const title = document.createElement('div');
    title.className = 'h2-image';
    title.textContent = project.title;

    // Append all created elements to the flex item container
    flexItem.appendChild(url);
    url.appendChild(img);
    url.appendChild(title);

    // Append the flex item into the flex container
    container.appendChild(flexItem);
    }
)})));