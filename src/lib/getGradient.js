const getGradient = (colors) => {
    const words = colors.split(" ").filter((_, index) => index !== 1);
    let result = [];
  
    for (const element of words) {
      if (isColor(element)) {
        result.push(element.toLowerCase() + "-500");
        if (result.length === 2) break;
      }
    }
  
    return result.length === 2 ? result : ['white', 'black'];
  }
  
  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  }
  
  export default getGradient;