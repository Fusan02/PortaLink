// セッション（作業記録）の型定義

// 作業セッション１回分のデータ構造
export interface Session {
    id: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    memo: string;
    tag?: string;
    aiComment?: string;
}

// 新しいセッションを保存するときの入力データ
export interface SessionInput {
    duration: number;
    memo: string;
    tag?: string;
}
