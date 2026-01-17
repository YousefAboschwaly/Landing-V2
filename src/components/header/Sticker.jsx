export default function Sticker({
  src,
  alt,
  className,
  children,
}) {
  return (
    <div
      className={`  ${className} `}
    >
      {src ? (
        <img
          src={src || "/placeholder.svg"}
          alt={alt || ""}
        />
      ) : (
        children
      )}
    </div>
  );
}
