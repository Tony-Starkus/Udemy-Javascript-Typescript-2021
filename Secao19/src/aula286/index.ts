const body = document.querySelector('body');

if (body) {
  body.style.setProperty('display', 'initial');
}

// non-null assertion (Não recomendado)
const body2 = document.querySelector('body')!;
body2.style.setProperty('background-color', '#FFF');

// Type assertion (Recomendado)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.setProperty('background-color', '#FFF');
