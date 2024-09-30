export class Render {
    constructor(ctx){
        this.ctx = ctx;
    }
    render(scene){

        console.log(scene)

        for(let i = 0; i<scene.globalData.Instances.length; i++){
            let instance = scene.globalData.Instances[i];
            
            if(instance == "Square"){
                this.ctx.fillRect(25,25,100,100);
            }
        }

    }
}