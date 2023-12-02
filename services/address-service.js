import axiosInstance from "../config/axios"

const getAll = async (contactId) => {
    try {
        const response = await axiosInstance.get(`/contacts/${contactId}/addresses`)

        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: error.response.data
        }
    }
}

const create = async (contactId, data) => {
    try {
        const response = await axiosInstance.post(`/contacts/${contactId}/addresses`, data)

        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: error.response.data
        }
    }
}

const remove = async (contactId, addressId) => {
    try {
        const response = await axiosInstance.delete(`/contacts/${contactId}/addresses/${addressId}`)

        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: error.response.data
        }
    }
}

export default {
    create,
    getAll,
    remove
}