document.addEventListener('DOMContentLoaded', () => {
async function fetchUserData() {
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.getElementById('api-data');

try {
  const response = await fetch(apiUrl);

  // Check if response is okay (status 200-299)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const users = await response.json();

  // Clear loading message
  dataContainer.innerHTML = '';

  // Create user list
  const userList = document.createElement('ul');
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });

  // Append list to container
  dataContainer.appendChild(userList);
} catch (error) {
  dataContainer.innerHTML = '';
  dataContainer.textContent = 'Failed to load user data.';
}

}

fetchUserData();
});