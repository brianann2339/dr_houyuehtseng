const visitorCounterUrl =
  "https://api.counterapi.dev/v2/yueh-tseng-hou/yueh-tseng-hou-visits";

const visitorCounterScript = `
(function () {
  var counter = document.getElementById("visitor-count-number");
  var wrapper = document.getElementById("visitor-count");
  if (!counter || !wrapper) return;

  if (
    location.protocol === "file:" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "localhost"
  ) {
    wrapper.hidden = true;
    return;
  }

  var now = new Date();
  var today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  var storageKey = "yueh_tseng_hou_visit_day_v1";
  var shouldIncrement = false;

  try {
    if (localStorage.getItem(storageKey) !== today) {
      localStorage.setItem(storageKey, today);
      shouldIncrement = true;
    }
  } catch (error) {}

  var requestUrl =
    "${visitorCounterUrl}" +
    (shouldIncrement ? "/up" : "") +
    "?t=" +
    Date.now();

  function releaseReservation() {
    if (!shouldIncrement) return;

    try {
      if (localStorage.getItem(storageKey) === today) {
        localStorage.removeItem(storageKey);
      }
    } catch (error) {}
  }

  fetch(requestUrl, { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Visitor counter " + response.status);
      return response.json();
    })
    .then(function (data) {
      var value = data && data.data && data.data.up_count;
      if (!Number.isSafeInteger(value) || value < 0) {
        releaseReservation();
        wrapper.hidden = true;
        return;
      }

      counter.textContent = value.toLocaleString("zh-TW");
    })
    .catch(function () {
      releaseReservation();
      wrapper.hidden = true;
    });
})();
`;

export default function VisitorCounter() {
  return (
    <>
      <span className="visitor-count" id="visitor-count" aria-live="polite">
        👣 累計來訪 <strong id="visitor-count-number">…</strong> 人次
      </span>
      <script
        data-static-script="visitor-counter"
        dangerouslySetInnerHTML={{ __html: visitorCounterScript }}
        id="visitor-counter-script"
      />
    </>
  );
}
