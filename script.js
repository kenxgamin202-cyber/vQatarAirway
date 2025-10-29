// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Join form
document.getElementById("joinForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Thank you for joining vQatarairways!");
  e.target.reset();
});

// PIREP submission
document.getElementById("pirepForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    pilot: document.getElementById("pilot").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    aircraft: document.getElementById("aircraft").value
  };

  try {
    await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    alert("✅ PIREP submitted successfully!");
    e.target.reset();
  } catch {
    alert("⚠️ Submission failed. Check your internet or backend link.");
  }
});
