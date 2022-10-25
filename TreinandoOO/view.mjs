import {Carro} from "./model.mjs";
import {ControllerCarro} from "./controller.mjs";

c = new Carro('Cobalt', 2014);

controller = new ControllerCarro();

controller.registerController(c1);
