import instance from './axios'

export const getOrganization = (id) => {
    return instance.get(`/organization/${id}`)
}

export const getAllOrganizations = () => instance.get('/organization')
export const getFile = (url) => instance.get('/getFile', url)
