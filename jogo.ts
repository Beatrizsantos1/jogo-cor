function jogar () {
    const cores : Array<string> = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
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
"White","WhiteSmoke","Yellow","YellowGreen"];

var corAleatoria : Array <string> = [];
var corSorteada = null;
var usuario = null  ;
var vidas : number = 5;


for (let i = 0; i < 10 ; i++) {
    corAleatoria.push(cores[Math.floor(Math.random() * cores.length) +1].toLowerCase())
    corAleatoria.sort()
    corSorteada = corAleatoria[Math.floor((Math.random() * corAleatoria.length) + 1)]
}

do{
    usuario = prompt ("Eu estou pensando em uma dessas cores: \n" + corAleatoria.join(', ') + "\nEm qual delas eu estou pensando?\n" + `Voc?? tem ${vidas} vidas restantes`)?.toUpperCase()
    //usuario = usuario.toUpperCase();

    if(usuario!=corSorteada){
        verificar(corSorteada,usuario,vidas)
        alert('ERROU,TENTE NOVAMENTE!!')
        vidas--
    }

    else if(usuario==corSorteada){
        document.body.style.backgroundColor=usuario
        alert('PARABENS,ACERTOU!!!')
        vidas=0
    }
}while(vidas!=0);

function verificar(corSorteada: string | null,usuario: string | undefined , vidas: number) {
    if(usuario == " "){
       alert('CAMPO EM BRANCO!!!')
   }
}

}






