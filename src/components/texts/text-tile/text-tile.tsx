import { toClassNames } from "@/utils/toClassNames_utils";
import styles from "./text-title.css";

export const TilteText = ({
    className,
    text,
}: {
    className?: string;
    text: string;
}) => {
    return (
        <h1
            className={toClassNames([
                styles.textTitle,
                className,
            ])}
        >   
            {text}
        </h1>
    )
}