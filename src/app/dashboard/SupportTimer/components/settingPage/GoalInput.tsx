'use client';

import goalInput from '../../styles/settingPage/goalInput.css';

interface GoalInputProps {
    goalMinutes: number;
    onGoalChange: (minutes: number) => void;
}

const GoalInput = ({ goalMinutes, onGoalChange }: GoalInputProps) => {
    const presetGoals = [30, 60, 90, 120];

    return (
        <div className={goalInput.container}>
            <div className={goalInput.goalTime}>🎯 1日の目標時間</div>

            {/* プリセットボタン */}
            <div className={goalInput.presets}>
                {presetGoals.map(minutes => (
                    <button
                        key={minutes}
                        onClick={() => onGoalChange(minutes)}
                        className={goalInput.presetButton({
                            goalTime: goalMinutes === minutes
                        })}
                    >
                        {minutes}分
                    </button>
                ))}
            </div>

            {/* カスタム入力 */}
            <div>
                <label className={goalInput.customLabel}>
                    カスタム設定（分）
                </label>
                <input
                    type='number'
                    value={goalMinutes}
                    onChange={e => onGoalChange(Number(e.target.value))}
                    min='1'
                    max='480'
                    className={goalInput.customInput}
                />
            </div>
        </div>
    );
};

export default GoalInput;
