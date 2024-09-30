export class Scene {
    constructor(){
        this.globalData = {
            Instances: []
        }
    }
    add(instance){
        this.globalData.Instances.push(instance)
    }
}

