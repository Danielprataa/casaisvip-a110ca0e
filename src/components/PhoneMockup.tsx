const PhoneMockup = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-foreground">Veja o grupo </span>
        <span className="text-gradient">por dentro</span>
      </h2>
      <div className="phone-mockup w-72 md:w-80 aspect-[9/16] bg-secondary relative">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster=""
        >
          <source src="/videos/preview.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PhoneMockup;
