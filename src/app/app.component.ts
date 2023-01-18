import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // template:`<p> Hello World!</p>`, insert directly in page
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css'],
 // styles:['']    directly insert in page 
})
export class AppComponent {
  //title = 'basics';
  name = 'Luis'
  imageURL ="https://i.picsum.photos/id/70/3011/2000.jpg?hmac=-npCfe1kpGYW7HcBlZvrEZ9Qb_EdiGLbDxE26amgotM"
  
  images =[
'https://picsum.photos/200/300',
'https://picsum.photos/200',
'https://picsum.photos/id/237/200/300'
  ]
  currentDate = new Date()
  price = 300
  tempreature = 30
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    flever: "sj"
  }
  blueClass = false
  fontSize = 17
  getName(){
    return this.name
  }
  changeImage(e:KeyboardEvent){
    this.imageURL = (e.target as HTMLInputElement).value
  }
  logImg(event: string){
    console.log(event)
  }
}
 