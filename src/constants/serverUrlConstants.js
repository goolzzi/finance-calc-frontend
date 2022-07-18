const serverRootUrl = process.env.serverApplicationRootUrl
// const serverRootUrl = "http://localhost:5000/"
const authRoute = serverRootUrl + 'auth/'
const dealsRoute = serverRootUrl + 'deals/'
export const signupUrl = authRoute + 'signup'
export const loginUrl = authRoute + 'login'
export const verifySignupUrl = authRoute + 'verifySignup'
export const forgotPasswordUrl = authRoute + 'forgotPassword'
export const verifyForgotPasswordUrl = authRoute + 'verifyForgotPassword'
export const googleLoginUrl = authRoute + 'googleLogin'
export const getUserDetailsUrl = authRoute + 'getUserData'
export const addDealUrl = dealsRoute + 'insert'
export const updateDealUrl = dealsRoute + 'update'
export const deleteDealUrl = dealsRoute + 'delete'
export const fetchEmailListForSearchQueryUrl = dealsRoute + '/fetchEmailListForSearchQuery'
export const shareDealUrl = dealsRoute + '/shareDeal'
export const getSingleSharedDealDataUrl = dealsRoute + '/getSingleSharedDealData'
export const getAllSharedDealsOfUserUrl = dealsRoute + '/getAllSharedDealsOfUser'