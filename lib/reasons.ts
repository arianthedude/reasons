import { api } from "./axios";

export const getReasons = async () => {
  const res = await api.get("/reasons");
  return res.data;
};

export const getReason = async (id: number) => {
  const res = await api.get(`/reasons/${id}`);
  return res.data;
};

export const createReason = async (data: any) => {
  const res = await api.post("/reasons", data);
  return res.data;
};

export const updateReason = async (id: number, data: any) => {
  const res = await api.put(`/reasons/${id}`, data);
  return res.data;
};

export const deleteReason = async (id: number) => {
  const res = await api.delete(`/reasons/${id}`);
  return res.data;
};