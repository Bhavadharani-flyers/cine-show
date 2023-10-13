interface ButtonProps {
  ButtonName: string;
  className: string;
}

export const Button = ({ ButtonName, className }: ButtonProps) => {
  return (
    <div className="">
      <button className={className}>{ButtonName}</button>
    </div>
  );
};
