export default function request(url, option) {
    const options = {
        ...option
    };
    const defaultOptions = {
        credentials: 'include',
    };
    const newOptions = { ...defaultOptions, ...options };

    return (
        fetch(url, newOptions)
        .then(response => {
            if (newOptions.method === 'DELETE' || response.status === 204) {
                return response.text();
            }
            return response.json();
        })
        .catch(e => {
            console.log(e);
        })
    );
}