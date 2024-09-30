export class Instance {
    constructor(scene){
        this.scene = scene
    }
    new(nameOfInstance){
        this.scene.add(nameOfInstance)
    }
}
