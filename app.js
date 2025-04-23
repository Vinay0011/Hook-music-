db.collection("clips").orderBy("timestamp", "desc").get().then(snapshot => {
    snapshot.forEach(doc => {
      const clip = doc.data();
      const card = document.createElement("div");
      card.className = "clip-card";
      card.innerHTML = `
        <h3>${clip.title}</h3>
        <p><em>${clip.artist}</em></p>
        <audio controls src="${clip.audio}"></audio>
      `;
      document.getElementById("clip-list").appendChild(card);
    });
  });
  