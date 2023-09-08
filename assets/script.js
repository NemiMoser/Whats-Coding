window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Adjust this value to control when the navbar appears
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});
// Function to open a modal
function openModal(modalId, topic) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "block";
      fetchWikipediaData(modalId, topic);
  }

  // Select and hide buttons
  const buttons = document.querySelectorAll('.homepage-btn');
  buttons.forEach(button => {
      button.classList.add('hidden');
  });
}

  


// Function to fetch data and populate the modal content using JSONP
function fetchWikipediaData(modalId, topic) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=${topic}&callback=handleJSONP`;
  const contentId = `${modalId}-content`;

  const script = document.createElement("script");
  script.src = apiUrl;

  // Callback function for JSONP response
  window.handleJSONP = function(data) {
      try {
          const pageId = Object.keys(data.query.pages)[0];
          const extract = data.query.pages[pageId].extract;
          document.getElementById(contentId).innerHTML = extract;
      } catch (error) {
          console.error('Error parsing JSONP data:', error);
      } finally {
          // Clean up the script tag
          document.body.removeChild(script);
      }
  };

  document.body.appendChild(script);
}

// Attach click event listeners to open modals
const openModalButtons = document.querySelectorAll(".openModal");
openModalButtons.forEach(button => {
  button.addEventListener("click", function() {
      const modalId = this.getAttribute("data-modal");
      const topic = this.getAttribute("data-topic");
      openModal(modalId, topic);
  });
});

// Function to close a modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "none";
  }

  // Select and show buttons
  const buttons = document.querySelectorAll('.homepage-btn');
  buttons.forEach(button => {
      button.classList.remove('hidden');
  });
}


