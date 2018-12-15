module.exports = {
    backendURL: process.env.REACT_APP_NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'liveurl'
}