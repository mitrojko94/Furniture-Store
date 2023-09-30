const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;

// Objasnjenje:
// Kad radim sa inputom koji je tipa checkbox, tu se uvek koristi defaultChecked, da se vidi da li je input cekiran ili ne, a za sve ostale je defaultValue
