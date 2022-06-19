import * as PIXI from "pixi.js"
import { Application } from "pixi.js"
import levelBG from "./images/levelBG.png"
import worm from "./images/wormhench.png"
import bossWorm from "./images/wormhench.png"
import finn from "./images/FinnSword.png"
import { Game } from "./game"

export class Level {

    private _pixi: PIXI.Application
    
    private loader: PIXI.Loader

    private backgroundSprite : PIXI.Sprite

    finnSprite : PIXI.Sprite

    button: PIXI.Sprite
    
    button2: PIXI.Sprite

    texture: PIXI.Texture<PIXI.Resource>

    // public get pixi(): PIXI.Application { return this._pixi }
    constructor() {
       
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this._pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this._pixi.view)

        // let asset = new Assets(this)
        this.loader = new PIXI.Loader()
        this.loader
        .add("background", levelBG) 
        .add("wormSprite", worm) 
        .add("bossWormSprite", bossWorm)
        .add("finnSprite", finn)
        this.loader.load(() => this.doneLoading())
    }

    doneLoading(){
        let background : PIXI.Texture = PIXI.Texture.from("background")
        this.backgroundSprite =  new PIXI.Sprite(background)
        this.backgroundSprite.scale.set(0.5)
        this._pixi.stage.addChild(this.backgroundSprite)

        let finn : PIXI.Texture = PIXI.Texture.from("finnSprite")
        this.finnSprite = new PIXI.Sprite(finn)
        this.finnSprite.scale.set(3.5)
        this.finnSprite.x = 30
        this.finnSprite.y = 295
        this._pixi.stage.addChild(this.finnSprite)
      

        this.button = new PIXI.Sprite(this.loader.resources["wormSprite"].texture!)
        this.button.anchor.set(0.5) 
        this.button.x = 530
        this.button.y = 463
        this.button.angle = 8
        this.button.scale.set(4)

        this.button.interactive = true;
        this.button.buttonMode = true;

        this._pixi.stage.addChild(this.button)
    
        this.button2 = new PIXI.Sprite(this.loader.resources["bossWormSprite"].texture!)
        this.button2.anchor.set(0.5) 
        this.button2.x = 1325    
        this.button2.y = 600
        this.button2.scale.set(6)

        this.button2.interactive = true;
        this.button2.buttonMode = true;

        this._pixi.stage.addChild(this.button2)

        this.button.on('mousedown', () => this.onButtonDown("one"))
        this.button.on('mouseup', () => this.onButtonUp())

        this.button2.on('mousedown', () => this.onButtonDown("two"))
        this.button2.on('mouseup', () => this.onButtonUp())

    
        

    }


    onButtonDown(name : string) {

        switch (name){
            case "one":
                this.button.destroy
            case"two":
            console.log(name)
                this.backgroundSprite.destroy
        }
        
    }

    onButtonUp() {
        
    }

     
    

}
