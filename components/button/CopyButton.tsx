"use client";

export default function CopyButton() {
  return (
    <>
      <button
        className=""
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        Get URL
      </button>
    </>
  );
}
