const UserInfo = ({ name, email, role }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
};

export default UserInfo;