import API from "./axios";

export const getReviews = async () => {

  const response =
    await API.get(
      "review/"
    );

  return response.data;
};

export const approveReview =
  async (
    id,
    reviewedBy,
    comments
  ) => {

    const response =
      await API.patch(
        `review/${id}/approve/`,
        {
          reviewed_by:
            reviewedBy,
          comments:
            comments,
        }
      );

    return response.data;
  };

export const rejectReview =
  async (
    id,
    reviewedBy,
    comments
  ) => {

    const response =
      await API.patch(
        `review/${id}/reject/`,
        {
          reviewed_by:
            reviewedBy,
          comments:
            comments,
        }
      );

    return response.data;
  };