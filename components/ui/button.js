export function Button({ children, size = "md", variant = "default", className = "", ...props }) {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100"
  };

  return (
    <button
      className={`rounded-2xl font-medium transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
