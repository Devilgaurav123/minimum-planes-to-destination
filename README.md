# Minimum Planes to Destination

## 🚀 Problem Statement

You are given **N** airports in the world, each having a plane with a limited amount of fuel.  
- You start at **airport 1** and need to reach the **last airport (N)** by hiring the **minimum number of planes**.  
- 1 unit of fuel allows traveling to the **next airport**.  
- If it's **not possible** to reach the last airport, return `-1`.


---

## 📝 Approach & Algorithm

### **1️⃣ Understanding the Problem**
- You start at the **first airport**.
- Each airport provides a **plane with fuel** to reach upcoming airports.
- Your goal is to **reach the last airport using the least planes possible**.

### **2️⃣ Algorithm**
1. **Initialize variables:**
   - `planes = 0` → Number of planes hired.
   - `maxReach = 0` → Tracks the farthest airport index reachable.
   - `currentEnd = 0` → Marks the last airport that can be reached with the current plane.

2. **Loop through the airports (except the last one):**
   - Update `maxReach = max(maxReach, i + fuel[i])` to check how far we can go.
   - If `i` reaches `currentEnd`, hire a new plane (`planes++`).
   - If `maxReach` **never exceeds the current index**, return `-1`.

3. **Return the number of planes hired.**

### **3️⃣ Complexity Analysis**
- **Time Complexity:** `O(N)` (Linear traversal)  
- **Space Complexity:** `O(1)` (No extra space used)  

---

## 💻 Code Implementation

```javascript
function minPlanesToReachDestination(fuel) {
    let n = fuel.length;
    if (n <= 1) return 0;

    let planes = 0, maxReach = 0, currentEnd = 0;

    for (let i = 0; i < n - 1; i++) {
        maxReach = Math.max(maxReach, i + fuel[i]);

        if (i === currentEnd) {
            planes++;
            currentEnd = maxReach;
            if (currentEnd >= n - 1) return planes;
        }
        
        if (i >= maxReach) return -1;
    }
    return -1;
}

// Example Usage:
console.log(minPlanesToReachDestination([2,1,2,3,1])); // Output: 2
console.log(minPlanesToReachDestination([1,6,3,4,5,0,0,0,6])); // Output: 3
 
