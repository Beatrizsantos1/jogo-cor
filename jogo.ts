var cores  : Array < string >  =  [ "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
"Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
"CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
"Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
"DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
"DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
"DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
"FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold",
"GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink",
"IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
"LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
"LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
"LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
"LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
"Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
"MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
"MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
"Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
"OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
"PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
"PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue",
"SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
"Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
"SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat",
"White","WhiteSmoke","Yellow","YellowGreen"]

var corAleatoria : Array  < string >  = []
var corSorteada : string = null
var usuario : string = null
var vidas : number  = 5

for (let i = 0; i < 10 ; i++) {
    corAleatoria.push(cores[Math.floor(Math.random() * cores.length) +1].toLowerCase())
    corAleatoria.sort()
    corSorteada = corAleatoria[Math.floor((Math.random() * corAleatoria.length) + 1)]
}

do{
    usuario = prompt(`ESCOLHA UMA DAS CORES ABAIXO:\n\n${corAleatoria.toString()}\n\n\nVidas Restantes: ${vidas}`).toLowerCase()

     if (usuario != corSorteada) { 
        verificar(corSorteada, usuario, vidas)
        alert('ERROU, TENTE NOVAMENTE!!')
        vidas--
}
    
    else if (usuario == corSorteada){
        document.body.style.backgroundColor = usuario
        alert('ACERTOU!!')
        vidas = 0
    }

     
   
}while (vidas != 0);

function verificar(_string,string,number):void { 
    
    if (usuario == ""){
        alert('CAMPO EM BRANCO!!')
   
}

    }
}
