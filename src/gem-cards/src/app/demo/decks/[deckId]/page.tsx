import { Card } from "@/app/components/Card";
import { Button } from "@mui/material";
import React from "react";

function DeckPage() {
  const imagePaths = Array.from(
    { length: 19 },
    (_, i) => `/images/anime-pack/${i + 2}.webp`
  );

  const characterNames = [
    "Naruto",
    "Sasuke",
    "Goku",
    "Luffy",
    "Ichigo",
    "Deku",
    "Tanjiro",
    "Levi",
    "Eren",
    "Saitama",
    "Vegeta",
    "Killua",
    "Gon",
    "Shinra",
    "Gojo",
    "Light",
    "Zoro",
    "Inuyasha",
    "Ed",
    "Yusuke",
  ];

  return (
    <div className="flex flex-col w-full h-full items-center mt-8 md:mt-0 md:justify-center gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {imagePaths.map((path, idx) => (
          <div key={idx} className="relative w-[150px]">
            <Card
              imagePath={path}
              detailLevel="low"
              name={characterNames[idx % characterNames.length]} // wrap around if needed
            />
            <Button
              variant="contained"
              href="/demo"
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              Go
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeckPage;
