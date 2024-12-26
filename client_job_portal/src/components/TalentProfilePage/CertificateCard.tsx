const CertificateCard = (props:any) => {
  return (
    <div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-md">
            <img
              src={`/assets/icon/${props.issuedBy?.toLowerCase()}.png`}
              className="h-7"
              alt={props.issuedBy?.toLowerCase()}
            />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.issuedBy}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end" >
            <div className="text-sm text-mine-shaft-300" >{props.issuedAt}</div>
            <div className="text-sm text-mine-shaft-300">ID: {props.issuedId}</div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
