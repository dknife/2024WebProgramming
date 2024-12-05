// Calculate the smooth moon phase as a value between 0 (New Moon) and 1 (New Moon wrapping)
function calculateSmoothMoonPhase(date = new Date()) {
	var today = new Date();
	var start = new Date();
	
	start.setFullYear(1900, 0, 31);
	
	var milliSecPerDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	
	var todayMill;
	if( typeof date == 'undefined')
		todayMill = today.getTime()+today.getHours()*60*60*1000+today.getMinutes()*60*1000+ today.getSeconds()*1000 + today.getMilliseconds();
		// current time in milliseconds (today)
	else 
		todayMill = date.getTime()+ 20*60*60*1000; // 20:00 on the user-input date
	
	// 1900. 1. 31. 10:22:38
	var startMill = start.getTime()+ 10*60*60*1000 + 22*60*1000 + 38*1000; //
	var diffDays = Math.abs((todayMill-startMill)/(milliSecPerDay));
	
	var phase = diffDays / 29.530588853;
	phase -= Math.floor(phase);
	
	return phase;
}

function setSmoothMoonPhase(phase) {
    const shadow = document.querySelector(".shadow");
    phase = 1 - phase
    // Determine shadow position based on phase
    if (phase <= 0.5) {
      // Waxing phases (New Moon to Full Moon)
      const percentage = 100 - phase * 200; // Dynamic shadow shrinking
      shadow.style.clipPath = `ellipse(${percentage}% 100% at 100% 50%)`;
    } else {
      // Waning phases (Full Moon to New Moon)
      const percentage = (phase - 0.5) * 200; // Dynamic shadow growing
      shadow.style.clipPath = `ellipse(${percentage}% 100% at 0% 50%)`;
    }
  }

// Initialize moon phase on page load
document.addEventListener("DOMContentLoaded", () => {
    const smoothPhase = calculateSmoothMoonPhase(); // Get phase (0 to 1)
    console.log(smoothPhase);
    setSmoothMoonPhase(smoothPhase); // Render the corresponding moon phase
});