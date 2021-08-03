import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraJugadores
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoJugador =
  getFirestore().
    collection("Jugador");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const nombre = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const equipo = getString(formData, "equipo").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Jugador} */
    const modelo = {
      nombre,
      telefono,
      equipo,
      fecha 
    };
    await daoJugador.
      add(modelo);
    muestraJugadores();
  } catch (e) {
    muestraError(e);
  }
}

