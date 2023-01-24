interface Label {
  title: string;
  htmlFor?: string;
}

const Label = ({ title, htmlFor }: Label) => (
  <label htmlFor={htmlFor} className="text-textSecondary">
    {title}
  </label>
);
export default Label;
