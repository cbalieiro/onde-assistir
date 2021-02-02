export const filterMethod = (array, operator, arg) => { //console.log(array);
  switch (operator) {
    case '==':
        return array.filter(type => type.media_type == arg)
    case '!==':
        return array.filter(type => type.media_type !== arg)
    default:
        console.log('operador não identificado!');
    }
}

export const filterGenrer= (array, operator, arg) => { 
    switch (operator) {
      case '==':
          return array.filter(type => {
            console.log(type);  
            return type.genre_ids.includes(arg)});
      case '!==':
          return array.filter(type => !type.genrers_id.includes(arg))
      default:
          console.log('operador não identificado!');
      }
  }
