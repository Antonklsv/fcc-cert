
// Set/unset margin/padding/border for demo section
function setPropertyStyle(event) {
  // Temporary get style values from the array
  // TODO: get from the css via vars
  const values = {"margin": "1em", "padding": "0.5em", "border": "3px solid red"}
  
  // Map check boxes Ids to style property name
  const properties = {"chk-margin": "margin", "chk-padding": "padding", "chk-border": "border"}
  
  // Get section demo from DOM
  const sectionDemo = document.getElementById("demo");
  
  const demoStyle = sectionDemo.style;

  // Get current  state of a clicked checkbox
  const targetId = event.target.id;
  const state = document.getElementById(targetId).checked;
  const property = properties[targetId];

  // Change a style according a checkbox state
  if (state == true) {
    demoStyle[property] = values[property];
  }
  else { 
    demoStyle[property] = "0";
  }
}

// Set block/inline display style of spans
function setBlockStyle() {
  // Get current  state of the checkbox
  const state = document.getElementById("chk-block").checked;
  // console.log(state);
 
  // Get list of a span
  const spans = document.querySelectorAll("span");
  // console.log(spans);

  // Change a span display style according the checkbox state
  for(let span of spans) {
    // console.log(span);
    if (state == true) {
      span.style.display = "block";
    }
    else {
      span.style.display = "inline";
    }
  }
}

// Reset all styles of demo section to default values
function resetAll() {
  // Reset check boxes to unchecked
  const checks = document.querySelectorAll('[id^="chk-"]');
  // console.log(checks);
  checks.forEach((checkbox) => {
    checkbox.checked = false;
  })

  // Reset all styles of the demo section
  const sectionDemo = document.getElementById("demo");
  const demoStyle = sectionDemo.style;
  demoStyle.margin = 0;
  demoStyle.padding = 0;
  demoStyle.border = 0;

  // Reset spans display style to inline
  setBlockStyle();
}

// Entry point
resetAll();