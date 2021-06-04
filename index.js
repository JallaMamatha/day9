function callfun1()
{
    var a=[10,20,30,40,50,60];
    a.splice(2,0,55,88);
    document.write(a);
document.write("<br><br>");

    var b=[10,20,30,40,50,60];
    b.splice(2,0,55,88);
    document.write(b);
    document.write("<br><br>");
      
    var x=[11,22,33,44,55,66,77];
    document.write("x = " + x + "<br>");
    document.write("x.slice(4) =" + x.slice(4));
    document.write("<br>");
    document.write("x.slice(2,5) =" + x.slice(2,5));
    document.write("<br>");
    document.write("x.slice(-4) =" + x.slice(-4));
    document.write("<br>");
    document.write("x.slice(-1,-4) =" + x.slice(-1,-4));
    document.write("<br>");
    document.write("x.slice(-4,-1) =" + x.slice(-4,-1));
    document.write("<br>");
    document.write("x.slice(1,-2) =" + x.slice(1,-2));
    document.write("<br>");
    document.write("x.slice(4,-5) =" + x.slice(4,-5));
    document.write("<br>");
     
    a=[22,3,44,6,7];
    a.sort(function(a,b){return a-b})
     document.write(a);
     document.write("<br>");
     a=[22,3,44,6,7];
    a.sort(function(a,b){return b-a})
     document.write(a);
}
