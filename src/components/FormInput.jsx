const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;

// Objasnjenje:
// Nadjem kod na sajtu daisyUI i ubacim sta mi treba i stavim da mi bude dinamicki, zato sam stavljao neke parametre, jer ce da mi bude i za login i register
