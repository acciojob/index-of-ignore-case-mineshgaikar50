function indexOfIgnoreCase(s1, s2) {
   if (subStr === "") return 0;

    // Convert both strings to lowercase for case-insensitive comparison.
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence of the lowerSubStr in lowerStr.
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
