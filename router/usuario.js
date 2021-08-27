const {Router} = require("express")
const {  check } = require("express-validator");
const router = Router();

const { insertarUsuario, obtenerUsuarios, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario } = require("../controllers/usuario");
const { validarCampos } = require("../middlewares/validar-campos");

//Agregar datos
router.post("/",[
    check("email", "El email debe ser obligatorio").isEmail(),
    check('password', 'La password debe ser obligatoria').isLength({ min: 5 }),
    validarCampos
] ,insertarUsuario)


//Obtener datos de usuarios
router.get("/", obtenerUsuarios);

router.get("/:id", obtenerUsuarioPorId)


//Actualizar datos 
router.put("/:id", actualizarUsuario)

//Eliminar usuario

router.delete("/:id", eliminarUsuario)



module.exports = router