import './style.css'

const darkButton = document.getElementById("dark-button") as HTMLElement;

darkButton.onchange = (e:Event) => {
  const checkbox = e.target as HTMLInputElement;
  if(checkbox.checked){
    document.documentElement.setAttribute("data-theme","dark")
  }else{
    document.documentElement.setAttribute("data-theme","light")
  }
}

