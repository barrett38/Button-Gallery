const handleClick = async (setLoading, setSuccess, onClick) => {
  setLoading(true);
  setSuccess(false);
  await new Promise((res) => setTimeout(res, 2000));
  setLoading(false);
  setSuccess(true);
  if (onClick) onClick();
  setTimeout(() => setSuccess(false), 3000);
};

export default handleClick;
