import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export const DownloadLink = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div className="social" onClick={handleDownload}>
        <a
            href={`#download-link`}
        >
            <div className="social-icon">
                <FontAwesomeIcon icon={faFile} />
            </div>

            <div className="social-text">Telecharger CV</div>
        </a>
    </div>
  );
};