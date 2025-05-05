
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
      }
    });
  alert("This website is compatible only with PC coz they are cheats for pc retard");
