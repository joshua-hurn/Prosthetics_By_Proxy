import * as baseService from './base';

function all() {
    return baseService.get('/api/brands');
}

function one(id) {
    return baseService.get(`/api/brands/${id}`);
}

function insert(data) {
    return baseService.post('/api/brands', data);
}

function update(id, data) {
    return baseService.put(`/api/brands/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/brands/${id}`);
}

export { all, one, insert, update, destroy };