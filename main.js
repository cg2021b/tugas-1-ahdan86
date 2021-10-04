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

  var vertices = [
    0.8306256111918, 0.1231645353476, 0.60, 0.64, 0.69,
    0.8384982611411, 0.092658016794, 0.60, 0.64, 0.69,
    0.8434186673594, 0.060183335753, 0.60, 0.64, 0.69,
    0.8463709110904, 0.0267245734683, 0.60, 0.64, 0.69,
    0.8424345861158, -0.010670513791, 0.60, 0.64, 0.69,
    0.8365300986538, -0.0401929511009, 0.60, 0.64, 0.69,
    0.8247211237298, -0.0657790634363, 0.60, 0.64, 0.69,
    0.8114168517528, -0.0871831288581, 0.60, 0.64, 0.69,
    0.7925342326078, -0.1095953250258, 0.60, 0.64, 0.69,
    0.7721897473056, -0.1264102333053, 0.60, 0.64, 0.69,
    0.7509150304548, -0.1386010754675, 0.60, 0.64, 0.69,
    0.7244514860326, -0.1496952213763, 0.60, 0.64, 0.69,
    0.6938383183222, -0.1563145378535, 0.60, 0.64, 0.69,
    0.6672681247432, -0.1602508628282, 0.60, 0.64, 0.69,
    0.6377456874332, -0.1602508628282, 0.60, 0.64, 0.69,
    0.6101914126106, -0.1553304566099, 0.60, 0.64, 0.69,
    0.5962640263665, -0.1283122154735, 0.60, 0.64, 0.69,
    0.5862917061314, -0.0934090946506, 0.60, 0.64, 0.69,
    0.5779814392688, -0.0568439204552, 0.60, 0.64, 0.69,
    0.5713332257787, -0.0186166928872, 0.60, 0.64, 0.69,
    0.5663470656612, 0.0179484813082, 0.60, 0.64, 0.69,
    0.5621919322299, 0.0536826288174, 0.60, 0.64, 0.69,
    0.5563747454261, 0.0894167763265, 0.60, 0.64, 0.69,
    0.5547126920535, 0.1193337370319, 0.60, 0.64, 0.69,
    0.55, 0.15, 0.60, 0.64, 0.69,
    0.553050638681, 0.1866468986189, 0.60, 0.64, 0.69,
    0.5547126920535, 0.2190569393831, 0.60, 0.64, 0.69,
    0.5854606794451, 0.234846446422, 0.60, 0.64, 0.69,
    0.6236879070131, 0.2448187666571, 0.60, 0.64, 0.69,
    0.6631322390074, 0.2506919405788, 0.60, 0.64, 0.69,
    0.7015103160735, 0.2470647599938, 0.60, 0.64, 0.69,
    0.733400883538, 0.2358384059626, 0.60, 0.64, 0.69,
    0.7596802140129, 0.2226987407251, 0.60, 0.64, 0.69,
    0.7825846580301, 0.2035092814453, 0.60, 0.64, 0.69,
    0.7980017216132, 0.1839810009068, 0.60, 0.64, 0.69,
    0.8129048830769, 0.161883209771, 0.60, 0.64, 0.69,
    0.8231829254656, 0.1428688313519, 0.60, 0.64, 0.69
  ];

  // Buat buffer untuk LinkedList tempat penyimpanan sementara sebelum titik digambar
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // Mendefinisikan vertexShader dan fragmentShader
  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform float uChanged;
      void main(){
          gl_Position = vec4(aPosition.x,aPosition.y + uChanged, 0.0, 1.0);
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
    if (change >= 0.5 || change < -0.5) speed = -speed;
    change += speed;
    gl.uniform1f(uChange, change);

    gl.clearColor(0.0, 0.1, 0.15, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 37);
  }
  setInterval(render, 1000 / 60);
}
