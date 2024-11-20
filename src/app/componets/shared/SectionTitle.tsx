const SectionTitle = ({
  title,
  bgText,
}: {
  title: string;
  bgText?: string;
}) => {
  return (
    <div className="flex items-center justify-center text-center relative pb-[3rem] h-auto">
      {bgText && (
        <p
          className="text-5xl lg:text-8xl font-bold opacity-[0.05] absolute w-full text-center"
          style={{ letterSpacing: "4px", textTransform: "uppercase" }}
        >
          {bgText}
        </p>
      )}
      <h2
        className="text-4xl font-bold mt-[1rem]"
        style={{ letterSpacing: "2px" }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
