import { Carro } from "./model";
import { ControllerCarro } from "./controller";

let c = new Carro('Corsa', '2012');
let c2 = new Carro('Cobalt', '2014')

let cc = new ControllerCarro;

cc.registerCarro(c);

cc.listarCarro();

