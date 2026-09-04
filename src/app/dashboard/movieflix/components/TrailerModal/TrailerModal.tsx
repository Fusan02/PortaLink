'use clinet';

import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './TrailerModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type TrailerModalProps = {
    videoKey: string;
    onClose: () => void;
};

const TrailerModal = ({ videoKey, onClose }: TrailerModalProps) => {
    return (
        <div className={toClassNames([styles.overlay])}>
            <div
                className={toClassNames([styles.content])}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className={toClassNames([styles.closeBtn])}
                    onClick={onClose}
                    onTouchEnd={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <iframe
                    className={toClassNames([styles.iframe])}
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                    title='Trailer'
                    allow='autoplay; encrypted-media; picture-in-picture'
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default TrailerModal;
