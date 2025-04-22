export const handleError = (error) => {
  console.error("Error:", error);
  const errorMessage = document.createElement("div");
  errorMessage.textContent = "Ocorreu um erro. Por favor, tente novamente mais tarde.";
  errorMessage.style.color = "red";
  document.body.appendChild(errorMessage);
}

export const filterByMediaType = (list, options = {}) => {
  const { exclude = [], include = [] } = options;

  return list.filter((item) => {
    const type = item.media_type;
    if (exclude.length && exclude.includes(type)) return false;
    if (include.length && !include.includes(type)) return false;
    return true;
  });
};

export const filterByMediaGenrer = (list, options = {}) => {
  const { exclude = [], include = [] } = options;

  return list.filter((item) => {
    const type = item.genre_ids;
    if (exclude.length && exclude.includes(parseInt(type))) return false;
    if (include.length && !include.includes(parseInt(type))) return false;
    return true;
  });
};

export const links = (mediaIdentifier) => {
  switch (mediaIdentifier) {
    case "/68MNrwlkpF7WnmNPXLah69CR5cb.jpg":
      return "https://www.primevideo.com/";
    case "/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg":
      return "https://www.primevideo.com/";
    case "/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg":
      return "https://www.apple.com/br/tv/";
    case "/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg":
      return "https://www.clarovideo.com/brasil/homeuser";
    case "/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg":
      return "https://www.clarovideo.com/brasil/homeuser";
    case "/6Ms2t7smUWvpjlxK2deOVj2jJBK.jpg":
      return "https://www.foxplay.com/pt-br/";
    case "/3zw07sM5b9FWcB1QXXt3uLpjn9r.jpg":
      return "https://www.hbobrasil.com/";
    case "/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg":
      return "https://www.hbobrasil.com/";
    case "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg":
      return "https://www.netflix.com/br/";
    case "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg":
      return "https://www.netflix.com/br/";
    case "/dNAz0MMIPiqCD2axGIktXSFWmkz.jpg":
      return "https://www.nowonline.com.br/";
    case "/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg":
      return "https://www.telecineplay.com.br/";
    case "/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg":
      return "https://www.disneyplus.com/pt-br";
    case "/3JXBhduFj3Q3YSqTSNmOdgzNf1I.jpg":
      return "https://globoplay.globo.com/";
    case "/2slPVV21kaPDx0NwjVtcUjdvzXz.jpg":
      return "https://www.hbogo.com.br/landing/";
    case "/rqRXc3mKVY3sMAwRRUs3JzDFioZ.jpg":
      return "https://oldflix.com.br/";
    case "/nfk2tkkLraMCiydOk6E1X0xcC9L.jpg":
      return "https://www.netmovies.com.br/home";
    case "/nfk2tkkLraMCiydOk6E1X0xcC9L.jpg":
      return "https://www.netmovies.com.br/home";
    case "/jkBsuKubyoStcP1whxrbxzDMnMD.jpg":
      return "https://www.looke.com.br/home";
    case "/nPxb6ngTqUh2kWna9AdZnJSguqh.jpg":
      return "https://www.believe.online";
    case "/1DrvupddifE9OamiBZkiZSyvXud.jpg":
      return "https://www.belasartesalacarte.com.br/";
    case "/kXQQbZ6ZvTwojzMPivQF9sX0V4y.jpg":
      return "https://mubi.com/";
    case "/svuDhaczCCsSw1zbXf2Sjpuu1Hk.jpg":
      return "https://www.foxplay.com/pt-br/";
    case "/wtMZ29KzZ3xrnP32UCH8z2EzMqu.jpg":
      return "https://www.foxplay.com/pt-br/";
    default:
      console.log("operador não identificado!");
  }
};
