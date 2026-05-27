import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack
} from "@mui/material";

function AuditTimeline({
  logs,
}) {

  const getActionColor =
    (action) => {

      switch (action) {

        case "APPROVED":
          return "success";

        case "REJECTED":
          return "error";

        case "UPDATED":
          return "warning";

        default:
          return "primary";
      }
    };

  const getActionIcon =
    (action) => {

      switch (action) {

        case "APPROVED":
          return "✅";

        case "REJECTED":
          return "❌";

        case "UPDATED":
          return "📝";

        default:
          return "📌";
      }
    };

  return (

    <div>

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
          color: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >
        <h1>
          📜 ESG Audit Timeline
        </h1>

        <p>
          Complete audit history
          of all ESG activities,
          approvals and rejections.
        </p>
      </div>

      {logs.length > 0 ? (

        logs.map((log) => (

          <Card
            key={log.id}
            sx={{
              mb: 3,
              borderRadius: 4,
              boxShadow: 4,
              transition: "0.3s",

              "&:hover": {
                transform:
                  "translateY(-4px)"
              }
            }}
          >

            <CardContent>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {
                    getActionIcon(
                      log.action
                    )
                  }

                  {" "}

                  {log.action}
                </Typography>

                <Chip
                  label={
                    log.action
                  }
                  color={
                    getActionColor(
                      log.action
                    )
                  }
                />

              </Stack>

              <Typography>
                👤
                {" "}
                <strong>
                  Performed By:
                </strong>
                {" "}
                {
                  log.performed_by
                }
              </Typography>

              <Typography
                sx={{
                  mt: 1
                }}
              >
                🕒
                {" "}
                <strong>
                  Timestamp:
                </strong>
                {" "}
                {
                  new Date(
                    log.created_at
                  ).toLocaleString()
                }
              </Typography>

            </CardContent>

          </Card>

        ))

      ) : (

        <Card
          sx={{
            borderRadius: 4
          }}
        >

          <CardContent>

            <Typography
              align="center"
              variant="h6"
            >
              No Audit Logs Found
            </Typography>

          </CardContent>

        </Card>

      )}

    </div>
  );
}

export default AuditTimeline;