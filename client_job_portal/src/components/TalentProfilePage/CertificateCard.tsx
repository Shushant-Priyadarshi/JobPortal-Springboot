const CertificateCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-md">
            <img
              src={`/assets/icon/google.png`}
              className="h-7"
              alt={"google"}
            />
          </div>
          <div>
            <div className="font-semibold">Cloud Certification</div>
            <div className="text-sm text-mine-shaft-300">
              Google
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end" >
            <div className="text-sm text-mine-shaft-300" >Jun 2023</div>
            <div className="text-sm text-mine-shaft-300">ID: IASDNDAS123</div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
