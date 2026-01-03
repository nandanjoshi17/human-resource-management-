/* ---------- LOGIN LOGIC ---------- */
function login() {
  const role = document.getElementById("role").value;

  if (role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "employee-dashboard.html";
  }
}

/* ---------- EMPLOYEE ATTENDANCE CHART ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const attendanceCanvas = document.getElementById("attendanceChart");

  if (attendanceCanvas) {
    const ctx = attendanceCanvas.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
          label: "Attendance",
          data: [1, 1, 0, 1, 1],
          backgroundColor: "#4CAF50"
        }]
      },
      options: {
        responsive: true
      }
    });
  }
});