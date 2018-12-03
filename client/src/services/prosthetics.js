import * as baseService from './base';

function all() {
    return baseService.get('/api/prosthestics');
}

function one(id) {
    return baseService.get(`/api/prosthestics/${id}`);
}

function insert(data) {
    return baseService.post('/api/prosthestics', data);
}

function update(id, data) {
    return baseService.put(`/api/prosthestics/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/prosthestics/${id}`);
}

export { all, one, insert, update, destroy };