
function minPlanesRequired(fuelArray) {
    let n = fuelArray.length;
    if (n === 1) return 0; 
    
    let planes = 0; 
    let maxReach = 0; 
    let currentEnd = 0; 
    
    for (let i = 0; i < n - 1; i++) {
        maxReach = Math.max(maxReach, i + fuelArray[i]);
        
        
        if (i === currentEnd) {
            if (maxReach <= i) return -1; 
            planes++;
            currentEnd = maxReach;
        }
    }
    return planes;
}
console.log(minPlanesRequired([2,1,2,3,1])); 
console.log(minPlanesRequired([1,6,3,4,5,0,0,0,6])); 
console.log(minPlanesRequired([1,1,1,1,1])); 
console.log(minPlanesRequired([3,2,1,0,4])); 
