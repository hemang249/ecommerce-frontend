import React from "react";
import { API } from "../../config";

export default function Thumbnail({ product }) {
  return (
    <div className="rounded border border-success p-2">
      <img
        src={`${API}/product/thumbnail/${product._id}`}
        alt="photo"
        style={{ height: "225px", width: "350px" }}
        className="mb-3 rounded"
      />
    </div>
  );
}
