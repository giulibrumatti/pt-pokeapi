interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="w-full max-w-6xl flex justify-center mx-auto m-20 mb-60 ">
      {children}
    </div>
  );
};

export default Container;
