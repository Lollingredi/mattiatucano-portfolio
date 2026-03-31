export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
}

// ---------------------------------------------------------------------------
// STORYBOARDS
// ---------------------------------------------------------------------------
export const storyboardProjects: Project[] = [
  {
    id: "the-next-stop",
    title: "The Next Stop (Action-Drama)",
    description:
      "A thesis short film, its drama centers around a girl trapped inside of her own nightmare train. Done alongside the precious help and contribution of Twisha Vijay Achari.",
    images: [
      { src: "/images/storyboards/screenshot-2025-05-07-alle-13.57.06.png", alt: "The Next Stop – panel 1" },
      { src: "/images/storyboards/opera_senza_titolo.jpg", alt: "The Next Stop – panel 2" },
      { src: "/images/storyboards/opera_senza_titolo-copia-6.jpg", alt: "The Next Stop – panel 3" },
      { src: "/images/storyboards/opera_senza_titolo-copia-3.jpg", alt: "The Next Stop – panel 4" },
      { src: "/images/storyboards/opera_senza_titolo-copia-5.jpg", alt: "The Next Stop – panel 5" },
      { src: "/images/storyboards/opera_senza_titolo-7.png", alt: "The Next Stop – panel 6" },
    ],
  },
  {
    id: "ulysses-and-polyphemus",
    title: "Ulysses and Polyphemus (Comedy)",
    description:
      "A retelling of the conclusion of the myth of Ulysses and Polyphemus from the Odyssey. Ulysses is shown as an escaping mermaid and Polyphemus as a doubly blinded pirate.",
    images: [
      { src: "/images/storyboards/screenshot-2025-05-07-alle-13.59.29.png", alt: "Ulysses and Polyphemus – panel 1" },
      { src: "/images/storyboards/img_0867.jpg", alt: "Ulysses and Polyphemus – panel 2" },
      { src: "/images/storyboards/img_0868.jpg", alt: "Ulysses and Polyphemus – panel 3" },
      { src: "/images/storyboards/img_0869.jpg", alt: "Ulysses and Polyphemus – panel 4" },
      { src: "/images/storyboards/img_0870.jpg", alt: "Ulysses and Polyphemus – panel 5" },
      { src: "/images/storyboards/img_0871.jpg", alt: "Ulysses and Polyphemus – panel 6" },
      { src: "/images/storyboards/img_0851.jpg", alt: "Ulysses and Polyphemus – panel 7" },
      { src: "/images/storyboards/img_0850.jpg", alt: "Ulysses and Polyphemus – panel 8" },
      { src: "/images/storyboards/img_0926-1.jpg", alt: "Ulysses and Polyphemus – exploration 1" },
      { src: "/images/storyboards/img_0985-copia-1.jpg", alt: "Ulysses and Polyphemus – exploration 2" },
      { src: "/images/storyboards/img_0930-1.jpg", alt: "Ulysses and Polyphemus – exploration 3" },
      { src: "/images/storyboards/img_0929-1.jpg", alt: "Ulysses and Polyphemus – exploration 4" },
      { src: "/images/storyboards/img_0931-copia-1.jpg", alt: "Ulysses and Polyphemus – exploration 5" },
    ],
  },
  {
    id: "mad-scientist",
    title: "Mad Scientist (Comedy)",
    description:
      "A short gag including a small but smart kitty and a dangerous invention.",
    images: [
      { src: "/images/storyboards/screenshot-2025-05-07-alle-14.19.43.png", alt: "Mad Scientist – panel 1" },
    ],
  },
];

