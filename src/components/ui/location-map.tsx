import React from "react";

const GOOGLE_MAPS_URL = "https://share.google/zFvb1DMBSxr5OZ1rr";

interface MapMarkerProps {
  longitude: number;
  latitude: number;
  children: React.ReactNode;
}

export function MapMarker({ children }: MapMarkerProps) {
  return <>{children}</>;
}

interface MarkerContentProps {
  children?: React.ReactNode;
}

export function MarkerContent({ children }: MarkerContentProps) {
  return <>{children}</>;
}

interface MarkerPopupProps {
  children: React.ReactNode;
}

export function MarkerPopup({ children }: MarkerPopupProps) {
  return (
    <div className="absolute z-50 min-w-[200px] rounded-lg bg-white p-4 shadow-lg">
      {children}
    </div>
  );
}

export function LocationMap() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-[#E8DDD0]">
      {/* Map placeholder - replace with actual map implementation */}
      <div className="flex h-full items-center justify-center">
        <MapMarker longitude={-8.0197033} latitude={31.6378142}>
          <MarkerContent />

          <MarkerPopup>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Africa Beauty Marrakech</p>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#3A2215] px-3 py-2 text-[#E8DDD0] transition hover:bg-[#3A2215]/80"
              >
                Voir la localisation
              </a>
            </div>
          </MarkerPopup>
        </MapMarker>
      </div>
    </div>
  );
}
