import './style.scss';

const PageWrapper = (props: any) => {
  return <div className="page-wrapper">{props.children}</div>;
};

export default PageWrapper;
