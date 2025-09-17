import { toClassNames } from "@/utils/toClassNames_utils";

export const TextLabel = ({
    className,
    text,
    htmlFor,
}: {
    className?: string;
    text: string;
    htmlFor?: string;
}) => {
    return (
        <label
            className={toClassNames([
                className,
            ])}
            htmlFor={htmlFor}            
        >
            {text}
        </label>
    )
}