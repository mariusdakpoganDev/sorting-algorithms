import { book } from "../interfaces/book";

export const fusionSort = (data:book[]): book[] =>{
 //Inputs : sequence s of comparable elements, books in this case
  //Outputs: sorted sequence s
    const fusion =(x:book[],y:book[])=>{ //fuse 2 sorted sequences
     let i = 0;
     let j =0;
     const z: book[] = [];
     while(i< x.length && j< y.length){
        console.log(y[0].price)
        if(x[i].price <= y[j].price){
            z.push(x[i]);
            i++;
        
        }
        else{
            z.push(y[j]);
            j++
        }
     }
      return z.concat(x.slice(i)).concat(y.slice(j));
    }

    if(data.length<= 1){
        return data;
    }
    else{
       const m = Math.floor(data.length / 2);
    const left = fusionSort(data.slice(0, m));
    const right = fusionSort(data.slice(m));
    return fusion(left, right);
    }
}