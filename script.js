  // avatar creation
  const userData = {
    name: "Rudra Devi",
    email: "rudra.devi@gmail.com",
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



// Get elements
const searchInput = document.querySelector('.search-bar input');
const tableBody = document.getElementById('table-body');
const rowsPerPage = 10;  // Set number of rows per page
let currentPage = 1;
const tableRows = Array.from(tableBody.getElementsByTagName('tr'));
const totalPages = Math.ceil(tableRows.length / rowsPerPage);

// Pagination elements
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageNumbers = document.querySelectorAll('#page-number');

// Search functionality
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredRows = tableRows.filter(row => {
    const cells = Array.from(row.getElementsByTagName('td'));
    return cells.some(cell => cell.textContent.toLowerCase().includes(searchTerm));
  });
  renderTable(filteredRows, 1);
});

// Render table rows for the current page
function renderTable(rows, page) {
  tableBody.innerHTML = '';
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedRows = rows.slice(start, end);

  paginatedRows.forEach(row => tableBody.appendChild(row));

  // Update page numbers
  pageNumbers.forEach((pageNumber, index) => {
    pageNumber.classList.toggle('number-one', index + 1 === page);
  });
}

// Initialize table with the first page
renderTable(tableRows, currentPage);

// Pagination functionality
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(tableRows, currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderTable(tableRows, currentPage);
  }
});

// Page number click functionality
pageNumbers.forEach((pageNumber, index) => {
  pageNumber.addEventListener('click', () => {
    currentPage = index + 1;
    renderTable(tableRows, currentPage);
  });
});

// Sorting functionality
const sortButtons = document.querySelectorAll('.dropdown-button');

sortButtons.forEach(button => {
  button.addEventListener('click', function() {
    const sortBy = this.textContent.trim().split(' ')[0].toLowerCase();

    // Sort based on the button clicked (date, name, status)
    if (sortBy === 'date') {
      tableRows.sort((a, b) => {
        return new Date(a.cells[1].textContent) - new Date(b.cells[1].textContent);
      });
    } else if (sortBy === 'name') {
      tableRows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));
    } else if (sortBy === 'status') {
      tableRows.sort((a, b) => a.cells[3].textContent.localeCompare(b.cells[3].textContent));
    }

    renderTable(tableRows, currentPage);
  });
});




