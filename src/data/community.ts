import photo01 from "@/assets/images/community-01.webp";
import photo02 from "@/assets/images/community-02.webp";
import photo03 from "@/assets/images/community-03.webp";
import photo04 from "@/assets/images/community-04.webp";
import photo05 from "@/assets/images/community-05.webp";
import photo06 from "@/assets/images/community-06.webp";
import photo07 from "@/assets/images/community-07.webp";
import photo08 from "@/assets/images/community-08.webp";
import photo09 from "@/assets/images/community-09.webp";
import photo10 from "@/assets/images/community-10.webp";
import type { CommunityPhoto } from "./types";

/**
 * The image files include the drop shadow and are exported at 2x, so each
 * one is displayed at half its pixel width. x / y are the top-left corners
 * measured in the desktop Figma frame, relative to the 500px lilac circle.
 * Order: four columns, top to bottom.
 */
export const communityPhotos: CommunityPhoto[] = [
  { id: "community-01", src: photo01, x: 15.5, y: 93.4 },
  { id: "community-02", src: photo02, x: -19.8, y: 260.4 },
  { id: "community-03", src: photo03, x: 134.2, y: 12.8 },
  { id: "community-04", src: photo04, x: 134.2, y: 195.7 },
  { id: "community-05", src: photo05, x: 134.2, y: 381.1 },
  { id: "community-06", src: photo06, x: 252.9, y: 20.8 },
  { id: "community-07", src: photo07, x: 252.9, y: 170.9 },
  { id: "community-08", src: photo08, x: 252.9, y: 321.7 },
  { id: "community-09", src: photo09, x: 371.7, y: 73.4 },
  { id: "community-10", src: photo10, x: 371.7, y: 290.8 },
];
