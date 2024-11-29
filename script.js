function indexOfIgnoreCase(s1, s2) {
   if (s2 === "") return 0; // Handle empty substring case
    if (!s1 || !s2) return -1; // Handle null or undefined inputs
    const lowerStr = s1.toLowerCase();
    const lowerSubStr = s2.toLowerCase();
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
