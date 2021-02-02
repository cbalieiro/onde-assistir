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

export const links = (arg) => {
    switch (arg) {

        case "/68MNrwlkpF7WnmNPXLah69CR5cb.jpg":
            return "https://www.primevideo.com/"
        case "/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg":
            return "https://www.primevideo.com/"
        case "/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg":
            return "https://www.apple.com/br/tv/"
        case "/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg":
            return "https://www.clarovideo.com/brasil/homeuser"
        case "/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg":
            return "https://www.clarovideo.com/brasil/homeuser"
        case "/6Ms2t7smUWvpjlxK2deOVj2jJBK.jpg":
            return "https://www.foxplay.com/pt-br/"
        case "/3zw07sM5b9FWcB1QXXt3uLpjn9r.jpg":
            return "https://www.hbobrasil.com/"
        case "/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg":
            return "https://www.hbobrasil.com/"
        case "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg":
            return "https://www.netflix.com/br/"
        case "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg":
            return "https://www.netflix.com/br/"
        case "/dNAz0MMIPiqCD2axGIktXSFWmkz.jpg":
            return "https://www.nowonline.com.br/"
        case "/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg":
            return "https://www.telecineplay.com.br/"
        case "/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg":
            return "https://www.disneyplus.com/pt-br"
        case "/3JXBhduFj3Q3YSqTSNmOdgzNf1I.jpg":
            return "https://globoplay.globo.com/"
        case "/2slPVV21kaPDx0NwjVtcUjdvzXz.jpg":
            return "https://www.hbogo.com.br/landing/"
        default:
            console.log('operador não identificado!');
    }
}




