(() => {
  "use strict";
  const SAVE_KEY = "bookbound-save-v2";
  const bookTypes = [
    {name:"The Sleepy Dragon",emoji:"\ud83d\udcd5",story:"A tiny dragon snoozes between these pages.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Atlas of Elsewhere",emoji:"\ud83d\udcd8",story:"A map that redraws itself whenever someone dreams.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Garden of Giggles",emoji:"\ud83d\udcd7",story:"Every flower in this book tells a joke.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Moonlight Recipes",emoji:"\ud83d\udcd9",story:"Recipes for starlight soup and cloudberry pie.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Paper Phoenix",emoji:"\ud83d\udcd4",story:"A phoenix folded from paper, ready to burst into bright pages.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Ocean of Oddities",emoji:"\ud83d\udcd3",story:"A whole ocean with tiny whales and polite sea monsters.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Clockwork Fox",emoji:"\ud83d\udcd5",story:"A clever fox built from brass gears and curious questions.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Cloud Castle",emoji:"\ud83d\udcd8",story:"A castle floating somewhere above the weather.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Secret Seed",emoji:"\ud83d\udcd7",story:"Plant one sentence, and a whole forest of stories grows.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Star Collector",emoji:"\ud83d\udcd9",story:"Someone collects fallen stars in the margins.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Last Bookmark",emoji:"\ud83d\udcd4",story:"A bookmark that always points to the next adventure.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Wilderpages",emoji:"\ud83d\udcd3",story:"The oldest book of all; its final page is still being written.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Velvet Comet",emoji:"\ud83d\udcd5",story:"A comet leaves a trail of soft purple dust.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Tiny Kraken",emoji:"\ud83d\udcd8",story:"A sea creature more ticklish than terrifying.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Moss & Moonbeams",emoji:"\ud83d\udcd7",story:"A forest guide written by the moss itself.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Amber Hourglass",emoji:"\ud83d\udcd9",story:"It holds one golden minute from a forgotten day.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Glass Griffin",emoji:"\ud83d\udcd4",story:"A glass griffin sings when sunlight finds it.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Raincloud Library",emoji:"\ud83d\udcd3",story:"A library where every shelf is a cloud.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Button Knight",emoji:"\ud83d\udcd5",story:"A brave knight with a shield made from a button.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"The Sapphire Whale",emoji:"\ud83d\udcd8",story:"A whale swims through the deep blue of the page.",rarity:"Common",color:"#b8b4c8",coins:5},
    {name:"Mushroom Mail",emoji:"\ud83d\udcd7",story:"Tiny letters travel between glowing mushrooms.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Sunken Crown",emoji:"\ud83d\udcd9",story:"A crown rests in a city beneath the waves.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Prism Owl",emoji:"\ud83d\udcd4",story:"An owl whose feathers split moonlight into colors.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Invisible Island",emoji:"\ud83d\udcd3",story:"You can only find this island when you stop looking.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Cinnamon Giant",emoji:"\ud83d\udcd5",story:"A gentle giant smells faintly of cinnamon rolls.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Aurora Engine",emoji:"\ud83d\udcd8",story:"A machine that paints the northern sky.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Fern Dragon",emoji:"\ud83d\udcd7",story:"A leafy dragon guards the oldest grove.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Golden Beetle",emoji:"\ud83d\udcd9",story:"A beetle carries a single grain of sunshine.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Starwell Key",emoji:"\ud83d\udcd4",story:"A key that opens doors in the night sky.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Echo Shell",emoji:"\ud83d\udcd3",story:"A shell remembers songs from distant shores.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Candy Compass",emoji:"\ud83d\udcd5",story:"It points toward whatever adventure you need most.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Sapphire Snowfox",emoji:"\ud83d\udcd8",story:"A fox leaves sparkling pawprints in fresh snow.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Lullaby of Pines",emoji:"\ud83d\udcd7",story:"The trees hum this song when the wind is quiet.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Dune Cartographer",emoji:"\ud83d\udcd9",story:"A cartographer maps paths that shift with the sand.",rarity:"Uncommon",color:"#62c99b",coins:9},
    {name:"The Clocktower Moth",emoji:"\ud83d\udcd4",story:"A moth keeps time by the glow of its wings.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Coral Crown",emoji:"\ud83d\udcd3",story:"A crown grown slowly by a patient reef.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Meteor Gardener",emoji:"\ud83d\udcd5",story:"A gardener plants tiny meteor seeds.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Lantern Whale",emoji:"\ud83d\udcd8",story:"A whale lights the dark with a lantern in its heart.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Blueberry Oracle",emoji:"\ud83d\udcd7",story:"It predicts tomorrow using blueberry stains.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Ember Violin",emoji:"\ud83d\udcd9",story:"A violin plays warm songs without strings.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Moonstone Door",emoji:"\ud83d\udcd4",story:"A door appears only under a full moon.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Snowglobe Sea",emoji:"\ud83d\udcd3",story:"A miniature sea swirls inside a glass globe.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Dreaming Mountain",emoji:"\ud83d\udcd5",story:"A mountain dreams of becoming a cloud.",rarity:"Rare",color:"#6aa7ff",coins:16},
    {name:"The Rosegold Beetle",emoji:"\ud83d\udcd8",story:"A tiny beetle polishes fallen petals.",rarity:"Epic",color:"#bd7af0",coins:30},
    {name:"The Emerald Eclipse",emoji:"\ud83d\udcd7",story:"A rare green shadow crosses the forest.",rarity:"Epic",color:"#bd7af0",coins:30},
    {name:"The Crown of Comets",emoji:"\ud83d\udcd9",story:"A crown forged from the tails of comets.",rarity:"Epic",color:"#bd7af0",coins:30},
    {name:"The First Story",emoji:"\ud83d\udcd4",story:"A mysterious book said to contain every beginning.",rarity:"Epic",color:"#bd7af0",coins:30},
    {name:"The Heart of Wilderpages",emoji:"\ud83d\udcd3",story:"A legendary story writes a new ending for every reader.",rarity:"Epic",color:"#bd7af0",coins:30},
    {name:"The Everlight Codex",emoji:"\ud83d\udcd5",story:"An ancient codex glows with endless dawn.",rarity:"Legendary",color:"#ffb83f",coins:75},
    {name:"The Unwritten Star",emoji:"\ud83d\udcd8",story:"A star whose story has not yet been told.",rarity:"Legendary",color:"#ffb83f",coins:75}
  ];
  const bookSpawns = Array.from({length:50},(_,i)=>({x:8+((i*37+13)%84),y:8+((i*53+19)%84)}));
  const places = [
    {id:"meadow",name:"Sunsprout Meadow",x:36,y:54},
    {id:"whisperwood",name:"Whisperwood",x:18,y:24},
    {id:"mirrorpond",name:"Mirror Pond",x:83,y:28},
    {id:"chapterruins",name:"Old Chapter",x:27,y:78},
    {id:"cottages",name:"Story Cottage",x:42,y:20},
    {id:"starlight",name:"Starlight Ridge",x:90,y:82}
  ];
  const $ = id => document.getElementById(id);
  let state = loadState();
  let toastTimer, soundOn = false, zoom = 1;
  const player = $("player"), map = $("worldMap");
  function freshState(){return {x:36,y:54,coins:0,caught:[],discovered:["meadow"],visited:[],lastBook:0};}
  function loadState(){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));if(s&&Array.isArray(s.caught)&&typeof s.x==="number")return {...freshState(),...s};const old=JSON.parse(localStorage.getItem("bookbound-save-v1"));if(old&&typeof old.x==="number")return {...freshState(),x:old.x,y:old.y,coins:old.coins||0,discovered:old.discovered||["meadow"]};}catch(e){}return freshState();}
  function save(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));$("saveStatus").textContent="Progress saved";}catch(e){$("saveStatus").textContent="Saving unavailable";} }
  function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300);}
  function move(dir){const step=4.2; if(dir==="up")state.y-=step;if(dir==="down")state.y+=step;if(dir==="left")state.x-=step;if(dir==="right")state.x+=step;state.x=Math.max(4,Math.min(95,state.x));state.y=Math.max(5,Math.min(94,state.y));renderPlayer();discoverPlaces();updateNearby();save();}
  function renderPlayer(){player.style.left=state.x+"%";player.style.top=state.y+"%";$("coords").textContent=`X: ${String(Math.round(state.x)).padStart(2,"0")} · Y: ${String(Math.round(state.y)).padStart(2,"0")}`;}
  function renderBooks(){
    $("bookLayer").innerHTML="";
    bookSpawns.forEach((p,i)=>{if(state.caught.includes(i))return;const el=document.createElement("button");el.className="book-token";el.type="button";el.dataset.book=i;el.textContent=bookTypes[i].emoji;el.style.left=p.x+"%";el.dataset.rarity=bookTypes[i].rarity;el.style.top=p.y+"%";el.setAttribute("aria-label","Runaway book: "+bookTypes[i].name);el.title=bookTypes[i].name;el.addEventListener("click",()=>{const d=distance(state.x,state.y,p.x,p.y);if(d<=13)catchBook(i);else{toast("A little closer! Wander toward the glowing book.");$("worldHint").textContent="Get closer to the book, then tap Catch nearby book.";}});$("bookLayer").appendChild(el);});
  }
  function distance(x,y,a,b){return Math.hypot(x-a,y-b);}
  function nearestBook(){let best=null,dist=Infinity;bookSpawns.forEach((p,i)=>{if(state.caught.includes(i))return;const d=distance(state.x,state.y,p.x,p.y);if(d<dist){dist=d;best=i;}});return best===null?null:{i:best,d:dist};}
  function updateNearby(){const n=nearestBook(),el=$("nearbyBook");if(!n){el.innerHTML='<div class="book-emoji">✨</div><div><b>Every book is home!</b><p>You caught all 50 runaway books.</p></div>';$("worldHint").textContent="You found every book! What a legendary explorer.";return;}const b=bookTypes[n.i];if(n.d<=13){el.innerHTML=`<div class="book-emoji" style="background:${b.color}35">${b.emoji}</div><div><b>${escapeHTML(b.name)}</b><p>It's close enough to catch! ✨</p></div>`;$("worldHint").textContent="A book is within reach! Tap Catch nearby book.";}else{el.innerHTML=`<div class="book-emoji">🔎</div><div><b>${escapeHTML(b.name)} is out there</b><p>${Math.round(n.d)} steps away · Follow the little book icons.</p></div>`;$("worldHint").textContent="Tap a direction to wander. Get close to a book, then catch it!";}}
  function catchBook(i){if(state.caught.includes(i))return;const p=bookSpawns[i];if(distance(state.x,state.y,p.x,p.y)>13){toast("Not quite close enough — move a little nearer!");return;}state.caught.push(i);state.coins+=bookTypes[i].coins;state.lastBook=i;renderBooks();renderCollection();updateStats();save();showModal(bookTypes[i]);updateNearby();}
  function tryCatch(){const n=nearestBook();if(!n){toast("You caught every book across the world! 📚");return;}if(n.d<=13){catchBook(n.i);}else{toast("Too far away! You're about "+Math.round(n.d)+" steps away.");}}
  function showModal(b){$("modalIcon").textContent=b.emoji;$("modalTitle").textContent="You caught "+b.name+"!";$("modalText").textContent=b.story;$("modalReward").textContent=b.rarity+" · +"+b.coins+" page coins · Added to your collection";$("modalReward").className="modal-reward rarity-reward-"+b.rarity.toLowerCase();$("modalBackdrop").classList.add("open");}
  function closeModal(){$("modalBackdrop").classList.remove("open");}
  function renderCollection(){const grid=$("collectionGrid");grid.innerHTML="";for(let i=0;i<50;i++){const slot=document.createElement("div");slot.className="collection-slot"+(state.caught.includes(i)?" filled":"");slot.textContent=state.caught.includes(i)?bookTypes[i].emoji:"·";if(state.caught.includes(i)){slot.dataset.rarity=bookTypes[i].rarity;slot.title=bookTypes[i].name+" — "+bookTypes[i].rarity;}else{slot.title="Empty collection slot";}grid.appendChild(slot);} $("collectionLabel").textContent=state.caught.length+" / 50";}
  function updateStats(){$("caughtCount").innerHTML=`${state.caught.length} <small>/ 50</small>`;$("coinCount").textContent=state.coins;$("placeCount").innerHTML=`${state.discovered.length} <small>/ 6</small>`;$("caughtBar").style.width=(state.caught.length/50*100)+"%";$("discoverText").textContent=state.discovered.length+" discovered";document.querySelectorAll(".place-card[data-place]").forEach(card=>{const found=state.discovered.includes(card.dataset.place);card.classList.toggle("discovered",found);card.classList.toggle("locked",!found);const status=card.querySelector(".place-status"),badge=card.querySelector(".place-art span");if(found){status.textContent="● DISCOVERED";if(badge)badge.textContent="✦";}else{status.textContent="◌ UNDISCOVERED";if(badge)badge.textContent="?";}});}
  function biomeAt(x,y){if(x<30&&y<45)return {id:"forest",name:"Whisperwood",emoji:"🌲"};if(x>68&&y<43)return {id:"pond",name:"Mirror Pond",emoji:"🪷"};if(x>62&&y>56)return {id:"desert",name:"Golden Dunes",emoji:"🏜️"};if(x<35&&y>58)return {id:"frost",name:"Frostfall",emoji:"❄️"};if(x>39&&x<67&&y>45&&y<88)return {id:"mushroom",name:"Glowcap Grove",emoji:"🍄"};return {id:"meadow",name:"Sunsprout Meadow",emoji:"🌼"};}
  function discoverPlaces(){places.forEach(p=>{if(distance(state.x,state.y,p.x,p.y)<12&&!state.discovered.includes(p.id)){state.discovered.push(p.id);toast("New place discovered: "+p.name+"! ✨");}});const biome=biomeAt(state.x,state.y);$("biomeName").textContent=biome.emoji+" "+biome.name;map.dataset.biome=biome.id;updateStats();}
  function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  document.querySelectorAll("[data-move]").forEach(btn=>{let hold;const start=()=>{move(btn.dataset.move);hold=setInterval(()=>move(btn.dataset.move),190);};const stop=()=>clearInterval(hold);btn.addEventListener("pointerdown",e=>{e.preventDefault();start();});["pointerup","pointerleave","pointercancel"].forEach(ev=>btn.addEventListener(ev,stop));});
  document.addEventListener("keydown",e=>{if(["ArrowUp","w","W"].includes(e.key)){e.preventDefault();move("up");}else if(["ArrowDown","s","S"].includes(e.key)){e.preventDefault();move("down");}else if(["ArrowLeft","a","A"].includes(e.key)){e.preventDefault();move("left");}else if(["ArrowRight","d","D"].includes(e.key)){e.preventDefault();move("right");}else if(e.key===" "){e.preventDefault();tryCatch();}else if(e.key==="Escape")closeModal();});
  $("catchBtn").addEventListener("click",tryCatch);$("modalClose").addEventListener("click",closeModal);$("modalContinue").addEventListener("click",closeModal);$("modalBackdrop").addEventListener("click",e=>{if(e.target===$("modalBackdrop"))closeModal();});
  $("playBtn").addEventListener("click",()=>{$("world").scrollIntoView({behavior:"smooth",block:"start"});toast("Your adventure awaits! Use the movement pad to explore.");});
  $("mapBtn").addEventListener("click",()=>{$("world").scrollIntoView({behavior:"smooth",block:"start"});const n=nearestBook();if(n){const p=bookSpawns[n.i];toast("Next book: "+bookTypes[n.i].name+" · Head toward its icon.");}else toast("All 50 books caught! You're a book-catching legend.");});
  $("zoomIn").addEventListener("click",()=>{zoom=Math.min(1.35,zoom+.1);map.style.transform=`scale(${zoom})`;});$("zoomOut").addEventListener("click",()=>{zoom=Math.max(.85,zoom-.1);map.style.transform=`scale(${zoom})`;});$("centerBtn").addEventListener("click",()=>{zoom=1;map.style.transform="scale(1)";renderPlayer();toast("Map centered on your explorer.");});
  $("soundBtn").addEventListener("click",()=>{soundOn=!soundOn;$("soundBtn").style.background=soundOn?"#eeeaff":"#fff";toast(soundOn?"Sound effects are ready to be added in a future update.":"Sound muted.");});
  $("resetBtn").addEventListener("click",()=>{if(confirm("Start a new adventure? This will erase your saved books and coins on this device.")){state=freshState();save();renderBooks();renderPlayer();renderCollection();updateStats();updateNearby();toast("A fresh story begins!");}});
  // Tap anywhere on the map to move your explorer toward that spot.
  $("worldViewport").addEventListener("click",e=>{if(e.target.closest("button")||e.target.closest(".landmark")||e.target.closest(".map-controls"))return;const r=map.getBoundingClientRect();const x=Math.max(4,Math.min(95,(e.clientX-r.left)/r.width*100));const y=Math.max(5,Math.min(94,(e.clientY-r.top)/r.height*100));state.x=x;state.y=y;renderPlayer();discoverPlaces();updateNearby();save();});
  renderBooks();renderPlayer();renderCollection();discoverPlaces();updateStats();updateNearby();save();
})();