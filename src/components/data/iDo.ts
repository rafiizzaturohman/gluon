import { CameraIcon, PhotoEditIcon, WebDevIcon } from "@/app/icons";

export interface iDoItem {
  label: string;
  text: string;
  icon: React.ElementType;
}

export const iDo: iDoItem[] = [
  {
    label: "Web Development",
    text: "I build responsive, user-friendly websites with clean code and modern design.",
    icon: WebDevIcon,
  },
  {
    label: "Photography",
    text: "I capture creative, high-quality photos that tell stories and preserve emotions.",
    icon: CameraIcon,
  },
  {
    label: "Photo Editing",
    text: "I transform ordinary shots into captivating visuals that tell unique stories.",
    icon: PhotoEditIcon,
  },
];
