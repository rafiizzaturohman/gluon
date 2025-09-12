import { CameraIcon, PhotoEditIcon, WebDevIcon } from "@/app/icons";

export interface iDoItem {
  label: string;
  text: string;
  icon: React.ElementType;
}

export const iDo: iDoItem[] = [
  {
    label: "Web Development",
    text: "I create responsive and user-friendly websites with clean code and modern design, ensuring great performance on all devices.",
    icon: WebDevIcon,
  },
  {
    label: "Photography",
    text: "I capture moments with creativity and precision, delivering high-quality photographs that reflect stories, emotions, and timeless memories.",
    icon: CameraIcon,
  },
  {
    label: "Photo Editing",
    text: "Transforming ordinary shots into extraordinary visuals. Through color, tone, and detail, I craft photos that tell unique and captivating stories.",
    icon: PhotoEditIcon,
  },
];
