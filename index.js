import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Cat from "./Cat/Cat.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Cat: new Cat({
    x: -10,
    y: -108,
    direction: -87.30571571014391,
    costumeNumber: 1,
    size: 50,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
