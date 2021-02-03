export const searchAPI = async arg => {
  try { 
    const response = await fetch(arg);
    const data = await response.json();
    return data;
  } catch (err) {
      console.log(err);
  }
}
 
