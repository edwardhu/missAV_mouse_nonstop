function website_nopause() {
  console.log("extension is running")
  document.addEventListener("visibilitychange",(event)=>{
      event.stopImmediatePropagation();
      event.stopPropagation()
  });
  window.addEventListener("blur",(event)=>{
      event.stopImmediatePropagation();
      event.stopPropagation()
  });
  document.addEventListener("blur",(event)=>{
      event.stopImmediatePropagation();
      event.stopPropagation()
  });
};

website_nopause();