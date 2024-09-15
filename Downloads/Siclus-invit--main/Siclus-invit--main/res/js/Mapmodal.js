document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("mapModal");
    var btn = document.getElementById("openMapModal");
    var span = document.getElementsByClassName("close")[0];

    // Open modal when button is clicked
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // Close modal when "x" is clicked
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Close modal when clicking outside of modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });