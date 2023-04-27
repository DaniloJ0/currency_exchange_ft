// Create section element
const section = document.getElementById('sectionBase');

section.classList.add('min-h-screen', 'text-center', 'flex', 'flex-col', 'gap-3', 'bg-slate-50');

// Create h2 element and add it to section
const h2 = document.createElement('h2');
h2.classList.add('self-center', 'text-2xl', 'font-semibold', 'whitespace-nowrap', 'text-center', 'mt-7', 'text-blue-950');
h2.textContent = 'Convertidor de monedas';
section.appendChild(h2);

// Create p element and add it to section
const p1 = document.createElement('p');
p1.classList.add('text-center', 'mt-2', 'mb-4', 'text-sm', 'font-sans', 'text-blue-950');
p1.textContent = 'La forma más sencilla de convertir tus monedas';
section.appendChild(p1);

// Create div element and add it to section
const div = document.createElement('div');
div.classList.add('flex', 'justify-center', 'min-w-2xl');
section.appendChild(div);

// Create form element and add it to div
const form = document.createElement('form');
form.setAttribute('id', 'form_convert');
form.classList.add('max-w-2xl', 'flex', 'flex-col', 'gap-9', 'p-10', 'bg-white', 'rounded-lg', 'shadow-xl');
div.appendChild(form);

// Create div element and add it to form
const div2 = document.createElement('div');
div2.classList.add('flex', 'gap-4', 'justify-center');
form.appendChild(div2);

// Create div element and add it to div2
const div3 = document.createElement('div');
div2.appendChild(div3);

// Create label element and add it to div3
const label1 = document.createElement('label');
label1.classList.add('block', 'uppercase', 'tracking-wide', 'text-gray-700', 'text-xs', 'font-bold', 'mb-2');
label1.setAttribute('for', 'input1');
label1.textContent = 'Cantidad';
div3.appendChild(label1);

// Create input element and add it to div3
const input1 = document.createElement('input');
input1.setAttribute('id', 'amount');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Ingrese la cantidad');
input1.classList.add('appearance-none', 'block', 'w-full', 'shadow-sm', 'bg-white', 'text-gray-700', 'border', 'border-gray-200', 'rounded-lg', 'py-3', 'px-4', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
div3.appendChild(input1);

// Create div element and add it to div2
const div4 = document.createElement('div');
div2.appendChild(div4);

// Create label element and add it to div4
const label2 = document.createElement('label');
label2.classList.add('block', 'uppercase', 'tracking-wide', 'text-gray-700', 'text-xs', 'font-bold', 'mb-2');
label2.setAttribute('for', 'input1');
label2.textContent = 'De';
div4.appendChild(label2);

// Create select element and add it to div4
const select1 = document.createElement('select');
select1.setAttribute('id', 'select_from');
select1.classList.add('appearance-none', 'block', 'px-3', 'w-28', 'shadow-md', 'bg-white', 'text-gray-700', 'border', 'border-gray-200', 'rounded-lg', 'py-3', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');

select1.id = "select_from";
div4.appendChild(select1);

const divSwitch = document.createElement("div");
divSwitch.classList.add("relative", "top-8");
const imgSwitch = document.createElement("img");
imgSwitch.src = "../src/img/switch_32.png";
imgSwitch.id = "switch_amount";
imgSwitch.alt = "switch";
imgSwitch.classList.add("hover:", "cursor-pointer");
divSwitch.appendChild(imgSwitch);
div2.appendChild(divSwitch);

const div15 = document.createElement('div');
div2.appendChild(div15);


const label15 = document.createElement('label');
label15.classList.add('block', 'uppercase', 'tracking-wide', 'text-gray-700', 'text-xs', 'font-bold', 'mb-2');
label15.setAttribute('for', 'input1');
label15.textContent = 'A';
div15.appendChild(label15);

const select2 = document.createElement("select");
select2.classList.add('appearance-none', 'block', 'px-3', 'w-28', 'shadow-md', 'bg-white', 'text-gray-700', 'border', 'border-gray-200', 'rounded-lg', 'py-3', 'leading-tight', 'focus:outline-none', 'focus:bg-white', 'focus:border-gray-500');
select2.id = "select_to";
div15.appendChild(select2);

const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Convertir";
inputSubmit.classList.add("text-gray-900", "bg-white", "border", "border-gray-300", "focus:outline-none", "hover:bg-gray-100", "focus:ring-4", "focus:ring-gray-200", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "mr-2", "mb-2", "dark:bg-gray-800", "dark:text-white", "dark:border-gray-600", "dark:hover:bg-gray-700", "dark:hover:border-gray-600", "dark:focus:ring-gray-700");
form.appendChild(inputSubmit);

const divResult = document.createElement("div");
divResult.classList.add("mt-5", "flex", "flex-col", "gap-2");
const pResultTitle = document.createElement("p");
pResultTitle.classList.add("self-center", "text-lg", "text-blue-950", "font-semibold", "whitespace-nowrap", "text-center");
pResultTitle.textContent = "Resultado";
divResult.appendChild(pResultTitle);
const pResultRate = document.createElement("p");
pResultRate.classList.add("textlg", "text-red-600", "text-sm", "font-semibold");
pResultRate.id = "resultRate";
divResult.appendChild(pResultRate);
const pResult = document.createElement("p");
pResult.classList.add("textlg", "font-bold", "text-blue-950");
pResult.id = "result";
divResult.appendChild(pResult);
section.appendChild(divResult);

document.body.appendChild(section);
