"use client";

type ArrowButtonProps = {
  direction?: "left" | "right";
  onClick?: () => void;
  "aria-label"?: string;
  className?: string;
};

export default function ArrowButton({
  direction = "right",
  onClick,
  "aria-label": ariaLabel,
  className = "",
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (direction === "right" ? "Next" : "Previous")}
      className={`w-10 h-10 rounded-full flex items-center justify-center border border-[#D8DEE6] bg-[#E9EDF2] hover:bg-[#E2E7EE] transition-colors flex-shrink-0 ${className}`}
    >
      {direction === "right" ? (
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      )}
    </button>
  );
}
