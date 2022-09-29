const EXAMPLE = {
   name: "ABC",
   image: ["abc", "xyz"],
};

export type Anime = {
   id?: string;
   [key: string]: any;
} & Partial<typeof EXAMPLE>;

export interface PostFormInput {}
