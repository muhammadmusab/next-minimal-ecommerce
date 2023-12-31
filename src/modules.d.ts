declare module "react-rating-stars-component" {
  export type ReactStarsProps = Partial<{
    // export type
    classNames: string;
    count: number;
    value: number;
    char: string;
    color: string;
    activeColor: string;
    size: number | string; // =>  size: number;
    edit: boolean;
    isHalf: boolean;
    emptyIcon: JSX.Element;
    halfIcon: JSX.Element;
    filledIcon: JSX.Element;
    a11y: boolean;
    onChange: (newRating?: number) => void;
  }>;

  export default function ReactStars(props?: ReactStarsProps): JSX.Element;
}
