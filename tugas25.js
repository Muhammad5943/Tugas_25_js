function ascdesc() {
    var x = [2,39,76,50,9,7,41,2,24,1,16];

    console.log("Sebelumnya : " + x);

    y = x.sort(function(a, b){return a-b});
    y1 = y.splice(3,3);
    y[1] = [16, 2]; 
    y[7] = [7, 76, 9];
    console.log("Ascending  : " + y);
    
    z = x.sort(function(a, b){return b-a});
    z1 = z.splice(1,1);
    z2 = x.splice(6,1);
    z3 = x.splice(0,1)    
    z4 = z2.splice(0,3);

    z4[0] = [9,76,7];
         
    console.log("Descending : " + z4 + "," + z + "," + z1 + "," + z3);
    

}

ascdesc();
