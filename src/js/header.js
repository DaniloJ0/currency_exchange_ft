// Crear el header
const header = document.createElement('header');
const navHeader = document.createElement('nav');
navHeader.className = 'bg-white border-gray-200 dark:bg-gray-900';
const divHeader = document.createElement('div');
divHeader.className = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4';
const logoLink = document.createElement('a');
logoLink.href = '#';
logoLink.className = 'flex items-center';
const logoImg = document.createElement('img');
logoImg.src = '../src/img/dolar_64.png';
logoImg.className = 'h-8 mr-3';
logoImg.alt = 'Flowbite Logo';
const logoText = document.createElement('span');
logoText.className = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
logoText.textContent = 'CashIn';
const loginLink = document.createElement('a');
loginLink.href = '#';
loginLink.className = 'text-sm text-blue-600 dark:text-blue-500 hover:underline';
loginLink.textContent = 'Login';

// Agregar elementos al header
header.appendChild(navHeader);
navHeader.appendChild(divHeader);
divHeader.appendChild(logoLink);
logoLink.appendChild(logoImg);
logoLink.appendChild(logoText);
divHeader.appendChild(loginLink);

// Crear la navegación
const nav = document.createElement('nav');
nav.className = 'bg-gray-50 dark:bg-gray-700';
const divNav = document.createElement('div');
divNav.className = 'max-w-screen-xl px-4 py-3 mx-auto';
const navItems = document.createElement('div');
navItems.className = 'flex items-center';
const ulNav = document.createElement('ul');
ulNav.className = 'flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm';
const liInicio = document.createElement('li');
const aInicio = document.createElement('a');
aInicio.href = './index.html';
aInicio.className = 'text-gray-900 dark:text-white hover:underline';
aInicio.textContent = 'Inicio';
const liTabla = document.createElement('li');
const aTabla = document.createElement('a');
aTabla.href = './ivestn_table.html';
aTabla.className = 'text-gray-900 dark:text-white hover:underline';
aTabla.textContent = 'Tabla de conversión';
const liHistorico = document.createElement('li');
const aHistorico = document.createElement('a');
aHistorico.href = './historico.html';
aHistorico.className = 'text-gray-900 dark:text-white hover:underline';
aHistorico.textContent = 'Histórico';

// Agregar elementos a la navegación
nav.appendChild(divNav);
divNav.appendChild(navItems);
navItems.appendChild(ulNav);
ulNav.appendChild(liInicio);
liInicio.appendChild(aInicio);
ulNav.appendChild(liTabla);
liTabla.appendChild(aTabla);
ulNav.appendChild(liHistorico);
liHistorico.appendChild(aHistorico);