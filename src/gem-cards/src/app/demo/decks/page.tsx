import { Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";

function DeckPage() {
  return (
    <div className="flex flex-col gap-4 lg:px-16 xl:px-40 2xl:px-60">
      <div className="flex flex-col gap-4 mb-8">
        <Typography variant="h6" className="text-center uppercase">
          Own Decks
        </Typography>
        <DeckListItem
          name="Anime Characters"
          imagePath="/images/anime-pack/3.webp"
        />
        <DeckListItem name="Kanji Deck" />
      </div>
      <Divider className="bg-black" />
      <div className="flex flex-col gap-4 mb-8">
        <Typography variant="h6" className="text-center uppercase">
          Other Decks
        </Typography>
        <DeckListItem name="Some Cards" imagePath="/images/anime-pack/5.webp" />
        <DeckListItem name="Kanji Deck" />
        <DeckListItem name="Kanji Deck" />
        <DeckListItem name="Kanji Deck" />
        <DeckListItem name="Kanji Deck" />
        <DeckListItem name="Kanji Deck" />
        <DeckListItem name="Kanji Deck" />
      </div>
    </div>
  );
}

type DeckListItemProps = {
  name: string;
  imagePath?: string;
};

function DeckListItem(props: DeckListItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full md:h-36 bg-slate-200 rounded-2xl p-4">
      {props.imagePath && (
        <div className="relative w-24 h-24 md:h-full md:w-fit md:aspect-square bg-slate-100 rounded-2xl overflow-hidden">
          <Image
            src={props.imagePath}
            alt="Dope"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      )}
      {!props.imagePath && (
        <div className="relative flex justify-center items-center h-full aspect-square bg-slate-100 rounded-2xl overflow-hidden">
          <ImageIcon className="w-12 h-12 opacity-25" />
        </div>
      )}
      <Typography className="font-bold text-xl max-w-full grow-1">{props.name}</Typography>
      <Button variant="contained" href="/demo/decks/1">
        Go
      </Button>
    </div>
  );
}

export default DeckPage;
