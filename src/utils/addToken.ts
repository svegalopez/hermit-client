export const addToken = (token: () => string) => {
    return {
        context: {
            headers: {
                Authorization: token(),
            },
        },
    }
}