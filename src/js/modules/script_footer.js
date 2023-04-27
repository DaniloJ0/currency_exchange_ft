const footer = document.getElementById('footerBase');
footer.classList.add('bg-white', 'shadow', 'dark:bg-gray-800');

const container = document.createElement('div');
container.classList.add('w-full', 'mx-auto', 'max-w-screen-xl', 'p-4', 'text-center');

const text = document.createElement('span');
text.classList.add('text-sm', 'text-gray-500', 'text-center', 'dark:text-gray-400');
text.textContent = '© 2023 All Rights Reserved.';

container.appendChild(text);
footer.appendChild(container);


