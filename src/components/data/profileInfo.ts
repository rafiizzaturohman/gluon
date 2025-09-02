import {
  CakeIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export interface ProfileItem {
  label: string;
  value: string;
  icon: React.ElementType;
  link?: string;
}

export const profileInfo: ProfileItem[] = [
  {
    label: "email",
    value: "rafiizzaturohman@gmail.com",
    icon: EnvelopeIcon,
    link: "mailto:rafiizzaturohman@gmail.com",
  },
  {
    label: "phone",
    value: "+62 896-4634-3783",
    icon: PhoneIcon,
    link: "https://wa.me/6289646343783",
  },
  {
    label: "birthday",
    value: "May 14, 2004",
    icon: CakeIcon,
  },
  {
    label: "location",
    value: "Bandung, Indonesia",
    icon: MapPinIcon,
  },
];
