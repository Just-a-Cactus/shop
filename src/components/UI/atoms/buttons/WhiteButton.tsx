interface WhiteButton {
  title: string;
}

const WhiteButton = ({ title }: WhiteButton) => (
  <button className="font-medium text-primary bg-white hover:bg-invisibleGreen active:bg-invisibleGreen border-2 border-transparent hover:border-transparent active:border-primary rounded-md px-7 py-3.5">
    {title}
  </button>
);
export default WhiteButton;
