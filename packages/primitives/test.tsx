import { renderToString } from "react-dom/server";
import { Box } from "./src/Box";

const html = renderToString(<Box className="container">Hello NAYAUI</Box>);

console.log(html);
