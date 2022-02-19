function getFormatTime(date) {
  const time = new Date(date);
  const minutes =
    time.getMinutes() < 9 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
  const formatTime = `${time.getHours()}:${minutes}`;
  return formatTime;
}

export { getFormatTime };
