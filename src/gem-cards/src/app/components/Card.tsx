import { Typography } from "@mui/material";
import Image from "next/image";

export type CardProps = {
  name?: string;
  description?: string;
  imagePath: string;
  detailLevel?: "normal" | "low";
};

export function Card(props: CardProps) {
  return (
    <div
      className="relative group w-full aspect-[3/5] rounded-2xl flex flex-col gap-2 cursor-pointer"
      style={{ containerType: "inline-size" }}
    >
      <Image
        src={`${props.imagePath}`}
        alt="Dope"
        layout="fill"
        objectFit="cover"
        quality={2}
        className="rounded-2xl -z-10"
        style={{
          outlineWidth: "1cqw",
          outlineColor: "black",
          outlineStyle: "solid",
        }}
      />

      <div className="w-full h-full rounded-2xl overflow-hidden">
        <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-25 transition-opacity rounded-2xl" />
        <div className="absolute w-full h-full bg-black opacity-0 group-active:opacity-50 transition-opacity rounded-2xl" />

        <div className="relative flex flex-col justify-center w-full py-1 mt-[3%]">
          <div className="absolute bg-black w-full h-full -z-10 opacity-75" />
          <Typography variant="h6"
            className="font-bold text-center uppercase text-white"
            style={{ fontSize: "7cqw" }}
          >
            {props.name}
          </Typography>
        </div>

        {(props.detailLevel === undefined ||
          props.detailLevel === "normal") && (
          <>
            <div className="absolute bottom-[3%] left-0 w-full h-fit">
              <div className="absolute w-full h-full bg-black opacity-75 -z-10" />
              <div className="w-full p-2 flex flex-col gap-2">
                <Typography
                  className="bottom-[10%] text-center w-full text-white"
                  style={{ fontSize: "5cqw" }}
                >
                  {props.description}
                </Typography>
                {/* <h5 className="absolute bottom-[4%] left-[4%] uppercase text-sm font-bold">
              Rare
            </h5> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
