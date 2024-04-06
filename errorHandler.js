const errorHandler = (res, statusCode) => {
  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
    "Content-Type": "application/json",
  };
  let message = "";
  switch (statusCode) {
    case 400:
      message = "欄位未填寫正確，或無此 todo id";
      break;
    case 404:
      message = "404 not found page";
      break;
    default:
      break;
  }
  res.writeHead(statusCode, headers);
  res.write(
    JSON.stringify({
      status: "error",
      message: message,
    })
  );
  res.end();
};

module.exports = errorHandler;
