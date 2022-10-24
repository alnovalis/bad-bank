function Home() {
  return (
    <Card
      style="width: 8rem;"
      bgcolor="primary"
      txtcolor="light"
      header="BadBank Landing Module"
      title="Welcome to Bad Bank!"
      text="Interact with the menu to begin."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
