let tab = [1,3,5,7,8,9] ;
let element = 1 ;
let min = 0 ;
let max = tab.length-1 ;

function dichotomie(tab,element,min,max){
    if(min>max){
        return false ;
    }
    let comp = Math.round((min+max)/2) ;
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
console.log(dichotomie(tab,element,min,max)) ;