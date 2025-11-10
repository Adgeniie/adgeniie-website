// src/components/ResponsiveVideo.jsx
import React, { useEffect, useState } from "react";

/**
 * ResponsiveVideo
 * Props:
 *  - desktopSrc (string) required
 *  - mobileSrc  (string) required
 *  - poster     (string) optional
 *  - preload    (string) optional: "auto" | "metadata" | "none" (defaults to "metadata")
 *  - className  (string) optional
 */
const ResponsiveVideo = ({ desktopSrc, mobileSrc, poster, preload = "metadata", className = "absolute inset-0 w-full h-full object-cover", ...props }) => {
  const [src, setSrc] = useState(desktopSrc);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isMobile = window.innerWidth <= 1024;
    const saveData = connection?.saveData;
    const effectiveType = connection?.effectiveType || "";

    const choose = () => {
      // Respect user's reduced-data preference
      if (saveData) return mobileSrc;

      // slow networks -> mobile
      if (effectiveType.includes("2g") || effectiveType.includes("slow-2g")) return mobileSrc;
      if (effectiveType.includes("3g") && isMobile) return mobileSrc;

      // smaller screens -> mobile
      if (isMobile) return mobileSrc;

      // otherwise desktop
      return desktopSrc;
    };

    // initial
    setSrc(choose());

    // update on resize and connection change
    const onChange = () => setSrc(choose());
    window.addEventListener("resize", onChange);

    if (connection && connection.addEventListener) {
      try { connection.addEventListener("change", onChange); } catch (e) { /* some browsers use onchange, fallback handled below */ }
    } else if (connection) {
      // fallback: some browsers use onchange
      connection.onchange = onChange;
    }

    return () => {
      window.removeEventListener("resize", onChange);
      if (connection && connection.removeEventListener) {
        try { connection.removeEventListener("change", onChange); } catch (e) {}
      } else if (connection) {
        connection.onchange = null;
      }
    };
  }, [desktopSrc, mobileSrc]);

  // Render a single <video> with chosen src (keeps markup simple)
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload={preload}
      poster={poster}
      className={className}
      src={src}
      {...props}
    >
      <source src={src} type="video/mp4" />
      {/* fallback text */}
      Your browser does not support the video tag.
    </video>
  );
};

export default ResponsiveVideo;
