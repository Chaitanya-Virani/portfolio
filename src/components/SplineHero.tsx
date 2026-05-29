const IFRAME_URL =
  "https://my.spline.design/genkubgreetingrobot-uoIDDDbFuktvMSqy3rjSEtBx/";

export const SplineHero = () => (
  <div className="relative w-full h-full">
    <iframe
      src={IFRAME_URL}
      frameBorder="0"
      width="100%"
      height="100%"
      title="3D Robot"
      allow="autoplay"
      style={{ border: "none", display: "block" }}
    />
    {/* Covers the "Built with Spline" badge at bottom-right (~160×40px) */}
    <div
      aria-hidden
      className="absolute bottom-0 right-0 pointer-events-none"
      style={{ width: 220, height: 56, background: "#0C0C0C" }}
    />
  </div>
);
