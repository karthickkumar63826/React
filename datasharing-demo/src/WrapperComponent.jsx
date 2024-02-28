export default function WrapperComponent({ children, title }) {
  return (
    <>
      <h1> {title}</h1>
      {children}
    </>
  );
}
