import type { Article } from '../../../types/article';

const ArticleCard: React.FC<Article> = ({
  title,
  description,
  publishedAt,
  url,
  source,
  imageUrl,
}) => {
  return (
    <div className="md:flex-1/4 bg-white p-4 rounded-md flex flex-col">
      <img
        src={imageUrl}
        className="w-full h-[200px] object-cover"
        alt={title}
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="font-bold text-lg mb-2 text-primary">{title}</h3>
        <p className="">{description}</p>
        <div className="flex justify-between mt-4 text-sm">
          {/* <span>{publishedAt}</span> */}
          <span>{source}</span>
          <a
            href={url}
            target="_blank"
            className="flex items-center gap-1 cursor-pointer"
          >
            view
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
