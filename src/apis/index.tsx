export async function GetPosts(){
    return fetch('/api/posts').then((response) => response.json())
    .then(data => data)
}