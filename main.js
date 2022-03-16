function dichotomie(tab,element,min,max){
    if(min>max){
        return false ;
    }
    let comp = Math.floor((min+max)/2) ;
    if(tab[comp]==element){
        return true ;
    }
    if(tab[comp]>element){
        return dichotomie(tab,element,min,comp-1)
    }
    else{
        return dichotomie(tab,element,comp+1,max)
    }
}


let tab=[1, 3, 5, 7, 8, 9]
let element = 6
console.log(dichotomie(tab,element,0,5))