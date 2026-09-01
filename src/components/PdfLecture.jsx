import React, { useState } from 'react';
import { Download, ExternalLink, FileWarning } from 'lucide-react';

function PdfLecture({ file, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="pdf-lecture pdf-lecture--fallback">
        <FileWarning className="pdf-lecture__fallback-icon" />
        <h3 className="pdf-lecture__fallback-title">
          Браузер не показує PDF у вбудованому вікні
        </h3>
        <p className="pdf-lecture__fallback-text">
          Це типова поведінка мобільних браузерів. Відкрийте файл окремо.
        </p>
        <a href={file} className="pdf-lecture__btn" target="_blank" rel="noreferrer">
          <ExternalLink /> Відкрити лекцію
        </a>
      </div>
    );
  }

  return (
    <div className="pdf-lecture">
      <div className="pdf-lecture__toolbar">
        <span className="pdf-lecture__note">Слайди лекції</span>
        <div className="pdf-lecture__actions">
          <a href={file} className="pdf-lecture__btn" target="_blank" rel="noreferrer">
            <ExternalLink /> У новій вкладці
          </a>
          <a href={file} className="pdf-lecture__btn" download>
            <Download /> Завантажити
          </a>
        </div>
      </div>

      <object
        key={file}
        className="pdf-lecture__frame"
        data={`${file}#view=FitH`}
        type="application/pdf"
        aria-label={title}
        onError={() => setFailed(true)}
      >
        <iframe
          className="pdf-lecture__frame"
          src={`${file}#view=FitH`}
          title={title}
          onError={() => setFailed(true)}
        />
      </object>
    </div>
  );
}

export default PdfLecture;