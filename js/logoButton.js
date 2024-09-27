// Add event listener for clicks and keyboard interaction
const logoButton = document.getElementById('logo-reset-button');
if (logoButton) {
  // Reset color scheme on click
  logoButton.addEventListener('click', () => {
    setColourScheme();
  })
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        event.preventDefault();  // Optional: prevent any default Enter behavior
        setColourScheme();       // Call the function to reset the color scheme
    }
});