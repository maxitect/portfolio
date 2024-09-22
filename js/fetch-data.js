// Function to fetch JSON data and create event cards
async function fetchData(type) {
    try {
      // Fetch the JSON data
      const response = await fetch(`./data/${type}-boxes.json`);
      const data = await response.json(); // Parse the JSON data
      return data;
    } catch (error) {
      console.error('Error fetching events data:', error);
    }
}

const container = document.querySelector('.flex-container'); // Select the container div