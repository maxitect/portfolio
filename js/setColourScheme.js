function setColourScheme() {
    fetchData('colours')

    .then(colorTuples => {
        const randomIndex = Math.floor(Math.random() * colorTuples.length);
        const [mainColor, secondaryColor] = colorTuples[randomIndex];

        // Apply the colors to the CSS variables
        document.documentElement.style.setProperty('--main', mainColor);
        document.documentElement.style.setProperty('--secondary', secondaryColor);
    })
    .catch(error => {
        console.error('Error fetching the color data:', error);
    });
}
  
// Call the function when the page loads
window.onload = setColourScheme;
  