import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-galaxy',
  templateUrl: './background-galaxy.component.html',
  styleUrls: ['./background-galaxy.component.css']
})
export class BackgroundGalaxyComponent implements OnInit {

  ngOnInit(): void {

  }

  /*ngOnInit():void {
     let canvas:any = document.querySelector("#canvas") as HTMLCanvasElement;
     let ctx:any = canvas.getContext("2d") as CanvasRenderingContext2D;
     let w:number = document.body.scrollWidth;
     let h:number = document.body.scrollHeight;
     let stars:number[] = [];
     let meteors:number[] = [];
     let numeroDeMeteoros:number = 4;

     function init() {
       let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
       let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
       resizeReset();
       for (let a = 0; a < w * h * 0.0002; a++) {
       let novaEstrela:any = new Star();
       stars.push(novaEstrela);
       }
       if (w <= 430) {
       numeroDeMeteoros = 2;
       }
       for (let b = 0; b < numeroDeMeteoros; b++) {
         let novoMeteoro:any = new Meteor();
         meteors.push(novoMeteoro);
       }
       for (let c = 0; c < 6; c++) {
         let novaSuperStar:any = new SuperStar();
         stars.push(novaSuperStar);
       }
       animationLoop();
     }

     function resizeReset() {
     w = canvas.width = document.body.scrollWidth;
     h = canvas.height = document.body.scrollHeight;
     }

   function animationLoop() {
     ctx.clearRect(0, 0, w, h);
     drawScene();
     requestAnimationFrame(animationLoop);
   }

   function drawScene() {
     stars.map((star:any) => {
       star.update();
       star.draw();
     });
     meteors.map((meteor:any) => {
       meteor.update();
       meteor.draw();
     });
   }

   class Star {
     x: number;
     y: number;
     size: number;
     blinkChance: number;
     alpha: number;
     alphaChange: number;
     cores: any;
     cor: string;
     speed!: number;
     constructor() {
       this.x = Math.random() * w;
       this.y = Math.random() * h;
       this.size = Math.random() + 0.5;
       this.blinkChance = 0.005;
       this.alpha = 1;
       this.alphaChange = 0;
       this.cores = ["243, 221, 110", "91, 250, 249", "255, 255, 255", "214, 177, 224", "255, 255, 255", "255, 255, 255", "255, 255, 255", "255, 255, 255", "255, 255, 255"];
       this.cor = this.cores[Math.floor(Math.random() * this.cores.length)];
       this.reset();
     }
     reset(){
         this.x = Math.random() * w + Math.random();
         this.y = Math.random() * h - Math.random();
         this.speed = (Math.random()/15);
     }
     draw() {
       ctx.beginPath();
       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
       ctx.fillStyle = `rgba(${this.cor}, ${this.alpha})`;
       ctx.fill();
       ctx.closePath();
     }
     update() {
       if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
         this.alphaChange = -1;
       } else if (this.alphaChange !== 0) {
         this.alpha += this.alphaChange * 0.05;
         if (this.alpha <= 0) {
           this.alphaChange = 1;
         } else if (this.alpha >= 1) {
           this.alphaChange = 0;
         }
       };
       this.x -= this.speed;
       this.y += this.speed;
       if (this.y >= h + 100 || this.x <= w - w) {
         this.reset();
       }
     }
   }

   class SuperStar {
     x: number;
     y: number;
     size: number;
     blinkChance: number;
     alpha: number;
     alphaChange: number;
     cores: any;
     cor: string;
     speed!: number;
     rotation:number;
     rotationSpeed:number;
     constructor() {
       this.x = Math.random() * w;
       this.y = Math.random() * h;
       this.size = Math.random()*3 + 2;
       this.blinkChance = 0.005;
       this.alpha = 1;
       this.alphaChange = 0;
       this.rotation = 0;
       this.rotationSpeed = Math.random() * 0.001 ;
       this.cores = ["255, 239, 163", "91, 250, 249", "255, 255, 255", "214, 177, 224", "255, 255, 255", "255, 255, 255", "255, 255, 255"];
       this.cor = this.cores[Math.floor(Math.random() * this.cores.length)];
       this.reset();
     }
     reset(){
       this.x = Math.random() * w +Math.random();
       this.y = Math.random() * h - Math.random();
       this.speed = (Math.random()/15);
       }
     draw() {
       // Salva o estado atual do contexto de desenho
       ctx.save();

       // Aplica a rotação à SuperStar
       ctx.translate(this.x, this.y);
       ctx.rotate(this.rotation);

       // Cria um gradiente de cor para a SuperStar
       const gradient = ctx.createRadialGradient(
         0,
         0,
         this.size / 10,
         0,
         0,
         this.size
       );
       gradient.addColorStop(0,"white");

       ctx.beginPath();
       ctx.arc(0, 0, this.size + 7, 0, Math.PI * 2);
       ctx.fillStyle = `rgba(${this.cor}, ${this.alpha - 0.7})`;
       ctx.fill();

       // Desenha a SuperStar como uma cruz brilhante com gradientes de cor
       ctx.beginPath();
       ctx.moveTo(-this.size - 10, 0);
       ctx.lineTo(this.size + 10, 0);
       ctx.moveTo(0, -this.size - 10);
       ctx.lineTo(0, this.size + 10);
       ctx.strokeStyle = `rgba(${this.cor}, ${this.alpha})`;
       ctx.lineWidth = this.size / 8 ;
       ctx.stroke();
       ctx.fill();

       ctx.beginPath();
       ctx.moveTo(-this.size - 7, 0);
       ctx.lineTo(this.size + 7, 0);
       ctx.moveTo(0, -this.size - 7);
       ctx.lineTo(0, this.size + 7);
       ctx.strokeStyle = `rgba(${this.cor}, ${this.alpha})`;
       ctx.lineWidth = this.size /2 ;
       ctx.stroke();
       ctx.fill();

       ctx.beginPath();
       ctx.moveTo(-this.size - 3, 0);
       ctx.lineTo(this.size + 3, 0);
       ctx.moveTo(0, -this.size - 3);
       ctx.lineTo(0, this.size + 3);
       ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
       ctx.lineWidth = this.size ;
       ctx.stroke();
       ctx.fill();

       // Desenha um círculo preenchido com o gradiente de cor na SuperStar
       ctx.beginPath();
       ctx.arc(0, 0, this.size, 0, Math.PI * 2);
       ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
       ctx.fill();

       // Restaura o estado anterior do contexto de desenho
       ctx.restore();
       }
       update() {
       this.rotation += this.rotationSpeed;
       if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
         this.alphaChange = -1;
       } else if (this.alphaChange !== 0) {
         this.alpha += this.alphaChange * 0.05;
         if (this.alpha <= 0) {
           this.alphaChange = 1;
         } else if (this.alpha >= 1) {
           this.alphaChange = 0;
         }
       };
       this.x -= this.speed;
       this.y += this.speed;
       if (this.y >= h + 100 || this.x <= w - w) {
         this.reset();
       }
     }
   }


   class Meteor {
     x!: number;
     y!: number;
     size!: number;
     blinkChance!: number;
     alpha!: number;
     alphaChange!: number;
     cores: any;
     cor!: string;
     speed!: number;
     constructor() {
       this.reset();
     }
     reset() {
       this.x = Math.random() * w +Math.random() *100 + 300;
       this.y = document.documentElement.scrollTop;
       this.size = Math.random() * 2 + 0.5;
       this.speed = (Math.random() + 0.5) * 10;
     }
     draw() {
       ctx.save();
       ctx.strokeStyle = "rgba(255, 255, 255, 1)";
       ctx.lineCap = "round";
       ctx.shadowColor = "rgba(255, 255, 255, 1)";
       ctx.shadowBlur = 10;
       for (let i = 0; i < 10; i++) {
         ctx.beginPath();
         ctx.moveTo(this.x, this.y);
         ctx.lineWidth = this.size;
         ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
         ctx.stroke();
         ctx.closePath();
       }
       ctx.restore();
     }
     update() {
       this.x -= this.speed;
       this.y += this.speed;
       if (this.y >= h + 100) {
         this.reset();
       }
     }
   }


   window.addEventListener("DOMContentLoaded", init);
   window.addEventListener("resize", resizeReset);

 }
*/

}
