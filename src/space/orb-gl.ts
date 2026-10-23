/**
 * Klotet i WebGL: en glasbubbla med nebulosa inuti (Joel 2026-09-24, ersätter norrskenet
 * från 2026-09-23 – backup i taggen look-norrsken-2026-09-24).
 *
 * En genomskinlig glassfär på svart: tunnfilmsfärger (violett/cyan/rosa och en varm strimma)
 * längs kanten, små regnbågsprickar där ljuset bryts, två mjuka höjdljus och en tunn glaskant.
 * Inuti en mörk nebulosa i nyhetens ton + accenten, vita stjärnor på bakre väggen och några
 * svävande i mitten (ett fåtal med kors). Det inre vrider sig långsamt (uTurn).
 *
 * Rösten läses ur `pulse` (DawnStage: pulse = 1 + a·0.10). Det är MOLNEN som talar (Joel
 * 2026-10-04): nebulosans flöde (uFlow) drivs av rösten – stilla i tystnad, rör sig när värden
 * pratar – och molnen tätnar och lyser mer med rösten. Vridningen (uTurn) är bara fingrets och
 * en långsam egen drift; den ska inte vara det man ser av rösten.
 * Samma gränssnitt som förut (OrbFrame, create/resize/clear/draw) – DawnStage/OrbStage orörda.
 * `b` är accenten (orb-draw: accentFor(hue)). `phi` används inte.
 */

export type RGB = [number, number, number];
export type OrbTone = { light: RGB; core: RGB };

export type OrbFrame = {
  /** Klotets mitt i CSS-pixlar. */
  x: number;
  y: number;
  /** Grundradie (utan puls) och pulsfaktor. */
  R: number;
  pulse: number;
  /** Oanvänd sedan 2026-09-23 – kvar för gränssnittets skull. */
  edge: number[];
  phi: number;
  a: OrbTone;
  b: OrbTone;
  alpha: number;
  /** Det inres vridning i radianer (fingret snurrar det). Utan värde: långsam egen drift. */
  turn?: number;
  /** Vridning kring tvärlinjen (fingret uppåt/nedåt). */
  tilt?: number;
};

const VERT = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;      // canvasens storlek i enhetspixlar
uniform float uDpr;
uniform vec2 uC;        // mitt, CSS-px, y nedåt
uniform float uR;       // grundradie, CSS-px
uniform float uPulse;
uniform float uTime;    // sekunder
uniform float uFlow;    // nebulosans fas – rinner med rösten (JS räknar upp den per bildruta)
uniform float uTurn;    // långsam vridning av det inre, radianer (kring lodlinjen)
uniform float uTilt;    // vridning kring tvärlinjen – fingret kan snurra åt alla håll (2026-09-24)
uniform vec3 uA;        // nyhetens ton (light), 0–1
uniform vec3 uB;        // accenten (light), 0–1
uniform float uAlpha;
uniform int uSteps;     // strålsteg genom nebulosan (6 = fullt, 3 = stort klot under draget)
uniform int uOct;       // fbm-oktaver (4 = fullt, 2 = under draget)
out vec4 o;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float s=0.0,a=0.5; for(int i=0;i<4;i++){ if(i>=uOct) break; s+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,4.1); a*=0.5; } return s; }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
vec3 hash3(vec3 p){ p=fract(p*vec3(443.897,441.423,437.195)); p+=dot(p,p.yzx+19.19); return fract((p.xxy+p.yzz)*p.zyx); }
vec3 hsv(float h,float s,float v){ vec3 k=abs(fract(h+vec3(0.,2./3.,1./3.))*6.-3.); return v*mix(vec3(1.),clamp(k-1.,0.,1.),s); }

// Stjärnor på en sfärisk yta: cellhash i 3D, några få får kors.
vec3 stars(vec3 p, float scale, float density, float t){
  vec3 q=p*scale; vec3 g=floor(q); vec3 f=fract(q);
  vec3 h=hash3(g);
  if(h.x>density) return vec3(0.);
  vec3 c=0.2+0.6*hash3(g+7.3);
  vec3 dv=f-c; float d=length(dv);
  float tw=0.7+0.3*sin(t*(1.5+h.y*2.0)+h.z*6.28);
  float core=smoothstep(0.2,0.0,d)*tw*(0.6+0.8*h.z);
  float cross=(exp(-abs(dv.x)*14.)+exp(-abs(dv.y)*14.))*smoothstep(0.5,0.0,d)*step(0.965,h.y)*0.9*tw;
  return vec3(1.0)*(core+cross)*2.2;
}

