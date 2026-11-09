const $=s=>document.querySelector(s);
$("#year").textContent=new Date().getFullYear();
$("#hamb").onclick=()=>document.querySelector("nav").classList.toggle("open");
const demo={pet:"Milo • Golden Retriever",status:"In transit",location:"Sample route — demonstration only",departure:"9 November 2026",eta:"12 November 2026 (sample estimate)",lat:40.7128,lng:-74.006,stage:2};
function allShipments(){return JSON.parse(localStorage.getItem("gacShipments")||"{}")}
function lookup(code){return allShipments()[code]||(code==="GAC-DEMO-001"?demo:null)}
let map=null, marker=null, route=null;
$("#search").onclick=()=>{
 const code=$("#code").value.trim().toUpperCase(), s=lookup(code), out=$("#shipment");
 out.classList.remove("hidden");
 if(!s){out.innerHTML="<b>Tracking reference not found.</b><p class='muted'>Please check the code or contact the agency. This prototype only knows locally entered demo records.</p>";return;}
 const steps=["Booking received","Preparing for dispatch","In transit","Arrived / delivered"];
 out.innerHTML=`<div class="shipment-head"><div><small>TRACKING REFERENCE</small><h3>${safe(code)}</h3><b>${safe(s.pet)}</b></div><span class="pill">${safe(s.status)}</span></div><div class="stats"><div class="stat"><small>LAST RECORDED LOCATION</small><b>${safe(s.location||"Not provided")}</b></div><div class="stat"><small>DEPARTURE</small><b>${safe(s.departure||"Pending")}</b></div><div class="stat"><small>ESTIMATED ARRIVAL</small><b>${safe(s.eta||"Not available")}</b></div></div><div class="mapwrap"><h3>Shipment map</h3><div id="map" class="map"></div><p class="mapnote">Map pin is illustrative sample data, not a live GPS signal. A real live map requires a driver/vehicle location source and a secure server connection.</p></div><div class="milestones">${steps.map((x,i)=>`<div class="milestone ${i<(s.stage||1)?"done":""}">${x}</div>`).join("")}</div>`;
 if(window.L){map=L.map("map").setView([Number(s.lat)||40.7128,Number(s.lng)||-74.006],7);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);marker=L.marker([Number(s.lat)||40.7128,Number(s.lng)||-74.006]).addTo(map).bindPopup("Last recorded sample position").openPopup();}
};
$("#adminOpen").onclick=()=>$("#adminModal").classList.remove("hidden");$("#close").onclick=()=>$("#adminModal").classList.add("hidden");$("#adminModal").onclick=e=>{if(e.target.id==="adminModal")$("#adminModal").classList.add("hidden")};
$("#saveDemo").onclick=()=>{const code=$("#newCode").value.trim().toUpperCase();if(!code){$("#adminMsg").textContent="Enter a tracking code.";return;}const db=allShipments();db[code]={pet:$("#newPet").value||"Pet shipment",status:$("#newStatus").value,location:$("#newLocation").value||"Location not supplied",eta:$("#newEta").value||"Not supplied",departure:"Not supplied",lat:40.7128,lng:-74.006,stage:$("#newStatus").selectedIndex+1};localStorage.setItem("gacShipments",JSON.stringify(db));$("#adminMsg").textContent=`Demo record ${code} saved in this browser only.`;};
function safe(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
