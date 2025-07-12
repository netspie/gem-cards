import { Button } from "@mui/material";
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
