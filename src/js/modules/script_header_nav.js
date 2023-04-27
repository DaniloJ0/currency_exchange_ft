// Crear el header
const header = document.getElementById('headerBase');
header.classList.add('bg-white', 'border-gray-200', 'dark:bg-gray-900');

const headerDiv = document.getElementById('headerDiv')
headerDiv.classList.add('flex', 'flex-wrap', 'justify-between', 'items-center', 'mx-auto', 'max-w-screen-xl', 'p-4');

const headerLink = document.getElementById('headerLink');
headerLink.setAttribute('href', './home_page.html');
headerLink.classList.add('flex', 'items-center');

const headerImg = document.getElementById('headerImg');
headerImg.setAttribute('src', '../src/img/dolar_64.png');
headerImg.classList.add('h-8', 'mr-3');
headerImg.setAttribute('alt', 'Flowbite Logo');

const headerSpan = document.getElementById('headerSpan');
headerSpan.classList.add('self-center', 'text-2xl', 'font-semibold', 'whitespace-nowrap', 'dark:text-white');
headerSpan.textContent = 'CashIn';

headerLink.appendChild(headerImg);
headerLink.appendChild(headerSpan);
headerDiv.appendChild(headerLink);
header.appendChild(headerDiv);

// Crear el nav
const nav = document.getElementById('navBase');
nav.classList.add('bg-gray-50', 'dark:bg-gray-700');

const navDiv = document.getElementById('navDiv');
navDiv.classList.add('max-w-screen-xl', 'px-4', 'py-3', 'mx-auto');

const navFlex = document.getElementById('navFlex');
navFlex.classList.add('flex', 'items-center');

const navUl = document.getElementById('navUl');
navUl.classList.add('flex', 'flex-row', 'font-medium', 'mt-0', 'mr-6', 'space-x-8', 'text-sm');

const navLinks = ['Inicio', 'Tabla de conversión', 'Histórico'];
const navHrefs = ['./home_page.html', './conv_table_page.html', './history_page.html'];
for (let i = 0; i < navLinks.length; i++) {
  const navLi = document.createElement('li');
  const navA = document.createElement('a');
  navA.setAttribute('href', navHrefs[i]);
  navA.classList.add('text-gray-900', 'dark:text-white', 'hover:underline');
  navA.textContent = navLinks[i];
  navLi.appendChild(navA);
  navUl.appendChild(navLi);
}

navFlex.appendChild(navUl);
navDiv.appendChild(navFlex);
nav.appendChild(navDiv);


