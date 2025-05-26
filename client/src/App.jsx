import React, { useState } from "react";
import axios from "axios";

function App() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  axios.defaults.withCredentials = true;
  const handleCalculate = async () => {
    // const res = await axios.post("http://localhost:5000/api/calculate", {
    const res = await axios.post("https://sea-freight-load-calculator-km3n.vercel.app/api/calculate", {
      length,
      width,
      height,
      weight,
      quantity,
    });
    setResult(res.data);
  };

  const containerImages = {
    "20ft": "https://imgs.search.brave.com/p7opB-r88gCFhfJA0pEEjAGFKCc12aNT9-6txN-zXyo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vV0Fma08y/dV9BMVk1R21LQWdY/ZmRjSnFIRERVYXpH/MFlpZ1dvNE5CdmVU/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2YVdRdk1U/TTIvT0RjeE5UTTVN/aTl3YUc5MC9ieTl6/YUdsd2NHbHVaeTFq/L2IyNTBZV2x1WlhJ/dFkyRnkvWjI4dFky/OXVkR0ZwYm1WeS9M/WGRwZEdndFkyeHBj/SEJwL2JtY3RjR0Yw/YUM1cWNHY18vY3ow/Mk1USjROakV5Sm5j/OS9NQ1pyUFRJd0pt/TTlaMVJaL1JqRjRU/M2hGY2xoMGNqbEIv/Um1GRlNGSmthVGg0/WTBkUi9UM0ZrYkZW/c2VtUktaV0ZKL1Mx/VjRkejA.jpeg",
    "40ft": "https://imgs.search.brave.com/GOO4cpGZcZQSXQOMSaZsnbt0Ss4yM4NMt7Gf5Qp6Fd8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUUN0OGRi/R0d2OTJLNVdTaU1S/V1dQbFNPRDM2TEhZ/Z2IyN1BtYk1XYXhK/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/UTAvTWpFNE9ESXlN/eTl3YUc5MC9ieTlp/Y205M2JpMXphR2x3/L0xXTmhjbWR2TFdO/dmJuUmgvYVc1bGNp/MXphV1JsTFhacC9a/WGN0TkRBdFptVmxk/QzFzL1pXNW5kR2d1/YW5CblAzTTkvTmpF/eWVEWXhNaVozUFRB/bS9hejB5TUNaalBY/bFZPVU5GL2RFNXFh/R3g1VUdsVGEwSk8v/ZDBseFNtcHNlbDlU/VXpCRC9kMU00V0hC/clN6azFUMFZWL2Mx/VTk.jpeg",
    "40HC": "https://imgs.search.brave.com/L6XeakrMIBrBiOpORgJFa3w5xx7AHoPvndTRQV-wJ9A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUDRaSU4t/UzllOUt0d2x3MkM1/NkxUY3p6RlhYRjN0/VGNNSTJ4OTlnVmRN/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/UXovTmpBMU9ETXdP/Qzl3YUc5MC9ieTl0/WlhSaGJHeHBZeTF6/L2FHbHdMV05oY21k/dkxXTnYvYm5SaGFX/NWxjaTFwYzI5cy9Z/WFJsWkMwelpDMXBi/R3gxL2MzUnlZWFJw/YjI0dWFuQm4vUDNN/OU5qRXllRFl4TWla/My9QVEFtYXoweU1D/WmpQV3AwL2FVdGtR/MHRzUmtJMVkyaFcv/UzNWeFdFVTJURWQy/TVVGSi9iME52VWps/aVptZFFZMDVQL1RF/OW9SRTA5.jpeg",
  };

  const containerDetails = {
    "20ft": "20ft Standard (589×234×238 cm, Max: 28,000 kg)",
    "40ft": "40ft Standard (1200×234×269 cm, Max: 26,500 kg)",
    "40HC": "40ft High Cube (1200×234×269 cm, Max: 26,500 kg)",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4">Sea Freight Load Calculator</h1>
      <div className="grid grid-cols-2 gap-4">
        <input type="number" placeholder="Length (cm)" onChange={(e) => setLength(Number(e.target.value))} className="border p-2 rounded" />
        <input type="number" placeholder="Width (cm)" onChange={(e) => setWidth(Number(e.target.value))} className="border p-2 rounded" />
        <input type="number" placeholder="Height (cm)" onChange={(e) => setHeight(Number(e.target.value))} className="border p-2 rounded" />
        <input type="number" placeholder="Weight (kg)" onChange={(e) => setWeight(Number(e.target.value))} className="border p-2 rounded" />
        <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} className="border p-2 rounded" />
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white p-2 rounded" onClick={handleCalculate}>Calculate</button>

      {result && (
        <div className="mt-8">
          <p><strong>Total CBM:</strong> {result.cbm} m³</p>
          <p><strong>Total Weight:</strong> {result.totalWeight} kg</p>
          <p><strong>Suggested Container:</strong> {result.suggestedContainer}</p>
        </div>
      )}

      {/* Container Cards */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Container Capacity (per item fit)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(containerImages).map(([type, img]) => (
          <div key={type} className="border rounded-xl p-4 shadow">
            <h3 className="text-md font-semibold mb-2 text-center">{containerDetails[type]}</h3>
            <img src={img} alt={`${type} container`} className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-bold mt-2 text-center">{type} Container</h3>
            {result && result.itemsPerContainer && result.itemsPerContainer[type] !== undefined && (
              <p className="mt-1 text-center">Can hold: <strong>{result.itemsPerContainer[type]}</strong> items</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
