"use client";

import {
  Diamond,
  DiamondOutlined,
  LocalFireDepartment,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Button,
  Chip,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  const shadowClass =
    "hover:shadow-2xl transition-all duration-200 ease-in-out";

  return (
    <div className="relative flex flex-col gap-12 xl:gap-22 w-full h-fit items-center xl:justify-center mt-12 md:mt-36 xl:px-20 mb-24 xl:mb-0">
      <div
        className="fixed -translate-[60%] top-0 rounded-full -z-10 opacity-10"
        style={{
          background: theme.palette.primary.main,
          width: 1000,
          height: 1000,
        }}
      />
      <div
        className="fixed right-0 bottom-0 translate-1/2 top-0 rounded-full -z-10 opacity-10 bg-blue-800"
        style={{
          width: 1000,
          height: 1000,
        }}
      />
      <Stack className="w-full xl:flex-row xl:gap-24 justify-center">
        <div className="flex flex-col gap-4 w-full shrink text-center items-center px-8">
          <Typography
            variant="h3"
            className="text-4xl font-bold text-gray-700 wrap-break-word text-wrap"
          >
            Make Learning Fun and Interactive with
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
            Make flashcards and turn them into an addictive collecting game,{" "}
            <br /> making knowledge absorption effortless - for teachers and
            learners.
          </Typography>
          <div className="flex flex-col items-center mt-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
              <SpyTextField label="Name" className="w-full" />
              <SpyTextField label="Email" className="w-full" required />
            </div>
            <Stack className="flex-row w-full gap-4 items-center">
              <Button variant="contained" className="w-full mt-4 text-nowrap">
                Get Notified About Launch
              </Button>
            </Stack>
            <Typography className="text-sm mt-2" color="primary">
              We&apos;ll never share your info with anyone
            </Typography>
            <Typography className="font-bold mt-2">or</Typography>
            <Button
              variant="contained"
              className="w-full mt-2 bg-orange-500 text-nowrap text-white"
            >
              Become a Founding Member Now for 5$
            </Button>
            <Stack className="mt-4">
              <Typography className="text-orange-500 text-sm">
                It is a one-time payment. Your subscription will automatically
                start after launch.
              </Typography>
              <Typography className="mt-2 text-sm" color="primary">
                You can refund your purchase back anytime — risk-free commitment
                to our early supporters
              </Typography>
            </Stack>
            <Stack className="flex-row gap-3 mt-8">
              <GemDisplay gemCount={1} hiddenEmptyGems />
              <Typography className="text-nowrap text-sm text-gray-500 italic">
                Built on proven learning methods used by millions
              </Typography>
              <GemDisplay gemCount={1} hiddenEmptyGems />
            </Stack>
          </div>
        </div>
        <Stack
          className="relative grow-1 w-[70%] pl-32"
          style={{ containerType: "inline-size" }}
        >
          <Card
            front="Fire"
            frontSize={12}
            frontClassName="font-bold"
            name="火"
            gemCount={4}
            xp={200}
            className="w-[250px] outline-4 outline-red-600"
          />
          <Card
            front="Fire"
            frontSize={12}
            frontClassName="font-bold"
            name="火"
            gemCount={4}
            xp={200}
            className="absolute w-[250px] translate-[65%] outline-4 outline-red-600"
          />
          {/* <div
            className="p-2 rounded-2xl"
            style={{ background: theme.palette.primary.main }}
          >
            <Stack className="xl:w-[350px] aspect-[4/5] bg-white rounded-xl p-3 gap-2">
              <Typography className="w-ful text-center uppercase font-bold">
                Create Simple Gemcard
              </Typography>
              <SpyTextField
                label="Question"
                defaultValue="What is the capital of Australia?"
              />
              <SpyTextField label="Answer" defaultValue="Canberra" />
              <Button variant="contained">Create</Button>
            </Stack>
          </div> */}
        </Stack>
      </Stack>
      <div className="flex gap-16 w-full px-8 mt-36 bg-blue-100 rounded-xl p-12">
        {/* */}
        <Timeline position="alternate" className="w-full shrink-1">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="font-bold">
              Create Your Deck
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="">Add Flashcards</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="font-bold">
              Turn Flashcards Into Collectible Cards
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent className="">
              Enjoy the Game and Learn without Pain
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="flex flex-col gap-4 w-full md:w-3/4 px-8">
          <Typography className="text-4xl text-center font-bold">
            How it works?
          </Typography>
          <Typography className="text-center text-xl text-gray-500 uppercase font-bold">
            Start by creating your own deck
          </Typography>
          <Typography className="text-center text-xl">
            Start by creating your own deck and adding flashcards tailored to
            what you want to learn. Then, transform these flashcards into
            collectible cards, turning study into a fun and engaging game.
            Finally, enjoy learning effortlessly through gameplay that keeps you
            motivated and helps you retain knowledge without the usual stress or
            pain.
          </Typography>
        </div>
      </div>
      <div className="flex gap-4 w-full px-8">
        <div className="flex flex-col gap-4 w-full md:w-1/2 px-8">
          <Typography className="text-4xl font-bold">
            Who is this for?
          </Typography>
          <List className="">
            <ListItem>Teachers - engage your students</ListItem>
            <ListItem>
              Streamers, Content Creators - engage your audience
            </ListItem>
            <ListItem>
              Individual Learners - stay motivated with your study
            </ListItem>
          </List>
        </div>
        {/* */}
        <div
          className="p-4 rounded-xl w-full md:w-1/2"
          style={{ background: theme.palette.primary.main }}
        ></div>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 px-8">
        <div>
          <Typography className="text-white text-center font-bold">
            Don&apos;t make learning a chore! Make it fun! Make it a game!
          </Typography>
        </div>
      </div>
      <Stack className="relative flex-row flex-wrap w-fit gap-3 justify-center items-center overflow-clip px-20 xl:px-0">
        {/* <Card front="火" frontSize={36} name="Fire" gemCount={4} xp={200} /> */}
        <div
          className="p-3 rounded-2xl "
          style={{ background: theme.palette.primary.main }}
        >
          <Card
            front="Fire"
            frontSize={12}
            frontClassName="font-bold"
            name="火"
            gemCount={4}
            xp={200}
          />
        </div>
        <div
          className="p-3 rounded-2xl "
          style={{ background: theme.palette.primary.main }}
        >
          <Card
            front={
              <LocalFireDepartment
                style={{ width: "40cqw", height: "40cqw" }}
                color="primary"
              />
            }
            frontSize={12}
            frontClassName="font-bold"
            name="火"
            gemCount={4}
            xp={200}
          />
        </div>
        <div
          className="p-3 rounded-2xl "
          style={{ background: theme.palette.primary.main }}
        >
          <Stack className="xl:w-[350px] aspect-[4/5] bg-white rounded-xl p-3 gap-2">
            <Typography className="w-ful text-center uppercase font-bold">
              Create Simple Gemcard
            </Typography>
            <SpyTextField
              label="Question"
              defaultValue="What is the capital of Australia?"
            />
            <SpyTextField label="Answer" defaultValue="Canberra" />
            <Button variant="contained">Create</Button>
          </Stack>
        </div>
        <div
          className="p-3 rounded-2xl "
          style={{ background: theme.palette.primary.main }}
        >
          <Stack className="xl:w-[350px] aspect-[4/5] bg-white rounded-xl p-3 gap-2">
            <Typography className="w-ful text-center uppercase font-bold">
              Create Multiside Gemcard
            </Typography>
            <div className="flex gap-2">
              <SpyTextField label="Original" defaultValue="水" />
              <SpySelect label="Type">
                <MenuItem value="Character">Character</MenuItem>
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Image">Image</MenuItem>
                <MenuItem value="Audio">Audio</MenuItem>
              </SpySelect>
            </div>
            <SpyTextField label="Reading" defaultValue="みず" />
            <SpyTextField label="Meaning" defaultValue="Water" />
            <Button variant="contained">Create</Button>
          </Stack>
        </div>
        <div className="flex gap-4 w-full px-8 mt-36">
          {/* */}
          <div
            className="p-4 rounded-xl w-full md:w-1/2"
            style={{ background: theme.palette.primary.main }}
          ></div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 px-8">
            <Typography className="text-4xl font-bold text-end">
              About Author
            </Typography>
            <List className="">
              <ListItem>Teachers - engage your students</ListItem>
              <ListItem>
                Streamers, Content Creators - engage your audience
              </ListItem>
              <ListItem>
                Individual Learners - stay motivated with your study
              </ListItem>
            </List>
          </div>
        </div>
        {/* <div className="flex gap-2 w-full">
          <Button variant="contained" className="w-fit">
            <ArrowLeft />
          </Button>
          <Button variant="contained" className="w-full">
            Collect
          </Button>
          <Button variant="contained" className="w-fit">
            <ArrowRight />
          </Button>
        </div> */}
        {/* <Card
          front="水"
          name="Water"
          gemCount={3}
          xp={300}
          className="absolute left-1/2 -translate-x-[50%] -rotate-z-[10deg] origin-bottom hover:rotate-z-0 hover:scale-150 transition-all duration-200 ease-in-out  hover:z-10"
        />
        <Card
          front="土"
          name="Earth"
          gemCount={5}
          xp={150}
          className="absolute left-1/2 -translate-x-[50%] rotate-z-[10deg] origin-bottom hover:rotate-z-0 hover:scale-150 transition-all duration-200 ease-in-out  hover:z-10"
        />
        <Card
          front="空"
          name="Air"
          gemCount={2}
          xp={400}
          className="absolute left-1/2 -translate-x-[50%] rotate-z-[30deg] origin-bottom hover:rotate-z-0 hover:scale-150 transition-all duration-200 ease-in-out  hover:z-10"
        /> */}
      </Stack>
      {/* <Stack
        className="flex-row flex-wrap w-full justify-center p-8 gap-4 md:hidden"
        style={{ background: theme.palette.primary.main }}
      >
        <Card
          front="火"
          name="Fire"
          gemCount={4}
          xp={200}
          className={`${tiltClassName}`}
        />
        <Card
          front="水"
          name="Water"
          gemCount={3}
          xp={300}
          className={`${tiltClassName}`}
        />
        <Card
          front="土"
          name="Earth"
          gemCount={5}
          xp={150}
          className={`${tiltClassName}`}
        />
        <Card
          front="空"
          name="Air"
          gemCount={2}
          xp={400}
          className={`${tiltClassName}`}
        />
      </Stack> */}
    </div>
  );
}

