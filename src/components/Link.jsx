const Link = ({ url, title }) => {
  return (
    <div className="rounded-full">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="mt-3 bg-white rounded-full text-center py-3 px-24 text-lg min-w-max">
          {title}
        </div>
      </a>
    </div>
  );
};

export default Link;
