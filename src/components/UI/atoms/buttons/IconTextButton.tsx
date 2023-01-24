interface IconTextButton {
  id: string;
  title: string;
}

const IconTextButton = ({ id, title }: IconTextButton) => (
  <button className=" border-2 bg-white hover:bg-white active:bg-white border-lightGreyStroke hover:border-invisibleGreen active:border-primary rounded-md p-2.5">
    <svg width="24" height="24" className="text-primary inline">
      <use xlinkHref={"#" + id} />
    </svg>
    <span className="text-textPrimary active:text-primary pl-1">{title}</span>
  </button>
);
export default IconTextButton;
