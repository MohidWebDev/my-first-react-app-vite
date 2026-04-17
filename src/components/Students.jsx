const Students = ({ stdNames }) => {
  return (
    <div>
      {stdNames.map((sNames, index) => {
        return <div key={index}>{sNames}</div>;
      })}
    </div>
  );
};
export default Students;
