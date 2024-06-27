import "./styles.css";
import ObjectLoader from "@speckle/objectloader";

document.getElementById("app")!.innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  Test: ${ObjectLoader.name}
</div>`;
