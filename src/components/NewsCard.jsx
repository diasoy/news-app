import classnames from "classnames";
import PropTypes from "prop-types";
import { formatDate } from "./utils/formatDate";

const NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLastChild,
}) => {
  return (
    <>
      <div
        className={classnames("bg-white shadow-md rounded-md p-4", {
          "mb-4": notLastChild,
        })}
      >
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={src}
            alt={`${title} thumbnail img`}
          />
          <p className="font-bold text-lg">{title}</p>
        </div>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">{formatDate(publishedAt)}</p>
          <p className="text-gray-500 text-sm">{`${author} | ${sourceName}`}</p>

          <p className="mt-2 text-gray-700">{description}</p>

          <a
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to website
          </a>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  notLastChild: PropTypes.bool,
};

export default NewsCard;
