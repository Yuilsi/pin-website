uniform float time;
uniform float progress;
uniform float distanceFromCenter;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3,1415926535897932;


void main(){
    
    vec4 t = texture2D(texture1,vUv);
    float bw = (t.r + t.b + t.g)/3.;
    vec4 another = vec4(bw,bw,bw,1.);
    gl_Fragcolor = mix(another,t, distanceFromCenter);
    gl_Fragcolor.a = clamp(distanceFromCenter,0.2,1.);

}