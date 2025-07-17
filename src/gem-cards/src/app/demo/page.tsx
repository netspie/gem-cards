import { Button, Typography } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Card } from "@/app/components/Card";

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
          <Button variant="contained" className="font-bold w-fit bg-red-600">
            <ThumbDown />
          </Button>
          <Button variant="contained" className="w-full font-bold bg-orange-400">
            Collect
          </Button>
          <Button variant="contained" className="font-bold w-fit bg-blue-600">
            <ThumbUp />
          </Button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 w-full">
            <Typography className="font-bold w-full">Draws</Typography>
            <Typography className="text-nowrap">32</Typography>
          </div>
          <div className="flex gap-2 w-full">
            <Typography className="font-bold w-full">Collects</Typography>
            <Typography className="text-nowrap">3</Typography>
          </div>
          <div className="flex gap-2 w-full">
            <Typography className="font-bold w-full">Next Reset</Typography>
            <Typography className="text-nowrap">3:00 PM</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
