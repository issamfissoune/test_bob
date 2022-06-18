import * as PIXI from "pixi.js"
import background from "./images/startScreenBG.png"
import buttonPicture from "./images/croppedbutton2.png"
import buttonOnClick from "./images/croppedbuttonDown2.png"
import { Game } from "./game"
// import { Game } from "./game"
// import { Assets } from './asset'



 export class Lobby {

    pixi: PIXI.Application
    loader: PIXI.Loader
    backgroundImage: PIXI.Sprite
    button: PIXI.Sprite
    button2: PIXI.Sprite
    backgroundSprite: PIXI.Sprite


    constructor() {
       
    
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        
        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this.pixi.view)

        // let asset = new Assets(this)
        this.loader = new PIXI.Loader()
        this.loader
        .add("startScreenBG", background)
        .add("buttonImage", buttonPicture)
        .add("buttonImageOnDown", buttonOnClick)    
        this.loader.load(() => this.doneLoading())

    }

    doneLoading(){
        let background : PIXI.Texture = PIXI.Texture.from("startScreenBG")
        this.backgroundSprite =  new PIXI.Sprite(background)
        this.backgroundSprite.scale.set(0.75)
        this.pixi.stage.addChild(this.backgroundSprite)

      
        this.button = new PIXI.Sprite(this.loader.resources["buttonImage"].texture!)
        this.button.anchor.set(0.5) 
        this.button.x = 720
        this.button.y = 400
        this.pixi.stage.addChild(this.button)
        this.button.scale.set(4)
        
        this.button.interactive = true;
        this.button.buttonMode = true;

        this.button.on('mousedown', () => this.onButtonDown())
        this.button.on('mouseup', () => this.onButtonUp())
        
        
    }

    onButtonDown() {
        this.button.texture = this.loader.resources["buttonImageOnDown"].texture!
        console.log("working")

        this.button.destroy()
        this.backgroundSprite.destroy()
        new Game(this.pixi)
        
    }

    onButtonUp() {
        this.button.texture = this.loader.resources["buttonImage"].texture!
        console.log("working")
        
    }

     
    

}