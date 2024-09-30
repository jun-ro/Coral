import { Scene } from "./util/scene";
import { Instance } from "./util/instanciate";
import { Render } from "./util/render";

const canvas = document.querySelector('#app')
const ctx = canvas.getContext("2d")

var testScene = new Scene();
var mainRender = new Render(ctx)
var mainInstance = new Instance(testScene);

mainInstance.new("Square")

mainRender.render(testScene);