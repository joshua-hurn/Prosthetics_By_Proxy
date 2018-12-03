import * as baseService from './base';

function all() {
    return baseService.get('/api/categories');
}

function one(id) {
    return baseService.get(`/api/categories/${id}`);
}

function insert(data) {
    return baseService.post('/api/categories', data);
}

function update(id, data) {
    return baseService.put(`/api/categories/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/categories/${id}`);
}

export { all, one, insert, update, destroy };