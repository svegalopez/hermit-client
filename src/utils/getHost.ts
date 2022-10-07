export default function getHost() {

    if (window.location.host.includes('localhost:')) {
        // Hermit server is served at 4000 on local dev environments
        return 'http://localhost:4000';
    }


    let host = window.location.hostname.includes('staging') ?
        'https://hermit-server-staging.herokuapp.com' : 'https://hermit-server.herokuapp.com'
    return host;
}