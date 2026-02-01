// Date & Time
    function updateDateTime() {
      const now = new Date();
      const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      document.getElementById("dateTime").innerText =
        now.toLocaleString('en-IN', options);
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

  
  // Fetch IP Address
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("ipAddress").innerText = data.ip;
      })
      .catch(() => {
        document.getElementById("ipAddress").innerText = "Unavailable";
      });
  