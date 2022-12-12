import React from "react";

interface IHelmetProps {
  title: string;
  children?: React.ReactNode;
}

function Helmet({ title, children }: IHelmetProps) {
  document.title = title + " - Shopping Mall";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}

export default Helmet;
