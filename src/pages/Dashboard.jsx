import { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "../layouts/MainLayout";
import DashboardCards from "../components/DashboardCards";

import {
  getActivities
} from "../api/activityApi";

function Dashboard() {

  const [stats, setStats] = useState({
    total_records: 0,
    suspicious_records: 0,
    scope1_records: 0,
    scope2_records: 0,
    scope3_records: 0,
  });

  const [activities, setActivities] =
    useState([]);

  const [filtered, setFiltered] =
    useState([]);

  useEffect(() => {

    fetchStats();
    loadActivities();

  }, []);

  useEffect(() => {

    setFiltered(
      activities
    );

  }, [activities]);

  const fetchStats = async () => {

    try {

      const response =
        await axios.get(
          "https://breathe-esg-platform-1-we6n.onrender.com/api/activities/dashboard/stats/"
        );

      setStats(
        response.data
      );

    } catch (error) {

      console.error(error);
    }
  };

  const loadActivities = async () => {

    try {

      const data =
        await getActivities();

      console.log(
        "Activities Loaded:",
        data
      );

      setActivities(data);

    } catch (error) {

      console.error(
        "Activity Error:",
        error
      );
    }
  };

  const handleCardClick =
    (filterType) => {

      if (filterType === "ALL") {

        setFiltered(
          activities
        );

        return;
      }

      if (
        filterType === "SUSPICIOUS"
      ) {

        setFiltered(
          activities.filter(
            (item) =>
              item.is_suspicious
          )
        );

        return;
      }

      setFiltered(
        activities.filter(
          (item) =>
            item.scope ===
            filterType
        )
      );
    };

  return (

    <MainLayout>

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
          color: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1>
          📊 ESG Analytics Dashboard
        </h1>

        <p>
          Monitor ESG activities,
          reviews, uploads and audits.
        </p>
      </div>

      <DashboardCards
        stats={stats}
        onCardClick={
          handleCardClick
        }
      />

      <div
        style={{
          marginTop: "40px",
        }}
      >

        <h2>
          Activity Records
        </h2>

        <p>
          Total Displayed:
          {" "}
          {filtered.length}
        </p>

        <table
          border="1"
          cellPadding="10"
          width="100%"
          style={{
            borderCollapse:
              "collapse",
            background:
              "white",
          }}
        >

          <thead
            style={{
              background:
                "#1e293b",
              color:
                "white",
            }}
          >
            <tr>
              <th>ID</th>
              <th>Activity Type</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Scope</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filtered.length > 0 ? (

              filtered.map(
                (activity) => (

                  <tr
                    key={
                      activity.id
                    }
                  >

                    <td>
                      {activity.id}
                    </td>

                    <td>
                      {
                        activity.activity_type
                      }
                    </td>

                    <td>
                      {
                        activity.quantity
                      }
                    </td>

                    <td>
                      {
                        activity.unit
                      }
                    </td>

                    <td>
                      {
                        activity.scope
                      }
                    </td>

                    <td>

                      {
                        activity.is_suspicious
                          ? "⚠️ Suspicious"
                          : "✅ Safe"
                      }

                    </td>

                  </tr>

                )
              )

            ) : (

              <tr>

                <td
                  colSpan="6"
                  style={{
                    textAlign:
                      "center",
                    padding:
                      "20px",
                  }}
                >
                  No Records Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
}

export default Dashboard;