import React from "react";

const CategoriesList = () => {
  return (
    <div className="added-words categories">
      <h3 className="title">Categories </h3>
      <table className="added-words-list">
        <thead>
          <th>Sóz</th>
          <th>Sáne</th>
        </thead>
        <tbody>
          <tr className="row">
            <td className="word">
              <div className="icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0095 0C10.5182 0 10.9307 0.447715 10.9307 1V4C10.9307 5.65685 12.168 7 13.6943 7H16.458C16.9667 7 17.3792 7.44772 17.3792 8V19C17.3792 20.6569 16.1418 22 14.6155 22H3.561C2.03468 22 0.797363 20.6569 0.797363 19V3C0.797363 1.34315 2.03468 0 3.561 0H10.0095Z"
                    fill="#54CDFF"
                  />
                  <path
                    d="M13.6736 0.177566C13.2045 -0.0360106 12.7732 0.447767 12.7732 1.00005V4.00005C12.7732 4.55234 13.1857 5.00005 13.6944 5.00005H16.4581C16.9668 5.00005 17.4125 4.53194 17.2158 4.02262C17.1306 3.80212 17.0082 3.59721 16.8397 3.41427L14.2341 0.585838C14.0655 0.402891 13.8768 0.270032 13.6736 0.177566Z"
                    fill="#54CDFF"
                  />
                </svg>
              </div>
              <strong>Atlıq</strong>
            </td>
            <td>July 13,2022</td>
            <td>
              <button className="btn">Ózgertiw</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
