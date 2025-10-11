'use client'

import { SideInAnimation } from '@/animation/sideInAnimetion/side-in-animation';
import { SideOutAnimation } from '@/animation/sideOutAnimation/side-out-animation';
import { toClassNames } from '@/utils/toClassNames_utils';
import { ReactNode, useState } from 'react';
import { Button } from '../buttons';
import styles from './sideMenu.css';

export const SideMenuModal = ({
    className,
    visible,
    onClose,
}: {
    className?: string;
    visible: boolean;
    onClose: () => void;
}) => {
    const [closing, setClosing] = useState(false);

    return (
        <div
        className={toClassNames([
            className,
        ])}
        >
            <Wrapper
                visible={visible}
                closing={closing}
                onClosed={() => {
                    setClosing(false);
                    onClose();
                }}
            >
                <SideMenu 
                    onClick={onClose}
                />
            </Wrapper>
        </div>
    );
};

const Wrapper = ({
    visible,
    closing,
    onClosed,
    children,
}: {
    visible: boolean;
    closing: boolean;
    onClosed: () => void;
    children: ReactNode;
}) => {
    if (closing) {
        return (
            <SideInAnimation
                onAnimationComplete={() => {
                    onClosed?.();
                }}
            >
                {children}
            </SideInAnimation>
        );
    }

    if (visible) {
        return (
            <SideOutAnimation>
                {children}
            </SideOutAnimation>
        );
    }
    return null;
};

const SideMenu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick: () => void;
}) => {
    return (
        <div className={toClassNames([styles.menuPosition, styles.menuBack])}>
            <Button 
                text='Close'
                onClick={onClick}
                className={styles.closeButton}
            />
        </div>
    );
};