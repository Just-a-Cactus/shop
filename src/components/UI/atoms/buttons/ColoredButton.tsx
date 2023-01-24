interface ColoredButton {
  title: string;
}

const ColoredButton = ({ title }: ColoredButton) => (
  <button className="font-medium text-white bg-primary hover:bg-hover active:bg-primary border-2 border-primary hover:border-hover active:border-primary rounded-md px-7 py-3.5">
    {title}
  </button>
);
export default ColoredButton;
