// script.js
document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;

        // Clear previous profiles
        const profilesContainer = document.getElementById('profilesContainer');
        profilesContainer.innerHTML = '';

        // Clear previous table data
        const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        userTableBody.innerHTML = '';

        // Display new profiles
        users.forEach(user => {
            const profileCard = createProfileCard(user);
            profilesContainer.appendChild(profileCard);

            const tableRow = createTableRow(user);
            userTableBody.appendChild(tableRow);
        });

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function createProfileCard(user) {
    const card = document.createElement('div');
    card.className = 'profile-card';

    const img = document.createElement('img');
    img.src = user.picture.medium;
    img.alt = `${user.name.first} ${user.name.last}`;

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = `${user.name.first} ${user.name.last}`;

    const email = document.createElement('div');
    email.className = 'email';
    email.textContent = user.email;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(email);

    return card;
}

function createTableRow(user) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = `${user.name.first} ${user.name.last}`;

    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;

    row.appendChild(nameCell);
    row.appendChild(emailCell);

    return row;
}
