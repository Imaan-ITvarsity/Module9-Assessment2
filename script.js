function updateTime(city, offset) {
    const now = new Date();
    const timeZoneOffset = now.getTimezoneOffset() / 60;
    const localTime = now.getHours() + timeZoneOffset;
    const cityTime = localTime + offset;
  
    return cityTime % 24;
  }
  
  function updateClocks() {
    const londonTime = updateTime('London', 0);
    const tokyoTime = updateTime('Tokyo', 9);
    const beijingTime = updateTime('Beijing', 8);
    const capeTownTime = updateTime('Cape Town', 2);
    const dhakaTime = updateTime('Dhaka', 6);
    const istanbulTime = updateTime('Istanbul', 3);
    const jakartaTime = updateTime('Jakarta', 7);
    const bridgetownTime = updateTime('Bridgetown', -4);
    const lagosTime = updateTime('Lagos', 1);
    const moscowTime = updateTime('Moscow', 3);
    const nairobiTime = updateTime('Nairobi', 3);
    const sydneyTime = updateTime('Sydney', 10);
    const vancouverTime = updateTime('Vancouver', -7);
  
    document.getElementById('london-time').textContent = londonTime + ':00';
    document.getElementById('tokyo-time').textContent = tokyoTime + ':00';
    document.getElementById('beijing-time').textContent = beijingTime + ':00';
    document.getElementById('cape-town-time').textContent = capeTownTime + ':00';
    document.getElementById('dhaka-time').textContent = dhakaTime + ':00';
    document.getElementById('istanbul-time').textContent = istanbulTime + ':00';
    document.getElementById('jakarta-time').textContent = jakartaTime + ':00';
    document.getElementById('bridgetown-time').textContent = bridgetownTime + ':00';
    document.getElementById('lagos-time').textContent = lagosTime + ':00';
    document.getElementById('moscow-time').textContent = moscowTime + ':00';
    document.getElementById('nairobi-time').textContent = nairobiTime + ':00';
    document.getElementById('sydney-time').textContent = sydneyTime + ':00';
    document.getElementById('vancouver-time').textContent = vancouverTime + ':00';
  }
  
  setInterval(updateClocks, 1000);