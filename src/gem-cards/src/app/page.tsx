import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Button variant="contained" className="bg-red-400 h-8 font-bold" href="/demo">Play</Button>
    </div>
  );
}
