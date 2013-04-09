define({
	name : "Futuristic Bleak",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/futuristicbleak.png)"
			}
		}
	}]
})