// ---------------------------------------------------------------------------
// CHARACTER DESIGN
// ---------------------------------------------------------------------------
export const characterDesignProjects: Project[] = [
  {
    id: "next-stop-protagonist",
    title: "The Next Stop — Protagonist",
    description:
      "Visual development for the protagonist of The Next Stop, my own thesis short film.",
    images: [
      { src: "/images/character-design/img_0203.jpg", alt: "Next Stop protagonist – design 1" },
      { src: "/images/character-design/img_0254.jpg", alt: "Next Stop protagonist – design 2" },
      { src: "/images/character-design/img_0256.jpg", alt: "Next Stop protagonist – design 3" },
      { src: "/images/character-design/img_0257.jpg", alt: "Next Stop protagonist – design 4" },
      { src: "/images/character-design/img_0258.jpg", alt: "Next Stop protagonist – design 5" },
      { src: "/images/character-design/img_0259.jpg", alt: "Next Stop protagonist – design 6" },
    ],
  },
  {
    id: "family-business",
    title: "Family Business",
    description:
      "Character design of both the protagonist of Family Business, my own pitch project.",
    images: [
      { src: "/images/character-design/img_0677.jpg", alt: "Family Business – character 1" },
      { src: "/images/character-design/img_0678.jpg", alt: "Family Business – character 2" },
      { src: "/images/character-design/img_0679.jpg", alt: "Family Business – character 3" },
      { src: "/images/character-design/img_0681.jpg", alt: "Family Business – character 4" },
      { src: "/images/character-design/img_0896.jpg", alt: "Family Business – character 5" },
      { src: "/images/character-design/img_0897.jpg", alt: "Family Business – character 6" },
      { src: "/images/character-design/img_0931.jpg", alt: "Family Business – character 7" },
      { src: "/images/character-design/img_0985-copia.jpg", alt: "Family Business – character 8" },
    ],
  },
  {
    id: "the-controller",
    title: "The Next Stop — The Controller",
    description:
      "Visual development (from the final design to the first) for the Controller, the monster from The Next Stop, my own thesis short film.",
    images: [
      { src: "/images/character-design/img_1026.jpg", alt: "The Controller – design 1" },
      { src: "/images/character-design/img_1027-copia.jpg", alt: "The Controller – design 2" },
      { src: "/images/character-design/img_1027-copia-2.jpg", alt: "The Controller – design 3" },
      { src: "/images/character-design/img_1027-copia-3.jpg", alt: "The Controller – design 4" },
      { src: "/images/character-design/img_1036.jpg", alt: "The Controller – design 5" },
      { src: "/images/character-design/img_1037.jpg", alt: "The Controller – design 6" },
      { src: "/images/character-design/img_1038.jpg", alt: "The Controller – design 7" },
      { src: "/images/character-design/img_1063.jpg", alt: "The Controller – design 8" },
      { src: "/images/character-design/img_1210-2.jpg", alt: "The Controller – design 9" },
      { src: "/images/character-design/img_1211-2.jpg", alt: "The Controller – design 10" },
    ],
  },
  {
    id: "character-development-school",
    title: "Character Development — School Assignment",
    description:
      "Character development for a school assignment. Random elements were given: firework, accountant, and juggler.",
    images: [
      { src: "/images/character-design/img_1280.jpg", alt: "School assignment – firework character" },
      { src: "/images/character-design/img_1281.jpg", alt: "School assignment – accountant character" },
      { src: "/images/character-design/img_1320-1.jpg", alt: "School assignment – juggler character 1" },
      { src: "/images/character-design/img_1321.jpg", alt: "School assignment – juggler character 2" },
      { src: "/images/character-design/img_1558-1.jpg", alt: "School assignment – character study" },
    ],
  },
  {
    id: "polyphemus-ulysses",
    title: "Polyphemus and Ulysses",
    description:
      "Character designs of the protagonists of my school assignment. A pirate-themed retelling of the myth of Polyphemus and Ulysses: the first a doubly blinded pirate, and the second one a curious mermaid.",
    images: [
      { src: "/images/character-design/img_1956.png", alt: "Polyphemus/Ulysses – design 1" },
      { src: "/images/character-design/img_1959.png", alt: "Polyphemus/Ulysses – design 2" },
      { src: "/images/character-design/img_1960.png", alt: "Polyphemus/Ulysses – design 3" },
      { src: "/images/character-design/img_2023.jpg", alt: "Polyphemus/Ulysses – design 4" },
      { src: "/images/character-design/img_2024.jpg", alt: "Polyphemus/Ulysses – design 5" },
      { src: "/images/character-design/img_2042.png", alt: "Polyphemus/Ulysses – design 6" },
      { src: "/images/character-design/img_2043-2.png", alt: "Polyphemus/Ulysses – design 7" },
      { src: "/images/character-design/img_2044-2.png", alt: "Polyphemus/Ulysses – design 8" },
      { src: "/images/character-design/img_2045.png", alt: "Polyphemus/Ulysses – design 9" },
      { src: "/images/character-design/img_2046-2.png", alt: "Polyphemus/Ulysses – design 10" },
      { src: "/images/character-design/img_2047.png", alt: "Polyphemus/Ulysses – design 11" },
      { src: "/images/character-design/img_2070.png", alt: "Polyphemus/Ulysses – design 12" },
      { src: "/images/character-design/img_2071.png", alt: "Polyphemus/Ulysses – design 13" },
    ],
  },
  {
    id: "bard-and-magician",
    title: "Bard and Magician — School Assignments",
    description:
      "Character developments from one of my school assignments. A cheery and flamboyant bard, and a strange and monstrous magician.",
    images: [
      { src: "/images/character-design/img_2081.jpg", alt: "Bard/Magician – design 1" },
      { src: "/images/character-design/img_2235.jpg", alt: "Bard/Magician – design 2" },
      { src: "/images/character-design/img_2236-2.png", alt: "Bard/Magician – design 3" },
      { src: "/images/character-design/img_2718-2.jpg", alt: "Bard/Magician – design 4" },
      { src: "/images/character-design/img_2719.jpg", alt: "Bard/Magician – design 5" },
      { src: "/images/character-design/img_2720.jpg", alt: "Bard/Magician – design 6" },
      { src: "/images/character-design/img_2778.png", alt: "Bard/Magician – design 7" },
      { src: "/images/character-design/img_2789.jpg", alt: "Bard/Magician – design 8" },
      { src: "/images/character-design/img_2790.jpg", alt: "Bard/Magician – design 9" },
      { src: "/images/character-design/img_2806-1.png", alt: "Bard/Magician – design 10" },
      { src: "/images/character-design/img_2822.jpg", alt: "Bard/Magician – design 11" },
      { src: "/images/character-design/img_8586.jpg", alt: "Bard/Magician – design 12" },
      { src: "/images/character-design/img_8587.jpg", alt: "Bard/Magician – design 13" },
      { src: "/images/character-design/img_8588.jpg", alt: "Bard/Magician – design 14" },
    ],
  },
];

