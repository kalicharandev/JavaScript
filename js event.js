<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>

<p id="demo"></p>

<button onclick="displayDate()">click the button date and time</button>
<button onclick="this.innerHTML=Date()">click it</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
</body>
</html> 