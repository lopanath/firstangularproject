import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{



userLoggedIn=true;















   // interpolation binding {{}} class(js) to template(html)
  title = 'firstangularproject';
  // Property Binding [] class(js) to template(html)
  image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/918oQOaXZTL._AC_UF1000,1000_QL80_.jpg"; 
  //Event Handling () Template to class 
  count=0;
    incrementCount(){
    this.count+=1;
  }

  //Two way binding
   firstname:string="";
//Two-way split binding 
   secondname:string="";
   greetUser(val:string)
   {
    this.secondname=val;
    if(val==="zaid")
    alert("hello"+val);
   }

   //Getter & Setter 
   private _thirdname:string="";
   public get thirdname():string{
    return this._thirdname;
   }
   public set thirdname(v:string){
    this._thirdname=v;
    if(this._thirdname==="lopa")
      {
        alert("hello "+this._thirdname);
      }
   }
   //Reference Type
   fourthname:string="";

   @ViewChild("nameRef")nameElementRef:ElementRef

   ngAfterViewInit():void{
    this.nameElementRef.nativeElement.focus();
   }

}



// [11:12 AM] Umang Goyal
// open terminal

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

// exit

// open terminal again

// source ~/.bashrc

// nvm install --lts

// nvm alias default lts/*

// node -v

// npm -v

// sudo mkdir angular

// cd angular/

// sudo chmod 777 /home/ubuntu/Desktop/angular

// ng new first-application
// [11:12 AM] Umang Goyal
// for running in ubuntu
