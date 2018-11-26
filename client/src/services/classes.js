import * as baseService from './base';

function all() {
    return baseService.get('/api/classes');
}

function one(id) {
    return baseService.get(`/api/classes/${id}`);
}

function insert(data) {
    return baseService.post('/api/classes', data);
}

function update(id, data) {
    return baseService.put(`/api/classes/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/classes/${id}`);
}

export { all, one, insert, update, destroy };