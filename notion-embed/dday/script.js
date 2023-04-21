const oneDay = 1000 * 60 * 60 * 24;
const url = new URL(window.location.href);
const ddayString = url.searchParams.get("date");
if (ddayString === null) {
  throw new Error("Wrong date");
}

const dday = new Date(
  Number(ddayString.slice(0, 4)),
  Number(ddayString.slice(4, 6)) - 1,
  Number(ddayString.slice(6, 8))
);
const now = new Date();
const gap = now.getTime() - dday.getTime();
const result = Math.floor(gap / oneDay) * -1;

window.onload = () => {
  const ddayElement = document.getElementById("dday");
  ddayElement.innerHTML =
    result === 0 ? "D-day" : `D${result > 0 ? "-" : "+"}${Math.abs(result)}`;
};
