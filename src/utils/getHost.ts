export default function getHost() {
    if (process.env.REACT_APP_HERMIT_HOST) {
        console.log(3);
        return process.env.REACT_APP_HERMIT_HOST;
    }

    if (window.location.hostname === 'localhost') {
        console.log(8);
        return 'https://hermit-server-staging.herokuapp.com';
    }

    if (window.location.hostname === '127.0.0.1') {
        console.log(13);
        return 'https://hermit-server-staging.herokuapp.com';
    }

    let host = window.location.hostname.includes('staging') ?
        'https://hermit-server-staging.herokuapp.com' : 'https://hermit-server.herokuapp.com'
    return host;
}