'use client';

import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './ListCard.css';

type Props = {
    name: string;
    itemCount: number;
    isExpanded: boolean; // カード自身が展開中か
    isFolded: boolean; // 他のカードが展開中で、自分は薄くすべきか
    onClick: () => void;
    onDelete: () => void;
};

const ListCard = ({
    name,
    itemCount,
    isExpanded,
    isFolded,
    onClick,
    onDelete
}: Props) => {
    const cardClassNames = [styles.card];
    if (itemCount > 0) cardClassNames.push(styles.hasItems);

    const faceClassNames = [styles.cardFace];
    if (isExpanded) faceClassNames.push(styles.cardFaceSelected);

    const wrapClassNames = [styles.wrap];
    if (isFolded) wrapClassNames.push(styles.wrapFolded);

    return (
        <div className={toClassNames(wrapClassNames)}>
            <button onClick={onClick} className={toClassNames(cardClassNames)}>
                <span className={toClassNames(faceClassNames)}>
                    <span className={styles.name}>{name}</span>
                </span>
            </button>
            <button
                onClick={onDelete}
                className={styles.deleteBtn}
                aria-label={`${name}を削除`}
            >
                ×
            </button>
        </div>
    );
};

export default ListCard;
