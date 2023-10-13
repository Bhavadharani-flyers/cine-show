type ButtonProps = {
  ButtonName: any;
  className: any;
};

export const Button = ({ ButtonName, className }: ButtonProps) => {
  return (
    <div className="">
      <button className={className}>{ButtonName}</button>
    </div>
  );
};
