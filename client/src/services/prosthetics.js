import * as baseService from "./base";

function all() {
  return baseService.get("/api/prosthetics");
}

function one(id) {
  return baseService.get(`/api/prosthetic/${id}`);
}

function insert(data) {
  return baseService.post("/api/prosthetics", data);
}

function update(id, data) {
  return baseService.put(`/api/prosthetic/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/prosthetic/${id}`);
}

export { all, one, insert, update, destroy };
