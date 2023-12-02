import axiosInstance from "../config/axios"

const search = async (query={name: null, email: null, phone: null}, page=1) => {
    try {
        const response = await axiosInstance.get("/contacts", {
            params: {
                name: query.name ? query.name : null,
                email: query.email ? query.email : null,
                phone: query.phone ? query.phone : null,
                page
            }
        })

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

const create = async (data) => {
    try {
        const response = await axiosInstance.post("/contacts", data)

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

const remove = async (id) => {
    try {
        const response = await axiosInstance.delete(`/contacts/${id}`)

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
    search,
    create,
    remove
}