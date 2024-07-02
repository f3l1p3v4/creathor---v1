"use client"
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
        if (pixelId) {
          ReactPixel.init(pixelId);
          ReactPixel.pageView();
        } else {
          console.error("Facebook Pixel ID is not defined");
        }
      })
      .catch((error) => {
        console.error("Failed to load Facebook Pixel", error);
      });
  }, [pathname, searchParams]);

  return null;
};

export const SuspenseFacebookPixelEvents: React.FC = () => {
  return (
    <FacebookPixelEvents />
  );
};