void main(){
  vec2 frag=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uDpr;
  // Rösten rör bara det inre (Joel 2026-09-24): radien står stilla, uPulse läses bara som amp.
  float R=uR;
  vec2 d=(frag-uC)/R;
  float r=length(d);
  float cover=clamp((R-length(frag-uC))*uDpr+0.5,0.0,1.0);
  if(cover<=0.0) discard;
  // Rösten, 0–1, ur pulsen (DawnStage: pulse = 1 + a·0.10).
  float uAmp=clamp((uPulse-1.0)/0.10,0.0,1.0);
  vec3 col;
  {
    float r2=min(dot(d,d),1.0);
    float z=sqrt(1.0-r2);
    vec3 n=vec3(d.x,-d.y,z);
    float fres=pow(1.0-z,1.4);
    float ca=cos(uTurn),sa=sin(uTurn);
    float cb=cos(uTilt),sb=sin(uTilt);
    mat3 R=mat3(ca,0.,-sa, 0.,1.,0., sa,0.,ca)*mat3(1.,0.,0., 0.,cb,sb, 0.,-sb,cb);
    vec3 p0=n, p1=vec3(n.xy,-z);
    // ---- nebulosa längs strålen genom klotet
    vec3 neb=vec3(0.); float dens=0.;
    // Det inre är det som rör sig (Joel 2026-09-24): nebulosan driver, glaset står stilla.
    // Flödet följer rösten (2026-10-04): uFlow står nästan stilla i tystnad och rinner när värden talar.
    float t0=uFlow;
    float nSteps=float(uSteps);
    for(int i=0;i<6;i++){
      if(i>=uSteps) break;
      float t=(float(i)+0.5)/nSteps;
      vec3 p=R*mix(p0,p1,t);
      // Rösten knådar molnen: tätare och mer kontrast när den talar, mjukare när den tystnar.
      float f=fbm(p*(1.35-uAmp*0.08)+vec3(t0*0.3,t0,t0*0.45));
      float dd=smoothstep(-0.15-uAmp*0.08,0.6-uAmp*0.15,f)*(1.0-t*0.3);
      vec3 c=mix(uA,uB,smoothstep(-0.4,0.6,snoise(p*0.8+vec3(3.1,0.,t0*0.3))));
      neb+=c*dd; dens+=dd;
    }
    neb/=(2.2*nSteps/6.0); neb*=(0.85+uAmp*0.4);
    // mörkast i mitten: djup
    neb*=0.6+0.4*(1.0-z);
    // ---- stjärnor: bakre väggen + svävande i mitten
    vec3 st=stars(R*p1,7.0,0.42,uTime)*1.0 + stars(R*p1*1.7+2.0,12.0,0.35,uTime+3.)*0.55;
    st+=stars(R*mix(p0,p1,0.5)+5.0,5.5,0.3,uTime+7.)*0.8;
    st*=0.85+0.15*z;
    // ---- glaset: tunnfilmsfärger vid kanten (violett / cyan / rosa)
    float band=fract((1.0-z)*2.6+snoise(n*3.0)*0.35);
    float warm=smoothstep(0.3,1.0,dot(normalize(d+1e-5),vec2(-0.5,0.85)))*fres;
    vec3 film=mix(mix(vec3(0.55,0.35,1.0),vec3(0.35,0.85,1.0),smoothstep(0.0,0.5,band)),vec3(1.0,0.45,0.75),smoothstep(0.5,1.0,band));
    film=mix(film,vec3(0.95,0.85,0.35),warm*0.6);
    float filmW=fres*(0.55+0.65*smoothstep(-0.3,0.7,snoise(n*2.2)));
    // ---- regnbågsprickar längs kanten
    vec2 cell=floor(frag/(uR*0.018));
    float hh=hash(cell);
    vec2 cf=fract(frag/(uR*0.018))-0.5+(vec2(hash(cell+3.1),hash(cell+5.7))-0.5)*0.5;
    float dot_=smoothstep(0.34,0.06,length(cf));
    float sp=step(0.90,hh)*dot_*pow(fres,0.8)*smoothstep(0.68,0.9,r);
    vec3 speck=hsv(hash(cell+1.7),1.0,1.0)*sp*2.2;
    // ---- höjdljus: två mjuka
    float hl=exp(-dot(d-vec2(-0.42,-0.52),d-vec2(-0.42,-0.52))*28.)*0.28
            +exp(-dot(d-vec2(0.62,-0.42),d-vec2(0.62,-0.42))*60.)*0.5;
    // ---- glaskanten: tunn ljusare ring
    float edge=smoothstep(0.955,0.995,r)*(1.0-smoothstep(0.995,1.0,r))*0.22;
    vec3 inner=neb+st;
    vec3 glass=inner*(1.0-fres*0.25)+film*filmW*0.85+speck+vec3(hl)+vec3(edge)*(0.6+0.4*film);

    col=glass;
  }
  col+=(hash(gl_FragCoord.xy+uTime)-0.5)/255.0;
  float a=uAlpha*cover;
  o=vec4(col*a,a);
}`;

const UNIFORMS = [
  "uRes",
  "uDpr",
  "uC",
  "uR",
  "uPulse",
  "uTime",
  "uFlow",
  "uTurn",
  "uTilt",
  "uA",
  "uB",
  "uAlpha",
  "uSteps",
  "uOct",
] as const;
type UniformName = (typeof UNIFORMS)[number];

export class OrbGL {
  private gl: WebGL2RenderingContext;
  private prog: WebGLProgram;
  private u = {} as Record<UniformName, WebGLUniformLocation | null>;
  private W = 0;
  private H = 0;
  private dpr = 1;
  private t0 = performance.now();
  /** Nebulosans fas och senaste bildrutans tid – flödet räknas upp med rösten i draw(). */
  private flow = 0;
  private lastT = 0;

  static create(canvas: HTMLCanvasElement): OrbGL | null {
    try {
      const gl = canvas.getContext("webgl2", {
        premultipliedAlpha: true,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      if (!gl) return null;
      return new OrbGL(gl);
    } catch {
      return null;
    }
  }

  private constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
      }
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.bindAttribLocation(prog, 0, "aPos");
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(prog) ?? "link");
    }
    this.prog = prog;
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(prog);
    for (const name of UNIFORMS) this.u[name] = gl.getUniformLocation(prog, name);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  }

  resize(W: number, H: number, dpr: number) {
    this.W = W;
    this.H = H;
    this.dpr = dpr;
    const c = this.gl.canvas as HTMLCanvasElement;
    c.width = Math.round(W * dpr);
    c.height = Math.round(H * dpr);
    this.gl.viewport(0, 0, c.width, c.height);
  }

  /**
   * Släpper GPU-kontexten när vyn lämnas (designaudit 2026-10-22, B14) – iOS har få att ge. Bara
   * om duken faktiskt är borta ur sidan: en effekt som körs om (React i utvecklingsläge) får inte
   * lämna kvar en död kontext på samma duk.
   */
  dispose() {
    const gl = this.gl;
    window.setTimeout(() => {
      try {
        if ((gl.canvas as HTMLCanvasElement).isConnected) return;
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      } catch {
        /* redan borta */
      }
    }, 0);
  }

  clear() {
    const gl = this.gl;
    gl.disable(gl.SCISSOR_TEST);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  draw(f: OrbFrame) {
    const gl = this.gl;
    this.clear();
    if (f.alpha <= 0.001) return;
    const c = gl.canvas as HTMLCanvasElement;
    const reach = f.R * f.pulse * 1.05;
    const x0 = Math.max(0, Math.floor((f.x - reach) * this.dpr));
    const y0 = Math.max(0, Math.floor((this.H - (f.y + reach)) * this.dpr));
    const size = Math.ceil(reach * 2 * this.dpr) + 2;
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(x0, y0, Math.min(size, c.width - x0), Math.min(size, c.height - y0));
    const n = (v: RGB) => [v[0] / 255, v[1] / 255, v[2] / 255] as const;
    const t = (performance.now() - this.t0) / 1000;
    // Molnen rör sig med rösten: långsam drift i tystnad, tydligt flöde när amp är hög.
    const amp = Math.max(0, Math.min(1, (f.pulse - 1) / 0.1));
    const dt = Math.max(0, Math.min(0.1, t - this.lastT));
    this.lastT = t;
    // Under golvet (liveAmp vilar på ~0,18 i tystnad) rör sig molnen bara i långsam drift.
    const voice = Math.max(0, (amp - 0.2) / 0.8);
    // Mindre rörelse (Joel 2026-10-04, andra vändan): 0,6/s vid full röst.
    this.flow += dt * (0.05 + voice * 0.6);
    gl.uniform2f(this.u.uRes, c.width, c.height);
    gl.uniform1f(this.u.uDpr, this.dpr);
    gl.uniform2f(this.u.uC, f.x, f.y);
    gl.uniform1f(this.u.uR, f.R);
    gl.uniform1f(this.u.uPulse, f.pulse);
    gl.uniform1f(this.u.uTime, t);
    gl.uniform1f(this.u.uFlow, this.flow);
    gl.uniform1f(this.u.uTurn, f.turn ?? t * 0.12);
    gl.uniform1f(this.u.uTilt, f.tilt ?? 0);
    gl.uniform3fv(this.u.uA, n(f.a.light));
    gl.uniform3fv(this.u.uB, n(f.b.light));
    gl.uniform1f(this.u.uAlpha, f.alpha);
    // Stort klot (draget ur nederkanten) ritas grövre – det är i rörelse och ska flyta, inte glittra.
    const big = f.R > 150;
    gl.uniform1i(this.u.uSteps, big ? 3 : 6);
    gl.uniform1i(this.u.uOct, big ? 2 : 4);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
