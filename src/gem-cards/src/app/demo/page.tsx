import { Button } from "@mui/material";
import Image from "next/image";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function Demo() {
  return (
    <div className="flex flex-col w-full h-full items-center mt-8 md:mt-0 md:justify-center gap-4">
      <div className="flex flex-col gap-4">
        <div className="card-container w-[300px]">
          <Card
            name="Goku Rose"
            description="An absolute force of a fallen god"
            imagePath="/images/goku-rose.jpg"
          />
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="contained" className="font-bold w-fit bg-red-500">
            <ThumbDown />
          </Button>
          <Button variant="contained" className="w-full font-bold bg-green-600">
            Collect
          </Button>
          <Button variant="contained" className="font-bold w-fit">
            <ThumbUp />
          </Button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 w-full">
            <h6 className="font-bold w-full">Draws</h6>
            <span className="text-nowrap">32</span>
          </div>
          <div className="flex gap-2 w-full">
            <h6 className="font-bold w-full">Collects</h6>
            <span className="text-nowrap">3</span>
          </div>
          <div className="flex gap-2 w-full">
            <h6 className="font-bold w-full">Next Reset</h6>
            <span className="text-nowrap">3:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  name: string;
  description: string;
  imagePath: string;
};

function Card(props: CardProps) {
  return (
    <div
      className="relative group w-full aspect-[3/5] rounded-2xl outline-2 outline-white flex flex-col gap-2 cursor-pointer"
      style={{ containerType: "inline-size" }}
    >
      <Image
        src={`${props.imagePath}`}
        alt="Dope"
        layout="fill"
        objectFit="cover"
        quality={2}
        className="rounded-lg -z-10"
      />

      <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-25 transition-opacity rounded-2xl" />

      <div className="absolute w-full h-full bg-black opacity-0 group-active:opacity-50 transition-opacity rounded-2xl" />

      <div className="relative flex flex-col justify-center w-full py-1 mt-[3%]">
        <div className="absolute bg-black w-full h-full -z-10 opacity-75" />
        <h6
          className="font-bold text-center uppercase"
          style={{ fontSize: "7cqw" }}
        >
          {props.name}
        </h6>
      </div>

      <div className="absolute bottom-[3%] left-0 w-full h-fit">
        <div className="absolute w-full h-full bg-black opacity-75 -z-10" />
        <div className="w-full p-2 flex flex-col gap-2">
          <p
            className="bottom-[10%] text-center w-full"
            style={{ fontSize: "5cqw" }}
          >
            {props.description}
          </p>
          {/* <h5 className="absolute bottom-[4%] left-[4%] uppercase text-sm font-bold">
            Rare
          </h5> */}
        </div>
      </div>
    </div>
  );
}
