document.getElementById("styleForm").onsubmit = (e) => {
    e.preventDefault();
    const phone = document.getElementById("phone").value.toLowerCase();
    const gender = document.getElementById("gender").value;
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
  
    let wallpaper = "default_flare.jpg"; // Back to JPG
    let caseStyle = "Satin Gray";
  
    if (height > 175) wallpaper = "tall_flare.jpg";
    else if (height < 165) wallpaper = "short_dial.jpg";
    else wallpaper = "mid_vibe.jpg";
  
    if (weight > 85) caseStyle = "Matte Red";
    else if (weight < 60) caseStyle = "Glossy Teal";
    else caseStyle = "Metallic Silver";
  
    if (gender === "female") caseStyle = caseStyle.replace("Red", "Pink").replace("Silver", "Gold");
  
    document.getElementById("result").innerHTML = `
      Your Wallpaper: <a href="${wallpaper}" target="_blank">Download</a><br>
      Your Case Style: ${caseStyle}
    `;
  };