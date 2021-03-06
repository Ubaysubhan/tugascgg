function main() {
	var canvas = document.getElementById("myCanvas"); // The Canvas
	var gl = canvas.getContext("webgl"); // The Paints and Brush

	
    var vertices = [
        -0.7009593019965,0.475519121646,0.0,0.0,0.0,
        -0.7368723050583,0.3749627130732,0.0,0.0,0.0,//1
        -0.7368723050583,0.3749627130732,0.0,0.0,0.0,
        -0.7332810047521,0.2546541528164,0.0,0.0,0.0,//2
        -0.7332810047521,0.2546541528164,0.0,0.0,0.0,
        -0.7171201533743,0.1038195399572,0.0,0.0,0.0,//3
        -0.7171201533743,0.1038195399572,0.0,0.0,0.0,
        -0.6711694659568,0.0552831163193,0.0,0.0,0.0,//4
        -0.6711694659568,0.0552831163193,0.0,0.0,0.0,
        -0.5951236819736,0.0509376429488,0.0,0.0,0.0,//5
        -0.5951236819736,0.0509376429488,0.0,0.0,0.0,
        -0.4582412708039,0.0487649062636,0.0,0.0,0.0,//6
        -0.4582412708039,0.0487649062636,0.0,0.0,0.0,
        -0.3191861229489,0.0509376429488,0.0,0.0,0.0,//7
        -0.3191861229489,0.0509376429488,0.0,0.0,0.0,
        -0.2127220253724,0.0661467997454,0.0,0.0,0.0,//8
        -0.2127220253724,0.0661467997454,0.0,0.0,0.0,
        -0.1692672916677,0.1248106902468,0.0,0.0,0.0,//9
        -0.1692672916677,0.1248106902468,0.0,0.0,0.0,
        -0.1584036082415,0.2421384712494,0.0,0.0,0.0,//10
        -0.1584036082415,0.2421384712494,0.0,0.0,0.0,
        -0.1475399248154,0.3333934120293,0.0,0.0,0.0,//11
        -0.1475399248154,0.3333934120293,0.0,0.0,0.0,
        -0.1453671881301,0.405093722642,0.0,0.0,0.0,//12
        -0.1453671881301,0.405093722642,0.0,0.0,0.0,
        -0.1909946585201,0.4659303498286,0.0,0.0,0.0,//13
        -0.1909946585201,0.4659303498286,0.0,0.0,0.0,
        -0.3257043330046,0.4659303498286,0.0,0.0,0.0,//14
        -0.3257043330046,0.4659303498286,0.0,0.0,0.0,
        -0.4604140074891,0.4615848764581,0.0,0.0,0.0,//15
        -0.4604140074891,0.4615848764581,0.0,0.0,0.0,
        -0.6211965221964,0.4637576131433,0.0,0.0,0.0,//16
        -0.6211965221964,0.4637576131433,0.0,0.0,0.0,
        -0.7009593019965,0.475519121646,0.0,0.0,0.0,//17
        -0.1909946585201,0.4659303498286,0.0,0.0,0.0,
        -0.2453130756509,0.5289397137004,0.0,0.0,0.0,//18
        -0.2453130756509,0.5289397137004,0.0,0.0,0.0,
        -0.3126679128932,0.5311124503856,0.0,0.0,0.0,//1
        -0.3126679128932,0.5311124503856,0.0,0.0,0.0,
        -0.5777417884918,0.5289397137004,0.0,0.0,0.0,//2
        -0.5777417884918,0.5289397137004,0.0,0.0,0.0,
        -0.6842058860682,0.5332851870708,0.0,0.0,0.0,//3
        -0.6842058860682,0.5332851870708,0.0,0.0,0.0,
        -0.7009593019965,0.475519121646,0.0,0.0,0.0,//4
        -0.6,0.4,0.0,0.0,0.0,
        -0.6559603091602,0.3877118291601,0.0,0.0,0.0,//5
        -0.6559603091602,0.3877118291601,0.0,0.0,0.0,
        -0.6603057825307,0.3051478351212,0.0,0.0,0.0,//6
        -0.6603057825307,0.3051478351212,0.0,0.0,0.0,
        -0.6429238890488,0.1617472138957,0.0,0.0,0.0,//7
        -0.6429238890488,0.1617472138957,0.0,0.0,0.0,
        -0.6277147322522,0.1009105867092,0.0,0.0,0.0,//8
        -0.6277147322522,0.1009105867092,0.0,0.0,0.0,
        -0.5668781050656,0.0835286932273,0.0,0.0,0.0,//9
        -0.5668781050656,0.0835286932273,0.0,0.0,0.0,
        -0.2474858123361,0.0943923766535,0.0,0.0,0.0,//10
        -0.2474858123361,0.0943923766535,0.0,0.0,0.0,
        -0.2083765520019,0.1574017405253,0.0,0.0,0.0,//11
        -0.2083765520019,0.1574017405253,0.0,0.0,0.0,
        -0.1844764484643,0.3703299356782,0.0,0.0,0.0,//12
        -0.1844764484643,0.3703299356782,0.0,0.0,0.0,
        -0.227931182169,0.4268210894943,0.0,0.0,0.0,//13
        -0.227931182169,0.4268210894943,0.0,0.0,0.0,
        -0.5277688447314,0.4203028794386,0.0,0.0,0.0,//14
        -0.5277688447314,0.4203028794386,0.0,0.0,0.0,
        -0.6,0.4,0.0,0.0,0.0,//15
        -0.5451507382132,0.4746212965695,0.0,0.0,0.0,
        -0.2931132827261,0.4746212965695,0.0,0.0,0.0,//16
        -0.2931132827261,0.4746212965695,0.0,0.0,0.0,
        -0.2952860194113,0.5224215036446,0.0,0.0,0.0,//16
        -0.5560144216394,0.5224215036446,0.0,0.0,0.0,
        -0.5451507382132,0.4746212965695,0.0,0.0,0.0,//17
        -0.2952860194113,0.5224215036446,0.0,0.0,0.0,
        -0.5560144216394,0.5224215036446,0.0,0.0,0.0,//18
        -0.3843682235059,0.3442570954554,0.0,0.0,0.0,
        -0.440859377322,0.2508294179904,0.0,0.0,0.0,
        -0.440859377322,0.2508294179904,0.0,0.0,0.0,
        -0.3713318033945,0.2595203647313,0.0,0.0,0.0,
        -0.3713318033945,0.2595203647313,0.0,0.0,0.0,
        -0.3843682235059,0.3442570954554,0.0,0.0,0.0,
        -0.4386866406368,0.2182383677118,0.0,0.0,0.0,
        -0.46910495423,0.098737850024,0.0,0.0,0.0,
        -0.46910495423,0.098737850024,0.0,0.0,0.0,
        -0.4,0.2,0.0,0.0,0.0,
        -0.4,0.2,0.0,0.0,0.0,
        -0.4386866406368,0.2182383677118,0.0,0.0,0.0,


        0.3553461404341,0.4966483220695,0.0,0.0,0.0,
        0.3632556190843,0.3490047205991,0.0,0.0,0.0,//1
        0.3632556190843,0.3490047205991,0.0,0.0,0.0,
        0.4159854767522,0.1196298397434,0.0,0.0,0.0,//2
        0.4159854767522,0.1196298397434,0.0,0.0,0.0,
        0.8193688879123,0.1618137258778,0.0,0.0,0.0,//3
        0.8193688879123,0.1618137258778,0.0,0.0,0.0,
        0.8615527740467,0.3885521138501,0.0,0.0,0.0,//4
        0.8615527740467,0.3885521138501,0.0,0.0,0.0,
        0.5979034857068,0.3885521138501,0.0,0.0,0.0,//5
        0.3553461404341,0.4966483220695,0.0,0.0,0.0,
        0.4238949554024,0.5625606441544,0.0,0.0,0.0,//6
        0.4238949554024,0.5625606441544,0.0,0.0,0.0,
        0.8114594092621,0.5678336299212,0.0,0.0,0.0,//7
        0.8114594092621,0.5678336299212,0.0,0.0,0.0,
        0.8615527740467,0.3885521138501,0.0,0.0,0.0,//8
        0.3553461404341,0.4966483220695,0.0,0.0,0.0,
        0.4238949554024,0.5625606441544,0.0,0.0,0.0,//9
        0.4818977988372,0.5309227295537,0.0,0.0,0.0,
        0.6901807366257,0.5493781797375,0.0,0.0,0.0,//10
        0.4792613059538,0.4280995071011,0.0,0.0,0.0,
        0.7139091725763,0.4439184644015,0.0,0.0,0.0,//11
        0.7139091725763,0.4439184644015,0.0,0.0,0.0,
        0.6954537223925,0.5045578007197,0.0,0.0,0.0,//12
        0.6954537223925,0.5045578007197,0.0,0.0,0.0,
        0.4792613059538,0.4861023505359,0.0,0.0,0.0,//13
        0.4792613059538,0.4861023505359,0.0,0.0,0.0,
        0.4792613059538,0.4280995071011,0.0,0.0,0.0,//14
        0.6954537223925,0.5045578007197,0.0,0.0,0.0,
        0.6901807366257,0.5493781797375,0.0,0.0,0.0,//15
        0.4792613059538,0.4861023505359,0.0,0.0,0.0,
        0.4818977988372,0.5309227295537,0.0,0.0,0.0,//16
        0.3632556190843,0.3490047205991,0.0,0.0,0.0,
        0.5979034857068,0.3885521138501,0.0,0.0,0.0,//17


    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vsSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform vec2 uDelta;
        void main() {
            vec2 position;
            if(aPosition.x >= 0.0){
                position = vec2(aPosition.x, aPosition.y + uDelta);
            }
            else{
                position = vec2(aPosition.x, aPosition.y);
            }
            gl_PointSize = 10.0;
            gl_Position = vec4(position, 0.0, 1.0);
            vColor = aColor;
        }
    `;
    var fsSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `

   
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);   
    gl.shaderSource(vertexShader, vsSource);   
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);   
    gl.shaderSource(fragmentShader, fsSource);  

    
    gl.compileShader(vertexShader); 
    gl.compileShader(fragmentShader);   

   
    var shaderProgram = gl.createProgram();

   
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    
    gl.linkProgram(shaderProgram);  
    gl.useProgram(shaderProgram);

 
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    // Create a pointer to the Uniform variable we have on the shader
    var uDelta = gl.getUniformLocation(shaderProgram, "uDelta");
    var delta = [0.0, 0.0]; // For tha changes on the x and y
    var deltaX = 0.0204;
    var deltaY = 0.0204;
    var animating = true;
   
    function render() {
        
        if (animating) {
            // Build a linear animation
            if (delta[0] >= 0.6 || delta[0] <= -1.3) deltaX = -deltaX;
            if (delta[1] >= 0.5 || delta[1] <= -0.5) deltaY = -deltaY;
            delta[0] += deltaX;
            delta[1] += deltaY;
            gl.uniform2fv(uDelta, delta);
        }

        // Let the computer pick a color from the color pallete to fill the background
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        // Ask the computer to fill the background with the above color
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.LINES, 0, 255);
        requestAnimationFrame(render);
    }
    render();
}