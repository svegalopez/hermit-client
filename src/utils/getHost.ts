export default function getHost() {
    if (process.env.REACT_APP_HERMIT_HOST) {
        return process.env.REACT_APP_HERMIT_HOST;
    }

    if (window.location.hostname === 'localhost') {
        return 'https://hermit-server-staging.herokuapp.com';
    }

    if (window.location.hostname === '127.0.0.1') {
        return 'https://hermit-server-staging.herokuapp.com';
    }

    if (window.location.hostname.includes('hermit.cloud')) {
        console.log('using custom domain');
        return 'https://server.hermit.cloud';
    }

    let host = window.location.hostname.includes('staging') ?
        'https://hermit-server-staging.herokuapp.com' : 'https://hermit-server.herokuapp.com'
    return host;
}