// ---------------------------------------------------------------------------
// BACKGROUNDS
// ---------------------------------------------------------------------------
export const backgroundProjects: Project[] = [
  {
    id: "tent-study",
    title: "Tent Study",
    description: undefined,
    images: [
      { src: "/images/backgrounds/img_0206.jpg", alt: "Tent study – background 1" },
      { src: "/images/backgrounds/img_0207-1.jpg", alt: "Tent study – background 2" },
      { src: "/images/backgrounds/img_0208.jpg", alt: "Tent study – background 3" },
      { src: "/images/backgrounds/img_1568.jpg", alt: "Tent study – background 4" },
      { src: "/images/backgrounds/img_2402.png", alt: "Tent study – background 5" },
      { src: "/images/backgrounds/img_3465.jpg", alt: "Tent study – background 6" },
      { src: "/images/backgrounds/img_3466-1.jpg", alt: "Tent study – background 7" },
      { src: "/images/backgrounds/img_3476-1.jpg", alt: "Tent study – background 8" },
    ],
  },
];

// ---------------------------------------------------------------------------
// ILLUSTRATIONS
// ---------------------------------------------------------------------------
export const illustrationImages: GalleryImage[] = [
  { src: "/images/illustrations/img_2806.png", alt: "Illustration 1" },
  { src: "/images/illustrations/img_2422.jpg", alt: "Illustration 2" },
  { src: "/images/illustrations/img_2428.png", alt: "Illustration 3" },
  { src: "/images/illustrations/img_2865.jpg", alt: "Illustration 4" },
  { src: "/images/illustrations/img_2879.jpg", alt: "Illustration 5" },
  { src: "/images/illustrations/img_2146.png", alt: "Illustration 6" },
  { src: "/images/illustrations/opera_senza_titolo-6.jpg", alt: "Illustration 7" },
  { src: "/images/illustrations/img_2968-2.jpg", alt: "Illustration 8" },
  { src: "/images/illustrations/img_3417.jpg", alt: "Illustration 9" },
  { src: "/images/illustrations/img_2402.png", alt: "Illustration 10" },
  { src: "/images/illustrations/img_2485.jpg", alt: "Illustration 11" },
  { src: "/images/illustrations/img_2960-2.jpg", alt: "Illustration 12" },
  { src: "/images/illustrations/img_9506.jpg", alt: "Illustration 13" },
];

// ---------------------------------------------------------------------------
// HOME — showcase picks (one per category)
// ---------------------------------------------------------------------------
export const homeShowcase = [
  {
    href: "/storyboards",
    label: "STORYBOARDS",
    src: "/images/storyboards/img_0850.jpg",
    alt: "Storyboard — The Next Stop",
  },
  {
    href: "/character-design",
    label: "CHARACTER DESIGN",
    src: "/images/character-design/img_0203.jpg",
    alt: "Character design — The Next Stop protagonist",
  },
  {
    href: "/backgrounds",
    label: "BACKGROUNDS",
    src: "/images/backgrounds/img_3465.jpg",
    alt: "Background — Tent study",
  },
  {
    href: "/illustrations",
    label: "ILLUSTRATIONS",
    src: "/images/illustrations/img_2865.jpg",
    alt: "Illustration",
  },
  {
    href: "/2d-animations",
    label: "2D ANIMATIONS",
    src: "/images/home/opera_senza_titolo-98-1.png",
    alt: "Animation trial for thesis film",
  },
];
