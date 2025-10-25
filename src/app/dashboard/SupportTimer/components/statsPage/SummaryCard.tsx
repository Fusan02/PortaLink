'use client';

import summaryCard from '../../styles/statsPage/summaryCard.css';

interface SummaryCardProps {
    icon: string;
    label: string;
    value: string;
}

const SummaryCard = ({ icon, label, value }: SummaryCardProps) => {
    return (
        <div className={summaryCard.page}>
            <div className={summaryCard.icon}>
                {icon}
            </div>
            <div className={summaryCard.flex}>
                <div className={summaryCard.label}>
                    {label}
                </div>
                <div className={summaryCard.value}>
                    {value}
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;