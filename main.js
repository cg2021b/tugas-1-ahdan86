function main() {
  /**
   * @type {HTMLCanvasElement} canvas
   */
  var canvas = document.getElementById("myCanvas");

  /**
   * @type {WebGLRenderingContext} gl
   */
  var gl = canvas.getContext("webgl");
  if (!gl) {
    console.log("Browser only support experimental WebGl");
    gl = canvas.getContext("experimental-webgl");
  }

  const vertices = [...verticesKanan, ...verticesKiri];
  // Buat buffer untuk LinkedList tempat penyimpanan sementara sebelum titik digambar
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null); //unbind buffer

  // Mendefinisikan vertexShader dan fragmentShader
  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform mat4 uChanged;
      void main(){
          gl_Position = uChanged * vec4(aPosition, 0.0, 1.0);
          vColor = aColor;
      }
    `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main(){
          gl_FragColor = vec4(vColor, 1.0);
      }
    `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  //Compile Shader
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
    return;
  }

  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader));
    return;
  }

  // attach shader ke program grafika
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // link program ke program utama
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("ERROR validating program!", gl.getProgramInfoLog(shaderProgram));
    return;
  }
  gl.validateProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  //Dapatkan lokasi positon dari shader untuk diolah
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);

  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  //Waktunya NGGAMBARR
  var speed = 0.0197;
  var change = 0;
  var uChange = gl.getUniformLocation(shaderProgram, "uChanged");
  function render() {
    if (change >= 0.8 || change < -0.8) speed = -speed;
    change += speed;
    const kiri = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1,
		]
		
		const kanan = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, change, 0, 1,
		]


    gl.clearColor(0, 0.529, 0.658, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Vertices Kanan
    gl.uniformMatrix4fv(uChange, false, kanan);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 26);
    gl.drawArrays(gl.TRIANGLE_FAN, 26, 50);
    gl.drawArrays(gl.TRIANGLE_FAN, 76, 64);
    gl.drawArrays(gl.TRIANGLE_FAN, 140, 20);
    
    //Vertices Kiri
    gl.uniformMatrix4fv(uChange, false, kiri);
    gl.drawArrays(gl.TRIANGLES, 160, 87);
    gl.drawArrays(gl.TRIANGLE_FAN, 256, 24);
    gl.drawArrays(gl.TRIANGLE_FAN, 247, 9);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
