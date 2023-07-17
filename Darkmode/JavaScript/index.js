function toggleMode() {
  const light = document.getElementById("light");
  const dark = document.getElementById("dark");
  const bgMode= document.getElementById("body");
  const estado = document.getElementById("estado");
  const formulario = document.getElementById("form");

  dark.addEventListener("click",() =>{
      bgMode.classList.remove("bg-light");
      bgMode.classList.add("bg-dark");
      estado.classList.add("dark")
      formulario.classList.add("dark")

  } );

  light.addEventListener("click",() =>{
      bgMode.classList.remove("bg-dark");
      bgMode.classList.add("bg-light");
      estado.classList.remove("dark")
      formulario.classList.remove("dark")

  } );
}

toggleMode();

