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

    if (window.location.hostname.includes('staging.hermit.cloud')) {
        console.log('using custom domain in staging');
        return 'https://server-staging.hermit.cloud';
    }

    if (window.location.hostname.includes('hermit.cloud')) {
        console.log('using custom domain in prod');
        return 'https://server.hermit.cloud';
    }
}