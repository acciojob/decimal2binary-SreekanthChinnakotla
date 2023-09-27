function decimalToBinary(num) {
  // Check if the input number is 0
  if (num === 0) {
    return '0';
  }

  let binary = '';
  
  while (num > 0) {
    // Get the remainder when dividing by 2 (0 or 1)
    const remainder = num % 2;
    
    // Prepend the remainder to the binary string
    binary = remainder + binary;
    
    // Integer division by 2
    num = Math.floor(num / 2);
  }

  return binary;
}

// Export the function
window.decimalToBinary = decimalToBinary;
