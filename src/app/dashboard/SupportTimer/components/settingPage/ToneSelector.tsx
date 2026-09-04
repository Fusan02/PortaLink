'use client';

import toneSelector from '../../styles/settingPage/toneSelector.css';
import type { AITone } from '../../types';

interface ToneSelectorProps {
  selectedTone: AITone;
  onToneChange: (tone: AITone) => void;
}

const ToneSelector = ({
  selectedTone,
  onToneChange
}: ToneSelectorProps) => {
  const tones: Array<{
    value: AITone;
    label: string;
    description: string;
  }> = [
    {
      value: 'gentle',
      label: 'やさしい',
      description: 'ゆっくり休んでね'
    },
    { value: 'normal', label: 'ふつう', description: '今日も頑張ろう' },
    {
      value: 'energetic',
      label: 'アツい',
      description: '全力で行こうぜ！'
    }
  ];

  return (
    <div className={toneSelector.container}>
      <div className={toneSelector.title}>🧠 AIのトーン設定</div>

      <div className={toneSelector.toneContainer}>
        {tones.map(tone => (
          <label
            key={tone.value}
            className={toneSelector.toneContainerLabel({
              isSelected: selectedTone === tone.value
            })}
          >
            <input
              type='radio'
              name='tone'
              value={tone.value}
              checked={selectedTone === tone.value}
              onChange={() => onToneChange(tone.value)}
              className={toneSelector.toneInput}
            />
            <div>
              <div className={toneSelector.toneLabel}>{tone.label}</div>
              <div className={toneSelector.toneDescription}>
                例: 「{tone.description}」
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ToneSelector;
