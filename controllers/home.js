
const home = (req, res)=>{
    res.render("index", { titulo: "Breiner caga" });
}

const vistaRegistro = (req, res)=>{
    res.render("registro", {titulo: "Formulario para insertar usuarios"})
}

module.exports = {
    home,
    vistaRegistro
}