interface IconButton {
  id: string;
}

const IconButton = ({ id }: IconButton) => (
  <button className="text-primary bg-white hover:bg-invisibleGreen active:bg-primary border-2 border-invisibleGreen active:border-primary active:text-white rounded-md p-2.5">
    <svg width="24" height="24">
      <use xlinkHref={"#" + id} />
    </svg>
  </button>
);
export default IconButton;
