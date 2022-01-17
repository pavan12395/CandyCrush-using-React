import React from 'react'
import {data,row,col,gravity} from './Data'
import blue from './blue.png';
import red from './red.png';
import green from './green.png';
import purple from './purple.png';
import orange from './orange.png';
import yellow from './yellow.png';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
function resolve(val)
{
    if(val[0]=='b')
    {
        return blue;
    }
    else if(val[0]=='r'){return red;}
    else if(val[0]=='p'){return purple;}
    else if(val[0]=='y'){return yellow;}
    else if(val[0]=='o'){return orange;}
    else if(val[0]=='g'){return green;}
}
export default function App()
{
    var index=0;
    const [start,setStart]=React.useState(-1);
    const [score,setScore]=React.useState(0);
    const [grid,setGrid]=React.useState(data);
    function dropHandler(event)
    {
        var t=0;
        const dest=Number(event.target.getAttribute("val"));
        if(start==dest+1 || start==dest-1 || start==dest+9 || start==dest-9)
        {
            var temp=data[start];
            data[start]=data[dest];
            data[dest]=temp;
            setGrid(data);
            if(row() || col())
            {
                setGrid(data);
                t+=gravity();
                while(row() || col())
                {
                    setGrid(data);
                    t+=gravity();
                }
            }
            else
            {
                temp=data[start];
                data[start]=data[dest];
                data[dest]=temp;
                setGrid(data);
                alert("Invalid Move");
            }
            setStart(-1);
            setScore(score+t);
        }
        else
        {
            alert("Invalid Move!!!");
        }
    }
    function dragStartHandler(event)
    {
        setStart(event.target.getAttribute("val"));
    }
    return(
    <div id="container"> 
    <div id="grid">
     {grid.map(val=><img draggable="true" src={resolve(val)} id="candy"  onDragStart={dragStartHandler} onDrop={dropHandler}val={index++} key={index} onDragOver={e=>{e.preventDefault()}}></img>)}
    </div>
    <p>Score : {score}</p>
    </div>);
}