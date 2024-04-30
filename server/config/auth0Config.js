import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://dev-ahv5e8w0q41x0xgm.us.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-ahv5e8w0q41x0xgm.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck