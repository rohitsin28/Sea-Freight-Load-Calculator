import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// app.use(cors("*"))

const containers = {
  "20ft": { maxCBM: 32.7, maxWeight: 28000 },
  "40ft": { maxCBM: 75.61, maxWeight: 26500 },
  "40HC": { maxCBM: 76.2, maxWeight: 26500 },
};

// Routes
app.get("/", (req, res) => {
  res.json("Hello Rohit");
});
app.post("/api/calculate", (req, res) => {
  const { length, width, height, weight, quantity } = req.body;

  const cbmPerItem = (length * width * height) / 1000000;
  const totalCBM = cbmPerItem * quantity;
  const totalWeight = weight * quantity;

  let suggestedContainer = "None";
  for (const [type, { maxCBM, maxWeight }] of Object.entries(containers)) {
    if (totalCBM <= maxCBM && totalWeight <= maxWeight) {
      suggestedContainer = type;
      break;
    }
  }

  const itemsPerContainer = {};
  for (const [type, { maxCBM, maxWeight }] of Object.entries(containers)) {
    const countByCBM = Math.floor(maxCBM / cbmPerItem);
    const countByWeight = Math.floor(maxWeight / weight);
    itemsPerContainer[type] = Math.min(countByCBM, countByWeight);
  }

  res.json({
    cbm: totalCBM.toFixed(2),
    totalWeight,
    suggestedContainer,
    itemsPerContainer,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
