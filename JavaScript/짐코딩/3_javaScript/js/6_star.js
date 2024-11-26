
/*
document.write('*');
document.wirte('<br>');
document.write('&nbsp');
document.write('<hr>');
*/

for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<hr>');

for(let i=0;i<6;i++){
    for(let j=0;j<i;j++){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<hr>');
for(let i=0;i<6;i++){
    for(let j=5;j>i;j--){
        document.write('*');
    }
    document.write('<br>');
}
document.write('<hr>');
for (let i = 0; i < 5; i++) { 
    for (let j=0;j<5-i-1;j++) {
    document.write('&nbsp;');
    }
    for (let k=0;k<=i;k++) {
    document.write('*'); 
    }
    document.write('<br>');
}
document.write('<hr>');

for(let i=0;i<5;i++){
    for(let j =0;j<i;j++){
    document.write('&nbsp;');
    }
    for(let k=5; k>i;k--){
    document.write('*');
    }
    document.write('<br>');
}



