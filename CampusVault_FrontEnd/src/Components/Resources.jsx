import React, { useState } from "react";

const Resources = () => {
  const [domain, setDomain] = useState("");
  const [papers, setPapers] = useState([]);

  const showPapers = async (selectedDomain) => {
    setDomain(selectedDomain);
    if (!selectedDomain) return;

    try {
      const res = await fetch(`http://localhost:8081/api/files?domain=${selectedDomain}`);
      const data = await res.json();
      setPapers(data);
    } catch (err) {
      console.error("Error fetching papers:", err);
    }
  };

  //  Function to trigger file download
  const handleDownload = (id, filename) => {
    const link = document.createElement("a");
    link.href = `http://localhost:8081/api/files/download/${id}`;
    link.download = filename;
    link.click();
  };

  return (
    <div id="resources" className="flex flex-col md:flex-row h-screen">
      {/* === Sidebar === */}
      <aside className="w-full md:w-[320px] bg-[#181818] text-white p-8 border-r-2 border-gray-800">
        <h3 className="text-3xl font-bold mb-3">Select Domain</h3>
        <p className="text-gray-400 mb-3">Choose a domain to view available papers.</p>
        <select
          onChange={(e) => showPapers(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        >
          <option value="">Select Domain</option>
          <option value="B.Tech">B.Tech</option>
          <option value="Diploma">Diploma</option>
          <option value="MBA">M.B.A</option>
          <option value="M.Tech">M.Tech</option>
        </select>
      </aside>

      {/* === Main Content === */}
      <section className="flex-1 bg-white text-black p-8 text-left overflow-y-auto">
        <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
          All Available Papers
        </h2>
        <input
          type="text"
          placeholder="⌕ Search by Subject, Year, or Regulation..."
          className="border border-[#457B9D] bg-[#eaf4ff] p-2 rounded w-full mb-4"
        />

        {papers.length === 0 ? (
          <p className="text-gray-600">No papers found</p>
        ) : (
          <ul>
            {papers.map((file) => (
              <li
                key={file.id}
                className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-3 mb-2 rounded shadow"
              >
                <span
                  className="cursor-pointer font-medium text-[#1d3557] hover:underline"
                  onClick={() =>
                    window.open(`http://localhost:8081/api/files/view/${file.id}`, "_blank")
                  }
                >
                  {file.filename}
                </span>

                <button
                  onClick={() => handleDownload(file.id, file.filename)}
                  className="bg-[#1d3557] text-white px-3 py-1 rounded hover:bg-[#457B9D] transition-all"
                >
                  ⬇️ Download
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Resources;
