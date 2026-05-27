import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
  Stack
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

import {
  getReviews,
  approveReview,
  rejectReview,
} from "../api/reviewApi";

function ReviewQueue() {

  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {

    try {

      const data =
        await getReviews();

      setReviews(data);

    } catch (error) {

      console.error(error);
    }
  };

  const handleApprove = async (
    id
  ) => {

    await approveReview(
      id,
      "Analyst",
      "Approved"
    );

    loadReviews();
  };

  const handleReject = async (
    id
  ) => {

    await rejectReview(
      id,
      "Analyst",
      "Rejected"
    );

    loadReviews();
  };

  const getStatusColor = (
    status
  ) => {

    if (status === "APPROVED")
      return "success";

    if (status === "REJECTED")
      return "error";

    return "warning";
  };

  const getScopeColor = (
    scope
  ) => {

    if (scope === "SCOPE1")
      return "#ea580c";

    if (scope === "SCOPE2")
      return "#ca8a04";

    return "#16a34a";
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
          marginBottom: "30px"
        }}
      >
        <h1>
          📝 ESG Review Queue
        </h1>

        <p>
          Review, approve or reject
          ESG activities detected
          from uploaded datasets.
        </p>
      </div>

      <Grid
        container
        spacing={3}
      >

        {reviews.length > 0 ? (

          reviews.map(
            (review) => (

              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={review.id}
              >

                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 5,
                    transition: "0.3s",

                    "&:hover": {
                      transform:
                        "translateY(-5px)"
                    }
                  }}
                >

                  <CardContent>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={2}
                    >

                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        {
                          review.activity_type
                        }
                      </Typography>

                      <Chip
                        label={
                          review.status
                        }
                        color={
                          getStatusColor(
                            review.status
                          )
                        }
                      />

                    </Stack>

                    <Typography>
                      <strong>
                        Activity ID:
                      </strong>
                      {" "}
                      {
                        review.activity_id
                      }
                    </Typography>

                    <Typography>
                      <strong>
                        Quantity:
                      </strong>
                      {" "}
                      {
                        review.quantity
                      }
                      {" "}
                      {
                        review.unit
                      }
                    </Typography>

                    <Typography>
                      <strong>
                        Scope:
                      </strong>
                      {" "}
                      <span
                        style={{
                          color:
                            getScopeColor(
                              review.scope
                            ),
                          fontWeight:
                            "bold"
                        }}
                      >
                        {
                          review.scope
                        }
                      </span>
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1
                      }}
                    >
                      <strong>
                        Risk:
                      </strong>
                      {" "}

                      {
                        review.is_suspicious
                          ? "🔴 High Risk"
                          : "🟢 Safe"
                      }
                    </Typography>

                    {
                      review.suspicious_reason &&
                      (
                        <Typography
                          sx={{
                            mt: 1,
                            color:
                              "#dc2626"
                          }}
                        >
                          {
                            review.suspicious_reason
                          }
                        </Typography>
                      )
                    }

                    <Stack
                      direction="row"
                      spacing={2}
                      mt={3}
                    >

                      <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        onClick={() =>
                          handleApprove(
                            review.id
                          )
                        }
                      >
                        Approve
                      </Button>

                      <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        onClick={() =>
                          handleReject(
                            review.id
                          )
                        }
                      >
                        Reject
                      </Button>

                    </Stack>

                  </CardContent>

                </Card>

              </Grid>
            )
          )

        ) : (

          <Typography>
            No reviews found
          </Typography>

        )}

      </Grid>

    </MainLayout>

  );
}

export default ReviewQueue;