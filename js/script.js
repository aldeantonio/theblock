function toggleMenu() {
  const hidemenu = document.querySelector(".hidemenu");
  const menuIcon = document.querySelector(".menu-icon");

  // Alternar classe "active"
  hidemenu.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

const serviceImage = document.getElementById("serviceImage");
const accordionItems = document.querySelectorAll(".accordion-item");

// Trocar imagem ao passar o mouse
accordionItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const imageSrc = item.getAttribute("data-image");
    if (imageSrc) {
      serviceImage.src = imageSrc;
    }
  });

  // Clique para abrir/fechar o accordion
  item.addEventListener("click", () => {
    accordionItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active"); // Fecha outros itens
      }
    });

    item.classList.toggle("active"); // Alterna o item clicado
  });
});




//scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled"); // Adiciona o fixed e a sombra ao rolar
    } else {
      header.classList.remove("scrolled"); // Remove ao voltar para o topo
    }
  });
});



// //filter
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }


filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  var grid = document.querySelector(".p-content"); // Seleciona o contêiner do grid

  if (c === "all") {
    c = "";
    // Alinha todos os itens à esquerda
    grid.style.gridTemplateColumns = "1fr";
  } else {
    // Volta ao layout padrão (duas colunas)
    grid.style.gridTemplateColumns = "1fr 1fr";
  }

  // Adiciona ou remove a classe "show" para exibir ou ocultar os itens
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}





