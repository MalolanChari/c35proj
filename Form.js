class Form {
  constructor() {
    this.input = createInput("email id");
    this.input1 = createInput("yes/no");
    this.input2 = createInput("yes/no");
    this.input3= createInput("here");
    this.button = createButton('SUBMIT');
    this.q1 = createElement('h4');
    this.q2 = createElement('h4');
    this.q3 = createElement('h4');
   

    this.greeting= createElement('h3');

  }

  

  display(){
    

    this.q1.html(" Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");   
    this.q1.position(10, 200);

    this.q2.html(" Would you be willing to contribute a small amount every month for such a  program? ");
    this.q2.position(10, 400);

    this.q3.html("How much per month would you be willing to pay?");
    title.position(10, 600);

    
    this.input.position(100, 100);
    this.input1.position(100, 300);
    this.input2.position(100, 500);
    this.input3.position(100, 700);
    this.button.position(250, 500);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.button.hide();
      this.q1.hide();
      this.q2.hide();
      this.q3.hide();
      
      
      this.greeting.html("thank you ")
      this.greeting.position(200, 200)
    });

  }
}
