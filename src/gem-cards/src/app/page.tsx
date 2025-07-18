import {
  Diamond,
  DiamondOutlined,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap gap-16 w-full h-full items-center mt-48 px-8 md:px-20">
      <div className="flex flex-col gap-4 w-full text-center items-center">
        <Typography variant="h3" className="text-4xl font-bold text-gray-700 wrap-break-word text-wrap">
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
          Make flashcards and turn it into an addictive game, making learning
          effortless for your students.
        </Typography>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <TextField id="email" label="Email" size="small" className="w-92" />
          <Button variant="contained" className="w-full md:w-fit">
            Sign Up
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-64 w-full justify-center">
          <Card front="火" name="Fire" gemCount={4} xp={200} />
          <Card front="水" name="Water" gemCount={3} xp={300} />
          <Card front="土" name="Earth" gemCount={5} xp={150} />
          <Card front="空" name="Air" gemCount={2} xp={400} />
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  front: string;
  name: string;
  gemCount: number;
  xp: number;
  imagePath?: string;
};

function Card(props: CardProps) {
  return (
    <Paper className="md: w-[300px] aspect-[4/5]">
      <div className="relative h-[70%] flex items-center justify-center">
        <Chip
          className="absolute left-3 top-3"
          label={`${props.xp} XP`}
          color="primary"
          size="small"
        />
        {/* <Image
            src={props.imagePath}
            alt="Dope"
            layout="fill"
            objectFit="cover"
          /> */}
        <Typography className="text-[100px]">{props.front}</Typography>
      </div>
      <Divider />
      <div className="w-full flex flex-col gap-2 items-start p-2 px-3">
        <Typography className="font-bold">{props.name}</Typography>
        <div className="w-full flex flex-wrap">
          {Array.from({ length: 5 }).map((_, i) =>
            i < props.gemCount ? (
              <Diamond key={i} color="primary" />
            ) : (
              <DiamondOutlined key={i} color="disabled" />
            )
          )}
        </div>
      </div>
    </Paper>
  );
}
