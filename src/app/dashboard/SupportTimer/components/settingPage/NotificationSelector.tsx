'use client';

import notificationSelector from '../../styles/settingPage/notificationSelector.css';

interface NotificationSelectorProps {
    startTime: string;
    endTime: string;
    onNotificationChange: (startTime: string, endTime: string) => void;
}

const NotificationSelector = ({
    startTime,
    endTime,
    onNotificationChange,
}: NotificationSelectorProps) => {
    return (
        <div className={notificationSelector.container}>
            <div className={notificationSelector.notificationTime}>
                🔔 通知時間帯
            </div>

            <div className={notificationSelector.presets}>
                {/* 開始時刻 */}
                <div>
                    <label className={notificationSelector.presetStartLabel}>
                        開始時刻
                    </label>
                    <input
                        type='time'
                        value={startTime}
                        onChange={(e) => onNotificationChange(e.target.value, endTime)}
                        className={notificationSelector.startTimeInput}
                    />
                </div>

                {/* 終了時刻 */}
                <div>
                    <label className={notificationSelector.presetEndLabel}>
                        終了時刻
                    </label>
                    <input
                        type='time'
                        value={endTime}
                        onChange={(e) => onNotificationChange(startTime, e.target.value)}
                        className={notificationSelector.endTimeInput}
                    />
                </div>

                <div className={notificationSelector.notification}>
                    ℹ️ この時間帯にAIからの応援メッセージが届きます
                </div>
            </div>
        </div>
    );
};

export default NotificationSelector;