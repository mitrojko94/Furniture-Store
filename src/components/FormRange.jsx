import { formatPrice } from "../utils";
import { useState } from "react";

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;

// Objasnjenje:
// U f-ju formatPrice sam stavio selectedPrice, a to mi je trenutni novac, trenutni state
// Stavio sam da je step=1000, to znaci da menjam vrednosti za 10 dolara. Ako hocu da menjam vrednosti za 100 dolara, samo stavim da je step=10000
// Poslednja dva spana koja sam dodao, koja su u divu, ona mi sluze da mi pokazu minimalnu i maksimalnu vrednost selektovane cene
// Koristim za pocetnu vrednost useState price, a ako nema, onda koristim maxPrice
