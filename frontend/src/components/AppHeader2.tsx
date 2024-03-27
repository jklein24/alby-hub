type Props = {
  title: string;
  description: string;
  contentRight?: React.ReactNode;
};

function AppHeader2({ title, description, contentRight }: Props) {
  return (
    <div className="flex justify-between border-b border-border pb-6">
      <div className="flex-1">
        <h1 className="text-xl lg:text-3xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-3">{contentRight}</div>
    </div>
  );
}

export default AppHeader2;
