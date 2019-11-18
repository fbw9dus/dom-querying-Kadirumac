function myFunction(x) {
    if (x.matches) { // If media query matches
        var style = document.createElement('style');
        style.innerHTML = `
        
        h1{
            text-align: center;
        }
        section{
            width:100%;
            margin: auto;
            display : inline;
            padding: 50px;
        }
        
        h2{
            text-decoration-line: underline;
        }
        
        .menu {
        
        display:block;
        padding:20px;
        font-size:20px;
        height:200px;
        width:300px;
        background:#e5c4af;
        margin : 20px 30px;
        
        }
        .submenu{
            width:100%;
            margin: auto 230px;
            display : inline;
            padding: 50px;
        
        
        }
        .circle{
            display: block;
            width:120px;
            height:120px;
            border: 4px solid #fead00;
            border-radius: 60px;
            text-align:center;
            font-size:20px;
            font-weight:bold;
            margin:40px;
        }
        
        .circle>h3{
            margin-top:40px;
        }
        .menu>h2{
            font-style:italic;
        }
        .menu>ul{
            width: 300px;
        }
        .list{
            width: 300px;
            margin-left:30%;
        
        }
        .a{
            list-style-type: none;
            line-height:15px;
            background:#fff;
        }
        .b{
            list-style-type: none;
            line-height:15px;
            background:#87c8ee;
        }
        `;
        document.head.appendChild(style);
    } else {
        var style = document.createElement('style');
        style.innerHTML = `
        
        h1{
            text-align: center;
        }
        section{
            width:100%;
            margin: auto;
            display : inline;
            padding: 50px;
        }
        
        h2{
            text-decoration-line: underline;
        }
        
        .menu {
        
        display:inline-block;
        padding:20px;
        font-size:20px;
        height:200px;
        width:300px;
        background:#e5c4af;
        margin : 20px 30px;
        
        }
        .submenu{
            width:100%;
            margin: auto 230px;
            display : inline;
            padding: 50px;
        
        
        }
        .circle{
            display:  inline-block;
            width:120px;
            height:120px;
            border: 4px solid #fead00;
            border-radius: 60px;
            text-align:center;
            font-size:20px;
            font-weight:bold;
            margin:40px;
        }
        
        .circle>h3{
            margin-top:40px;
        }
        .menu>h2{
            font-style:italic;
        }
        .menu>ul{
            width: 300px;
        }
        .list{
            width: 300px;
            margin-left:30%;
        
        }
        .a{
            list-style-type: none;
            line-height:15px;
            background:#fff;
        }
        .b{
            list-style-type: none;
            line-height:15px;
            background:#87c8ee;
        }
        `;
        document.head.appendChild(style);
    }
  }
  
  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

document.querySelector('h1').style.fontSize = '35px';


var style = document.createElement('style');
style.innerHTML = `

h1{
    text-align: center;
}
section{
    width:100%;
    margin: auto;
    display : inline;
    padding: 50px;
}

h2{
    text-decoration-line: underline;
}

.menu {

display:inline-block;
padding:20px;
font-size:20px;
height:200px;
width:300px;
background:#e5c4af;
margin : 20px 30px;

}
.submenu{
    width:100%;
    margin: auto 230px;
    display : inline;
    padding: 50px;


}
.circle{
    display:  inline-block;
    width:120px;
    height:120px;
    border: 4px solid #fead00;
    border-radius: 60px;
    text-align:center;
    font-size:20px;
    font-weight:bold;
    margin:40px;
}

.circle>h3{
    margin-top:40px;
}
.menu>h2{
    font-style:italic;
}
.menu>ul{
    width: 300px;
}
.list{
    width: 300px;
    margin-left:30%;

}
.a{
    list-style-type: none;
    line-height:15px;
    background:#fff;
}
.b{
    list-style-type: none;
    line-height:15px;
    background:#87c8ee;
}
`;
document.head.appendChild(style);

var styleMenu = document.createElement('style');
document.head.appendChild(styleMenu);
styleMenu.sheet.insertRule('#menu2 {background:#e8ccf1; }');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.getElementById('menu3').style.background =getRandomColor() ;





