import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { marked } from "marked";

const defaultMarkdown = `
# Encabezado 1
## Encabezado 2
[Enlace a Google](https://www.google.com/)
\`Código en línea\`
\`\`\`
Bloque de código
\`\`\`
- Elemento de lista 1
- Elemento de lista 2
> Cuota de bloque
![Texto alternativo](https://via.placeholder.com/150)
**Texto en negrita**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(markdown, {
      breaks: true,
    });
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <main className="app">
        <h2 className="titilo">Marcador De Markdown</h2>
        <section className="editor-container">
          <h3 className="titilo-subtitulo">
            <i className="bi bi-markdown-fill"> Markdown</i>
          </h3>
          <textarea id="editor" onChange={handleChange} value={markdown} />
        </section>
        <section className="preview-container">
          <h3 className="titilo-subtitulo">
            <i className="bi bi-journal-richtext">Ver Resultado</i>
          </h3>
          <div id="preview" />
        </section>
      </main>
    </>
  );
}

export default App;
