const fetchResources = () => {
    return fetch('https://code-book-be-git-main-apete12.vercel.app/api/v1/resources')
    
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

const postResource = (newResource) => {
    return fetch('https://code-book-be-git-main-apete12.vercel.app/api/v1/resources', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newResource)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            console.log(response)
            throw new Error('Unable to add new pet to server.')
        }
    })
}

const fetchResourceById = (id) => {
    return fetch(`https://code-book-be-git-main-apete12.vercel.app/api/v1/resources/${id}`)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

export { fetchResources, postResource, fetchResourceById }