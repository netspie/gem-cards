import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center mt-48 md:mt-64 px-8 md:px-0">
      <div className="flex flex-col gap-4 max-w-4xl text-center">
        <Typography variant="h3" className="text-4xl font-bold text-gray-700">
          Engage your students with gamified
        </Typography>
        <div className="flex w-full gap-0 justify-center">
          <Typography className="text-center text-6xl font-bold">
            Gem
          </Typography>
          <Typography
            className="text-center text-6xl font-bold"
            color="primary"
          >
            Cards
          </Typography>
        </div>
        <Typography className="text-lg sm:text-xl text-gray-500 mt-2">
          Build future with the best flashcards, designed for teachers and their
          students.
        </Typography>
        <div className="flex sm:flex-row justify-center gap-4 mt-4">
          <Button variant="contained" className="w-fit">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-4xl text-center">
        <Typography className="text-md mt-2 italic">
          Turn your flashcards into a addictive game, making learning effortless
          for your students
        </Typography>
      </div>
    </div>
  );
}
