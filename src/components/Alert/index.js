import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export default forwardRef(({ message, duration = 3000 }, ref) => {
  const [show, setShow] = useState(false);

  const toastClass = show
    ? "transition-opacity opacity-100"
    : "transition-opacity opacity-0";

  const showToast = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, duration);
  };

  useEffect(() => {
    showToast();
  }, []);

  useImperativeHandle(ref, () => ({
    showToast,
  }));

  if (!show) {
    return null;
  }

  return (
    <>
      {message && (
        <div className="toast toast-top toast-end">
          <div role="alert" className={`alert alert-error ${toastClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
});
