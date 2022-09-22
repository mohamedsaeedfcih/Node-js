/*Given a Number N corresponding to a person's age (in days).
Print his age in years, months and days,*/

/*let days=400;
let y = parseInt(days/365) ;
	
days =parseInt(days-(365*y)) ;
		
let m = parseInt(days/30);
	
let d = parseInt(days-(m*30));

console.log(y,m,d);
*/

/*Given a number X. Print "EVEN" if the first digit of X is even number. Otherwise print
"ODD".*/

/*let x =67;

while(x>=10)
	{
		x=x/10;
        
	}
    
if(x%2==0)
{
    console.log("even")
}
else
{
    console.log("odd")
}
*/

/*Given two numbers X, Y which donate coordinates of a point in 2D plan. Determine in which
quarter does it belong.*/

/*
let x=1,y=2;
	if (x > 0 && y > 0)
    {
        console.log("first")
    }
	else if (x < 0 && y > 0)
    {
        console.log("second")
    }
	else if (x < 0 && y < 0)
    {
        console.log("third")
    }
	else if (x > 0 && y < 0)
    {
        console.log("four")
    }
	else if (y == 0 && x == 0)
    {
        console.log("org")
    }

	else
    {
        console.log("out range")
    }
*/

/*Given three numbers A, B, C. Print these numbers in ascending order . */
let x =5, y=9, z =1;

if (x <= y && y <= z)
{
 console.log(x,y,z);
}
else
{

  if (x <= z && z <= y)
  {
    console.log(x,z,y);
  }
  else
  {

    if (y <= x && x <= z)
    {
        console.log(y,x,z);
    }
    else
    {

      if (y <= z && z <= x)
      {
        console.log(y,z,x);
      }
      else
      {

        if (z <= x && x <= y){
            console.log(z,x,y);
        }
        else
        {
          if (x == y && y == z){
            console.log(x,y,z);
          }
          else
          {
            console.log(z,y,x);
          }
        }
      }
    }
  }
}




