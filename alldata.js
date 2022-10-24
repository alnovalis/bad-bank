  function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
return (
    <>
      {users.map((user, i) => (
        <Card
          index={i}
          key={i}
          bgcolor="info"
          txtcolor="white"
          header="All data Summary"
          text={userNumber(i)}
          allData={userInfo(user)}
        />
      ))}
    </>
  );
}
