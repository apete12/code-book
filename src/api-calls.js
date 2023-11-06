const fetchPets = () => {
    return fetch('https://code-book-be-git-main-apete12.vercel.app/api/v1/resources')
    
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

const postPet = (newPet) => {
    return fetch('https://code-book-be-git-main-apete12.vercel.app/api/v1/resources', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPet)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to add new pet to server.')
        }
    })
}

const fetchPetsById = (id) => {
    return fetch(`https://code-book-be-git-main-apete12.vercel.app/api/v1/resources/${id}`)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

export { fetchPets, postPet, fetchPetsById }