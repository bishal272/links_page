const Link = ({ url, title }) => {
  return (
    <div className="rounded-full transition ease-in hover:scale-105">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="mt-3 bg-white rounded-full text-center py-3 px-20 text-lg min-w-max">
          {title}
        </div>
      </a>
    </div>
  );
};

export default Link;
