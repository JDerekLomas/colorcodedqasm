interface VideoHeroProps {
  title: string;
  videoSrc: string;
  mobileVideoSrc?: string;
  overlayOpacity?: number;
}

export function VideoHero({
  title,
  videoSrc,
  mobileVideoSrc,
  overlayOpacity = 0.3,
}: VideoHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Mobile Video */}
      {mobileVideoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src={mobileVideoSrc} type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
