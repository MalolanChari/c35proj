
    function setup(){
      canvas = createCanvas(1000,800);
      input = createInput("email id");
    input1 = createInput("yes/no");
    input2 = createInput("yes/no");
    input3= createInput("here");
    button = createButton('SUBMIT');
    q1 = createElement('h4');
    q2 = createElement('h4');
    q3 = createElement('h4');
   

    greeting= createElement('h2');
    
    }
 

  

 function draw(){
    

    q1.html(" Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");   
    q1.position(20, 200);

    q2.html(" Would you be willing to contribute a small amount every month for such a  program? ");
    q2.position(20, 400);

    q3.html("How much per month would you be willing to pay?");
    q3.position(20, 600);

    
    input.position(100, 100);
    input1.position(100, 300);
    input2.position(100, 500);
    input3.position(100, 700);
    button.position(800, 750);

    button.mousePressed(()=>{
      input.hide();
      input1.hide();
      input2.hide();
      input3.hide();
      button.hide();
      q1.hide();
      q2.hide();
      q3.hide();
      
      
      greeting.html("THANKS FOR YOUR VIEWS! ")
      greeting.position(200, 200)
    });
  }


