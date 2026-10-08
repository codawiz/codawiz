/** Server-rendered text stays readable without JavaScript or with reduced motion. */
export function WordReveal({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" data-word-reveal>
        {text.split(" ").map((word, index) => (
          <span key={index}>
            <span className="inline-block" data-word>
              {word}
            </span>{" "}
          </span>
        ))}
      </span>
    </>
  );
}
