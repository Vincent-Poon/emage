define({

    name : "Hue",
    description : "色调",
    preview : "",

    passes : [{
        name : "Main",
        shader : "hue.essl",

        uniforms : {
            hueAdjust : {
                name : "Hue",
                type : "f",
                ui : "range",
                min : 0,
                max : 360,
                precision : 0,
                value : 90
            }
        }
    }]
})