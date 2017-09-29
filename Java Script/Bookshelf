//Ayesha Khan
//29/9/17


/// there is somethign wrong with this code, can't seem to be able to figure it out. Asked teacher, was also stuck.
//moving on to Html for time being


// draw shelf
for (var y = 120; y <400; y += 120)
{
    fill(173, 117, 33);
    rect(0, y, width, 10);
}


var book = [  
    {
        title: "The Giver", 
        author: "By: someone",
        stars: 4,
        color: color(242, 46, 46)
    },
    
    {
        title:"loki",
        author: "By: someone",
        stars: 3,
        color: color(237, 26, 237)
    },
    
    {
        title: "Athens",
        author: "By: someone",
        stars: 4,
        color: color(137, 26, 235)
        
    },
    
    
    
    {
        title:"Harry Potter", 
        author: "By: someone",
        stars: 3,
        color: color(20, 149, 224)
    },
    
    {
        title:"blah",
        author: "By: someone",
        stars: 2,
        color: color(26, 225, 235)
    },
    
    {
        title:" Blue",
        author: "By: someone",
        stars: 1,
        color: color(26, 235, 137)
    },
    
    {
        title:"Shoe",
        author: "By: someone",
        stars: 2,
        color: color(30, 235, 71)
    },
    
    {
        title:"Clue",
        author: "By: someone",
        stars: 3,
        color: color(151, 235, 26)
    },
    
    {
        title: "lala land", 
        author: "By: someone",
        stars: 2,
        color: color(235, 217, 17)
    }
    
    
];


// draw one book

for (var num = 10; num < 370; num += 120)
{
    for (var b = 20; b < 370; b+= 120)
    {
        for (var g = 0; g < book.length; g++)
            {
              fill(book[g].color);
              rect(num, b, 90, 100);
            }
        
            
            
       
    }
}


fill(0,0,0);
var h = 0;
var j = 0;

for( var a = 0; a < book.length; a++)
{
    text(book[a].title, 121*a + 15, 41);
    
    
    if (a > 2 && a <=5)
    {
        text(book[a].title, 121*h + 12, 158);
        h++;
    }
    
    if (a > 5 && a <= 8)
    {
        
        text(book[a].title, 122*j + 14, 278);
        j++;
    }
    
}

 var m = 0;
 var n = 0;
for( var p = 0; p < book.length; p++)
{
    text(book[p].author, 122*p + 15, 55);
    
    if (p >= 3)
    {
        text(book[p].author, 122*m + 12, 169);
        m++;
    }
    
    if (p >= 6)
    {
        
        text(book[p].author, 122*n + 14, 289);
        n++;
    }
    
}

var t = 0;
var g = 0;
for(var c = 0; c< book.length; c++)
{
    for (var i = 0; i < book[c].stars ; i++) 
    {
       image(getImage("cute/Star"), 21*i+ 121*c+10, 90, 19, 28);
       
       if (c >2 && c<=5)
       {
           image(getImage("cute/Star"), 21*i+ 121*t+10, 210, 19, 28);
       }
       
       else if ( c >5 && c<=8)
       {
           image(getImage("cute/Star"), 21*i+ 121*g+10, 330, 19, 28);
       }
           
    }
    
}
