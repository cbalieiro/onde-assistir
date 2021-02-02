export const filterMethod = (array, operator, arg) => { 
  switch (operator) {
    case '==':
        return array.filter(type => type.media_type == arg)
    case '!==':
        return array.filter(type => type.media_type !== arg)
    default:
        console.log('operador não identificado!');
}
}
