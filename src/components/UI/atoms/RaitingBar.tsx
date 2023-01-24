interface RatingBar {
  title: string;
  htmlFor?: string;
}

const RatingBar = ({ title, htmlFor }: RatingBar) => (
  <label htmlFor={htmlFor} className="text-textSecondary">
    {title}
  </label>
);
export default RatingBar;
