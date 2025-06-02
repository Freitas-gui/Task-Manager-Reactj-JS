function Input({ addclasName, placeholder, value, onChange }) {
  return (
    <input
      className={`border border-slate-300 outline-slate-400 px-4 py-2 rounded-md ${addclasName}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
