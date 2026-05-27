import API from "./axios";

export const getAuditLogs =
  async () => {

    const response =
      await API.get(
        "audit/"
      );

    return response.data;
  };