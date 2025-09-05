document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('lang-toggle');
    const content = document.getElementById('content');
    let isEnglish = false;

    const renderContent = () => {
        if (isEnglish) {
            content.innerHTML = `
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Professional Profile</h2>
                    <p class="text-lg">Valter Martins is a Software Engineer specializing in modern web technologies, creating dynamic and responsive user experiences.</p>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Experience</h2>
                    <ul class="list-disc pl-5 text-lg">
                        <li><strong>Estoca:</strong> Staff Software Engineer - Led integrations and developed scalable systems.</li>
                        <li><strong>Hotmart:</strong> Software Engineer - Developed frontend applications using React and Next.js.</li>
                        <li><strong>Genial Care:</strong> Software Engineer - Developed internal frontend ecosystem using React, Node.</li>
                    </ul>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Education</h2>
                    <ul class="list-disc pl-5 text-lg">
                        <li>UNISUL - Bachelor, Information Systems</li>
                    </ul>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Contact</h2>
                    <p class="text-lg">Email: <a href="mailto:valtermartins.1301@gmail.com" class="text-blue-300 hover:text-blue-500 transition duration-300">valtermartins.1301@gmail.com</a></p>
                    <p class="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/valter-martins-50290859" class="text-blue-300 hover:text-blue-500 transition duration-300">linkedin.com/in/valter-martins-50290859</a></p>
                    <p class="text-lg">GitHub: <a href="https://github.com/valtermartins1301" class="text-blue-300 hover:text-blue-500 transition duration-300">github.com/valtermartins1301</a></p>
                </section>
            `;
            toggleButton.textContent = 'Switch to Portuguese';
        } else {
            content.innerHTML = `
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Professional Profile</h2>
                    <p class="text-lg">Valter Martins is a Software Engineer specializing in modern web technologies, creating dynamic and responsive user experiences.</p>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Experience</h2>
                    <ul class="list-disc pl-5 text-lg">
                        <li><strong>Estoca:</strong> Staff Software Engineer - Led integrations and developed scalable systems.</li>
                        <li><strong>Hotmart:</strong> Software Engineer - Developed frontend applications using React and Next.js.</li>
                        <li><strong>Genial Care:</strong> Software Engineer - Developed internal frontend ecosystem using React, Node.</li>
                    </ul>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Education</h2>
                    <ul class="list-disc pl-5 text-lg">
                        <li>UNISUL - Bachelor, Information Systems</li>
                    </ul>
                </section>
                <section class="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
                    <h2 class="text-3xl font-bold mb-4">Contact</h2>
                    <p class="text-lg">Email: <a href="mailto:valtermartins.1301@gmail.com" class="text-blue-300 hover:text-blue-500 transition duration-300">valtermartins.1301@gmail.com</a></p>
                    <p class="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/valter-martins-50290859" class="text-blue-300 hover:text-blue-500 transition duration-300">linkedin.com/in/valter-martins-50290859</a></p>
                    <p class="text-lg">GitHub: <a href="https://github.com/valtermartins1301" class="text-blue-300 hover:text-blue-500 transition duration-300">github.com/valtermartins1301</a></p>
                </section>
            `;
            toggleButton.textContent = 'Switch to English';
        }
    };

    toggleButton.addEventListener('click', () => {
        isEnglish = !isEnglish;
        renderContent();
    });

    renderContent();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
