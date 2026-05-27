import {
  useState,
} from "react";

function ApprovalModal({
  onSubmit,
}) {

  const [comments, setComments] =
    useState("");

  return (
    <div>

      <textarea
        rows="4"
        cols="40"
        placeholder="Comments"
        value={comments}
        onChange={(e) =>
          setComments(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={() =>
          onSubmit(
            comments
          )
        }
      >
        Submit
      </button>

    </div>
  );
}

export default ApprovalModal;