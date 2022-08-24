uniform float time;
uniform float progress;
uniform sampler2D t;
uniform vec4 resolution;

varying vec3 vPosition;
varying vec2 vUv;

float PI = 3.141592653589793238;

void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

	vec4 tt = texture2D(t, vUv);
	gl_FragColor = vec4(vUv,0.0,1.);
    gl_FragColor = tt;
	
}