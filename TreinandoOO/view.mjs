import Carro from "./model.mjs";
import ControllerCarro from "./controller.mjs";

let c = new Carro('Cobalt', 2014);


let controller = new ControllerCarro();

controller.registerController(c);

controller.listarController()