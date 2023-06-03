const ScrollWrapper = ({ children, style, inView, ...props }: Props) => {
  return (
    <div {...props}>
      <Status inView={inView} />
      <section>
        <h1>⬇ Scroll Down ⬇</h1>
      </section>
      {children}
      <section>
        <h1>⬆︎ Scroll up ⬆︎</h1>
      </section>
    </div>
  );
};
