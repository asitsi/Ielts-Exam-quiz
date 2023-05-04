export function transform(str) {
    if (str.includes(' ')) {
      return str.replace(/\//g, '').replace(/\s+/g, '-').toLowerCase()
    } else {
        return str
    //   return titleCase(str.replace(/-/g, ' ')).replace(/\b(\w+)$/g, '- $1');
    }
  }
  
export function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

export function transformURLString(str) {
  if (str.includes(' ')) {
    return str.replace(/-/g, '').replace(/\s+/g, '-').toLowerCase()
  } else {
    return titleCase(str.replace(/-/g, ' ')).replace(/\b(\w+)$/g, '- $1');
  }
}