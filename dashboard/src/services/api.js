import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Transaction APIs
export const transactionAPI = {
    getAll: () => api.get('/transactions'),
    create: (data) => api.post('/transactions', data),
    update: (id, data) => api.put(`/transactions/${id}`, data),
    delete: (id) => api.delete(`/transactions/${id}`)
}

// Budget APIs
export const budgetAPI = {
    getAll: () => api.get('/budgets'),
    create: (data) => api.post('/budgets', data),
    update: (id, data) => api.put(`/budgets/${id}`, data),
    delete: (id) => api.delete(`/budgets/${id}`)
}

// Report APIs
export const reportAPI = {
    getAll: () => api.get('/reports'),
    generate: (data) => api.post('/reports', data),
    getById: (id) => api.get(`/reports/${id}`)
}

// Dashboard APIs
export const dashboardAPI = {
    getStats: () => api.get('/dashboard/stats'),
    getOverview: () => api.get('/dashboard/overview')
}

export default api
