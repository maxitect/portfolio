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
)});

const container = document.querySelector('.flex-container'); // Select the container div