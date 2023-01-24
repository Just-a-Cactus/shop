interface Input {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

const Input = ({ type, name, id, placeholder }: Input) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className="placeholder-textSecondary border border-lightGreyStroke hover:drop-shadow outline-none p-3.5 rounded-md"
  />
);
export default Input;
