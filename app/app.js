const form = document.getElementById('form');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');
let tareas = [];

if (localStorage.getItem('tareas')) {
    tareas = localStorage.getItem('tareas').split('|');
    tareas.forEach(t => agregarLi(t));
}
function agregarLi(texto) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = texto;
    const btn = document.createElement('button');
    btn.textContent = 'Completado';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', () => {
        lista.removeChild(li);
        tareas = tareas.filter(t => t !== texto);
        localStorage.setItem('tareas', tareas.join('|'));
    });
    li.appendChild(span);
    li.appendChild(btn);
    lista.appendChild(li);
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const text = entrada.value.trim();
    if (text) {
        tareas.push(text);
        localStorage.setItem('tareas', tareas.join('|'));
        agregarLi(text);
        entrada.value = '';
    }
});