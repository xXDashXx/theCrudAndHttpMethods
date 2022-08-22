const arr=[10, 5, 2, 3, 7, 5]
let arr2=[]
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j>0; j--) {
        if ((arr[i]+arr[j])==10) {
            arr2.push(arr[i],arr[j])
            console.log(arr2)
        }   
    }
    
}