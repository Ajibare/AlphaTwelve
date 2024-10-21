// Sidebar Toggle
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Modal Functionality
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Open Modal (triggered by an event click)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// // Carousel Auto-Slide
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove('active'));
//     slides[index].classList.add('active');
// }

// function autoSlide() {
//     slideIndex = (slideIndex + 1) % totalSlides;
//     showSlide(slideIndex);
// }

// setInterval(autoSlide, 3000); 

// const slideContainer = document.querySelector('.carousel-slide');
// const slides = document.querySelectorAll('.carousel-item');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const dots = document.querySelectorAll('.dot');

// let currentIndex = 0;

// // Function to update the carousel
// function updateCarousel() {
//     slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// // Next button event
// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateCarousel();
// });

// // Previous button event
// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateCarousel();
// });

// // Indicator (dot) events
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateCarousel();
//     });
// });

// // Initialize carousel
// updateCarousel();


// const slides = document.querySelectorAll('.carousel-item');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const dots = document.querySelectorAll('.dot');

// let currentSlide = 0;

// // Show the current slide
// function showSlide(index) {
//     if (index >= slides.length) currentSlide = 0;
//     if (index < 0) currentSlide = slides.length - 1;
//     // Move the slides
//     document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
//     // Update the active dot
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentSlide].classList.add('active');
// }

// // Next slide button
// nextBtn.addEventListener('click', () => {
//     currentSlide++;
//     showSlide(currentSlide);
// });

// // Previous slide button
// prevBtn.addEventListener('click', () => {
//     currentSlide--;
//     showSlide(currentSlide);
// });

// // Dot indicators click
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         showSlide(currentSlide);
//     });
// });






document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementsByClassName('search-input');
    const tableBody = document.getElementById('table-body');
    const rows = tableBody.getElementsByTagName('tr');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageNumber = document.getElementById('page-number');
    
    const sortByDateBtn = document.getElementById('sort-date');
    const sortByStatusBtn = document.getElementById('sort-status');
    const sortByNameBtn = document.getElementById('sort-name');
    
    let currentPage = 1;
    const rowsPerPage = 5; // Number of rows displayed per page
  
    // Pagination
    function displayPage(page) {
      const start = (page - 1) * rowsPerPage;
      const end = page * rowsPerPage;
  
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = (i >= start && i < end) ? '' : 'none';
      }
    }
  
    function updatePageNumber() {
      pageNumber.textContent = currentPage;
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePageNumber();
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
        currentPage++;
        displayPage(currentPage);
        updatePageNumber();
      }
    });
  
    displayPage(currentPage); // Initial page display
    updatePageNumber();
  
    // Search functionality
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        const match = Array.from(cells).some(cell => 
          cell.textContent.toLowerCase().includes(filter)
        );
        row.style.display = match ? '' : 'none';
      }
    });
  
    // Sorting functionality
    function sortTable(columnIndex, isNumeric = false) {
      const rowsArray = Array.from(rows);
      rowsArray.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
  
        if (isNumeric) {
          return new Date(aText) - new Date(bText);
        } else {
          return aText.localeCompare(bText);
        }
      });
  
      // Append sorted rows back to the table
      for (const row of rowsArray) {
        tableBody.appendChild(row);
      }
  
      displayPage(currentPage); // Re-display the current page after sorting
    }
  
    sortByDateBtn.addEventListener('click', () => {
      sortTable(1, true); // Sort by Date (index 1, numeric sorting)
    });
  
    sortByStatusBtn.addEventListener('click', () => {
      sortTable(3); // Sort by Status (index 3)
    });
  
    sortByNameBtn.addEventListener('click', () => {
      sortTable(0); // Sort by Event Name (index 0)
    });
  });
  







  
  const userData = {
    name: "Rudra Devi",
    email: "rudra.devi@gmail.com",
    // avatarUrl: "https://via.placeholder.com"
    avatarUrl: "avatar"
};

document.addEventListener('DOMContentLoaded', function() {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    // Update the DOM with user data
    userAvatar.src = userData.avatarUrl;
    userAvatar.alt = `${userData.name}'s avatar`;
    userName.textContent = userData.name;
    userEmail.textContent = userData.email;
});