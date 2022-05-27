uniform float time;
uniform float progress;
uniform float distanceFromCenter;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.1415926535897932;


void main(){
    vec4 t = texture2D(texture1,vUv)*distanceFromCenter;
    gl_FragColor = t;

}