console.log("oi");
var autocontraste = false;
function Contraste() {
    console.log("normal");
    autocontraste = !autocontraste;
    if (autocontraste) {

        document.documentElement.style.setProperty('--cor-primaria-clara', "#000");
        document.documentElement.style.setProperty('--cor-primaria', "#000");
        document.documentElement.style.setProperty('--cor-primaria-hover', "#f00");
        document.documentElement.style.setProperty('--cor-primaria-escura-hover', "#f00");
        console.log("preto");
    } else {
        console.log("normal");
        document.documentElement.style.setProperty('--cor-primaria-clara', "#247DE5");
        document.documentElement.style.setProperty('--cor-primaria-hover', "#1A51A6");
        document.documentElement.style.setProperty('--cor-primaria', "#1A51A6");
        document.documentElement.style.setProperty('--cor-primaria-escura-hover', "#0f2e5e");
    }

}