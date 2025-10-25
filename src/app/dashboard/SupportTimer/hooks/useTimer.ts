import { useEffect, useRef, useState } from 'react';

interface UseTimerReturn {
    seconds: number;
    isRunning: boolean;
    start: () => void;
    stop: () => void;
    reset: () => void;
}

export const useTimer = ():UseTimerReturn => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // タイマー開始
    const start = () => {
        setIsRunning(true);
    };

    // タイマー停止
    const stop = () => {
        setIsRunning(false);
    };

    // タイマーリセット
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    // タイマーのカウントアップ処理
    useEffect(() => {
        if (isRunning) {
            // 1秒ごとにカウントアップ
            intervalRef.current = window.setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            // 停止後はインターバルをクリア
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        // クリーンアップ
        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    return {
        seconds,
        isRunning,
        start,
        stop,
        reset,
    };
};