import './page-content-title.scss';

const PageContentTitle = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="page-content-title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageContentTitle;
