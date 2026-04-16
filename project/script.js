// DATA (array of all the routes)
const bikeRoutes = [
    {
        id: 1,
        name: 'Tepoztlán “Magical Town” Tour',
        location: 'Tepoztlán, Morelos',
        difficulty: 'Easy',
        description: 'A scenic tour through colonial streets and mountain views.',
        imageUrl: 'https://images.unsplash.com/photo-1687964057535-271dc28dd76c?auto=format&fit=crop&q=80&w=1080'
    },
    {
        id: 2,
        name: 'Zempoala Lakes Trail',
        location: 'Huitzilac, Morelos',
        difficulty: 'Moderate',
        description: 'The beauty of pristine lakes surrounded by pine forests.',
        imageUrl: 'https://images.unsplash.com/photo-1739430829079-a69ab91cca9d?auto=format&fit=crop&q=80&w=1080'
    },
    {
        id: 3,
        name: 'Sierra de Chalchihuites Mountain Trail',
        location: 'Tlayacapan, Morelos',
        difficulty: 'Challenging',
        description: 'Steep climbs and technical descents for experts.',
        imageUrl: 'https://images.unsplash.com/photo-1579653282779-ad1a8be6d2ed?auto=format&fit=crop&q=80&w=1080'
    }
];

// Functions

// 1. Display Routes (For routes.html) 
function renderRoutes(data) {
    const grid = document.getElementById('routesGrid');
    if (!grid) return;

    grid.innerHTML = data.map(function (route) {
        return `
        <div class="route-card">
            <div class="route-image-container">
                <img src="${route.imageUrl}" class="route-image" alt="${route.name}">
            </div>
            <div class="route-content">
                <h3 class="route-name">${route.name}</h3>
                <p class="route-description">${route.description}</p>
                </div>
        </div>`;
    }).join('');
}

// 2. Form Function (For joinus.html)
function setupJoinForm() {
    const joinForm = document.getElementById('joinForm');
    if (!joinForm) return;

    joinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        if (firstName && lastName) {
            localStorage.setItem('memberName', firstName + " " + lastName);
            document.getElementById('successName').textContent = firstName;
            document.getElementById('registrationForm').classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
        }
    });
}

// 3. To display welcome back message (For index.html)
function displayWelcome() {
    const welcomeBadge = document.getElementById('welcomeMessage');
    const storedName = localStorage.getItem('memberName');

    if (welcomeBadge && storedName) {
        welcomeBadge.innerHTML = `¡Welcome back, <strong>${storedName}</strong>! 🚴‍♂️`;
        welcomeBadge.classList.remove('hidden');
    }
}

//  (DOMContentLoaded)

// 1. Wait for html loading before executing
document.addEventListener('DOMContentLoaded', function () {
    displayWelcome();// 2. Activate the welcome message and applies localStorage in case is a previous user/costumer
    setupJoinForm(); // 3. Prepare the form so it can be ready when the user clicks Submit Form

    const diffFilter = document.getElementById('difficultyFilter');
    if (document.getElementById('routesGrid')) {// 4. Check if the user is on the Routes page to show the routes information, otherwise do no show anything related to it
        renderRoutes(bikeRoutes); // List of all the routes with its information (images and text)

        if (diffFilter) {
            diffFilter.addEventListener('change', function (e) {
                const selected = e.target.value;
                const filtered = bikeRoutes.filter(function (r) {
                    return selected === 'all' || r.difficulty === selected;
                });
                renderRoutes(filtered);
            });
        }

    }

    // Declare elements by Id, so it can be used along with HTML 
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (mobileBtn && mobileNav) {// 1. When MobileView open or close the list
        mobileBtn.addEventListener('click', function () {
            mobileNav.classList.toggle('hidden');

            // 2. If the icon are find the...
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('hidden');// 3. Hide the hamburger icon
                closeIcon.classList.toggle('hidden');// 4. Display the X icon, when click it is hidden
            }
        });
    }
});