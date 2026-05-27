import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

function DashboardCards({
  stats,
  onCardClick,
}) {

  const cards = [
    {
      key: "ALL",
      title: "Total Records",
      value: stats.total_records,
      color: "#2563eb",
      icon: "📊",
    },
    {
      key: "SUSPICIOUS",
      title: "Suspicious",
      value: stats.suspicious_records,
      color: "#dc2626",
      icon: "⚠️",
    },
    {
      key: "SCOPE1",
      title: "Scope 1",
      value: stats.scope1_records,
      color: "#ea580c",
      icon: "⛽",
    },
    {
      key: "SCOPE2",
      title: "Scope 2",
      value: stats.scope2_records,
      color: "#ca8a04",
      icon: "⚡",
    },
    {
      key: "SCOPE3",
      title: "Scope 3",
      value: stats.scope3_records,
      color: "#16a34a",
      icon: "✈️",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        mb: 4,
      }}
    >
      {cards.map((card) => (

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          key={card.key}
        >

          <Card
            onClick={() =>
              onCardClick &&
              onCardClick(card.key)
            }
            sx={{
              background: card.color,
              color: "white",
              borderRadius: 4,
              cursor: "pointer",
              boxShadow: 4,
              transition:
                "all 0.3s ease",

              "&:hover": {
                transform:
                  "translateY(-6px)",
                boxShadow: 8,
              },
            }}
          >

            <CardContent>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {card.icon}
                {" "}
                {card.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {card.value}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  opacity: 0.85,
                }}
              >
                Click to view
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      ))}
    </Grid>
  );
}

export default DashboardCards;