import * as baseService from "./base";

function all() {
  return baseService.get("/api/prosthetics");
}

function one(id) {
  return baseService.get(`/api/prosthetics/${id}`);
}

function insert(data) {
  return baseService.post("/api/prosthetics", data);
}

function update(id, data) {
  return baseService.put(`/api/prosthetics/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/prosthetics/${id}`);
}

function ofCategory(id) {
  return baseService.get(`/api/q/prosthetics/category/${id}`);
}

export { all, one, insert, update, destroy, ofCategory };
