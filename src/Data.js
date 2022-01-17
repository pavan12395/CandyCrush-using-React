
export const data=[];
function genColor()
{
    switch(Math.floor(Math.random()*6))
    {
        case 0:
            return "yellow";
            break;
        case 1:
            return "orange";
            break;
        case 2:
            return "red";
            break;
        case 3:
            return "blue";
            break;
        case 4:
            return "green";
            break;
        case 5:
            return "purple";
            break;
    }
}
for(var i=0;i<81;i++)
{
    data.push(genColor());
}

export function row()
{
    var flag=0;
    for(var i=0;i<9;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(data[i*9+j]==data[i*9+j+1])
            {
                var count=2;
                while(j+count<9 && data[i*9+j+count]==data[i*9+j]){count++;}
                if(count<=2)
                {
                    j+=count;
                }
                else
                {
                 while(count!=0)
                 {
                     flag=1;
                    data[i*9+j]="white";
                    j++;
                    count--;
                 }
                 j--;
                }
               
            }
        }
    }
    //display();
    return flag;
}
export function col()
{
    var flag=0;
    for(var c=0;c<9;c++)
    {
       for(var r=0;r<8;r++)
       {
           if(data[r*9+c]==data[r*9+9+c])
           {
               var count=2;
               while(r+count<9 && data[(r+count)*9+c]==data[r*9+c])
               {
                   count++;
               }
               if(count<=2)
               {
                   r+=count;
               }
               else
               {
                   flag=1;
                   while(count!=0)
                   {
                       data[(r)*9+c]="white";
                       count--;
                       r++;
                   }
               }
               r--;
           }
       }
    }
    ///display();
    return flag;
}
function display()
{
    for(var i=0;i<9;i++)
    {
        var str="";
        for(var j=0;j<9;j++)
        {
            str+=data[i*9+j];
            str+=" ";
        }
        console.log(str);
    }
}
export function gravity()
{
    var y=0;
    for(var r=8;r>=0;r--)
    {
        for(var c=0;c<9;c++)
        {
            while(data[r*9+c]=="white")
            {
                y++;
                var val=genColor();
                for(var x=0;x<=r;x++)
                {
                    var temp=data[x*9+c];
                    data[x*9+c]=val;
                    val=temp;
                }
            }
        }
    }
    return y;
    
}

while(row() || col())
{
    gravity();
}

