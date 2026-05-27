import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";

import AuditTimeline from "../components/AuditTimeline";

import {
  getAuditLogs,
} from "../api/auditApi";

function AuditLogs() {
  const [logs, setLogs] =
    useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      const data =
        await getAuditLogs();

      setLogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <h2>
        Audit Logs
      </h2>

      <AuditTimeline
        logs={logs}
      />
    </MainLayout>
  );
}

export default AuditLogs;