function Home(){

  const ctx = React.useContext(UserContext);

  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const welcomeMessage = "Welcome to the bank!";
  const textMessage = "You can move around using the navigation bar."

  return (
    <Card
      txtcolor="black"
      bgcolor="red"
      header="BadBank Landing Module"
      title={welcomeMessage}
      text={textMessage}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