type SpySelectProps = {
  label: string;
  children?: React.ReactNode;
};

function SpySelect(props: SpySelectProps) {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl className="min-w-1/2" focused>
      <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select
        labelId={props.label}
        id={props.label}
        label={props.label}
        size="small"
        className="text-black"
        color="primary"
        value={value}
        onChange={(ev: SelectChangeEvent) =>
          setValue(ev.target.value as string)
        }
      >
        {props.children}
      </Select>
    </FormControl>
  );
}

type SpyProps = {
  className?: string;
  style?: React.CSSProperties;
};

type SpyTextFieldProps = SpyProps & {
  label: string;
  defaultValue?: string;
  required?: boolean;
};

function SpyTextField(props: SpyTextFieldProps) {
  return (
    <TextField
      id={props.label}
      label={props.label}
      size="small"
      className={twMerge("w-full", props.className)}
      // style={{ background: theme.palette.background.default, ...props.style }}
      defaultValue={props.defaultValue}
      focused
      required={props.required}
    />
  );
}

type CardProps = {
  front: string | React.ReactNode;
  frontSize?: number;
  frontClassName?: string;

  name: string;
  gemCount: number;
  xp: number;
  imagePath?: string;
  className?: string;
};

function Card(props: CardProps) {
  return (
    <Paper
      className={twMerge(
        `relative flex flex-col items-center justify-center w-full aspect-[4/5] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-clip bg-white rounded-xl`,
        props.className
      )}
      style={{ containerType: "inline-size" }}
    >
      {/* <div className="absolute h-[300%] w-[100%] bg-gray-100 rotate-z-45 -z-10 translate-x-96 " />
        <div className="absolute h-[300%] w-[100%] bg-gray-100 -rotate-z-45 -z-10 translate-y-96 " /> */}
      <Stack
        className="absolute w-full h-full"
        style={{ gap: "4cqw", padding: "2cqw" }}
      >
        <Chip
          className="left-0 top-0 size-fit"
          label={`${props.xp} XP`}
          color="primary"
          size="small"
          style={{ fontSize: "4cqw" }}
        />
        <GemDisplay
          gemCount={props.gemCount}
          className="flex-col left-0"
          iconClassName="size-[8cqw]"
        />
        <Tooltip title="Rarity - Can be - Normal, Rare, Legendary">
          <Chip
            className="absolute size-fit text-white cursor-pointer"
            label={`LEGENDARY`}
            size="small"
            color="primary"
            style={{ fontSize: "4cqw", right: "2cqw", bottom: "2cqw" }}
          />
        </Tooltip>
      </Stack>
      <div className="relative h-[50%] flex items-center justify-center">
        {/* <Image
            src={props.imagePath}
            alt="Dope"
            layout="fill"
            objectFit="cover"
          /> */}
        {typeof props.front === "string" ? (
          <Typography
            style={{ fontSize: `${props.frontSize || 10}cqw` }}
            className={twMerge(``, props.frontClassName)}
          >
            {props.front}
          </Typography>
        ) : (
          props.front
        )}
      </div>
      {/* <Divider /> */}
      <div className="w-full shrink-1 grow-0 flex flex-col gap-2 items-center">
        <Typography className="font-bold" style={{ fontSize: "6cqw" }}>
          {props.name}
        </Typography>
        <Stack className="h-full" />
        <div className="flex flex-col items-center mb-2"></div>
      </div>
    </Paper>
  );
}

type GemDisplayProps = {
  gemCount: number;
  className?: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  hiddenEmptyGems?: boolean;
};

function GemDisplay(props: GemDisplayProps) {
  return (
    <div className={twMerge("w-full flex flex-wrap", props.className)}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < props.gemCount ? (
          <Diamond
            key={i}
            color="primary"
            className={props.iconClassName}
            style={props.iconStyle}
          />
        ) : (
          !props.hiddenEmptyGems && (
            <DiamondOutlined
              key={i}
              color="disabled"
              className={props.iconClassName}
              style={props.iconStyle}
            />
          )
        )
      )}
    </div>
  );
}
