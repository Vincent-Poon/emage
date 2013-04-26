define({
    name : "Threshold Edge Detection",
    description : "",
    preview : "",

    passes : [{
        name : "Gray Scale",
        shader : "grayscale.essl",
        uniforms : {}
    }, {
        name : "Threshold",
        shader : "thresholdedge.essl",

        uniforms : {
            threshold : {
                name : "Threshold",
                ui : "range",
                type : 'f',
                precision :2,
                max : 1,
                min : 0,
                value : 0.8
            }
        }
    }]
})