# SupportTimer - 応援タイマー

作業時間を記録し、モチベーションをサポートするタイマーアプリケーション

## 🎯 コンセプト

「開いた瞬間にモチベーションをもらい、ボタンひとつで作業に入れる」シンプルかつ温かいUI。
タイマーとランダムなひとことメッセージで作業をサポート。データは自動的に蓄積され、統計で成長が見える設計。

---

## 📱 機能一覧

### 🏠 Home画面
- **ランダムひとこと**: 11種類のメッセージからランダムに表示
- **タイマー機能**: Start/Stopボタンで作業時間を計測
- **セッション記録**: 作業終了後にメモ・タグを追加してSupabaseに保存

### 📊 Stats画面
- **目標達成状況**: 今日の作業時間と目標時間の進捗バー
  - リアルタイムで進捗率を表示
- **週間棒グラフ**: 日曜日〜土曜日の作業時間を可視化
- **連続記録バッジ**: 連続して作業した日数を表示
- **統計サマリー**:
  - 今週の合計作業時間
  - 今週の最高記録
  - 累積作業時間
  - 累積セッション数

### 🕐 History画面
- **セッション一覧**: 過去の作業履歴を時系列で表示
- **検索・フィルタ機能**:
  - メモ内容でテキスト検索
  - タグでフィルタリング
- **タグ表示**: タグごとにカスタマイズ可能な色で表示

### ⚙️ Settings画面
- **1日の目標時間**: プリセット(30/60/90/120分)またはカスタム入力
- **タグの色設定**: 使用中のタグの色をカラーピッカーでカスタマイズ
  - セッションで使用されているタグのみ表示
  - 各タグに個別の色を設定可能
- **設定の永続化**: ユーザーごとにSupabaseに保存

---

## 🏗️ 技術スタック

### フロントエンド
- **Next.js 14** (App Router)
- **TypeScript**
- **Vanilla Extract** (CSS-in-JS)
- **React Hooks** (カスタムフック活用)

### バックエンド
- **Supabase**
  - PostgreSQL データベース
  - 認証機能
  - リアルタイムデータベース

### 主要なカスタムフック
- `useTimer`: タイマーロジック
- `useSession`: セッションデータのCRUD操作
- `useStats`: 統計データの計算と取得
- `useSettings`: ユーザー設定の管理

---

## 🗂️ プロジェクト構造

```
src/app/dashboard/SupportTimer/
├── components/
│   ├── common/
│   │   └── GoalProgress.tsx          # 目標達成状況コンポーネント
│   ├── homePage/
│   │   ├── index.tsx                 # メインタイマー画面
│   │   ├── MotivationCard.tsx       # ランダムひとこと
│   │   ├── BigTimer.tsx              # タイマー表示
│   │   └── FinishDialog.tsx          # 終了後のダイアログ
│   ├── statsPage/
│   │   ├── index.tsx                 # 統計画面
│   │   ├── DailyBarChart.tsx         # 週間棒グラフ
│   │   ├── StreakBadge.tsx           # 連続記録バッジ
│   │   └── SummaryCard.tsx           # 統計カード
│   ├── historyPage/
│   │   ├── index.tsx                 # 履歴画面
│   │   ├── SessionList.tsx           # セッション一覧
│   │   └── FilterBar.tsx             # 検索・フィルタ
│   └── settingPage/
│       ├── index.tsx                 # 設定画面
│       ├── ToneSelector.tsx          # トーン設定
│       ├── GoalInput.tsx             # 目標時間設定
│       └── TagColorEditor.tsx        # タグ色設定
├── hooks/
│   ├── useTimer.ts                   # タイマーロジック
│   ├── useSession.ts                 # セッション管理
│   ├── useStats.ts                   # 統計計算
│   └── useSettings.ts                # 設定管理
├── types/
│   ├── index.ts                      # 型定義のエクスポート
│   ├── session.ts                    # セッション型
│   ├── stats.ts                      # 統計型
│   └── settings.ts                   # 設定型
└── styles/                           # Vanilla Extract CSS

```

## 🗄️ データベース構造

### テーブル: `sessions`
```sql
- id: uuid (primary key)
- user_id: uuid (外部キー)
- start_time: timestamp
- end_time: timestamp
- duration: integer (秒)
- memo: text
- tag: text (nullable)
- ai_comment: text (nullable)
```

### テーブル: `user_settings`
```sql
- user_id: uuid (primary key)
- ai_tone: text ('gentle' | 'normal' | 'energetic')
- daily_goal_minutes: integer
- notification_start_time: text
- notification_end_time: text
- tag_colors: jsonb (タグ名: カラーコードのマップ)
```

---

## 🚀 実装済み機能

### v1.0 (現在)
- ✅ タイマー機能（開始/停止/リセット）
- ✅ セッション記録（メモ・タグ付き）
- ✅ Supabase連携
- ✅ 週間統計グラフ
- ✅ セッション履歴・検索
- ✅ ユーザー設定（トーン・目標時間）
- ✅ タグ色のカスタマイズ
- ✅ 目標達成状況の可視化
- ✅ ランダムひとことメッセージ
- ✅ 連続記録バッジ

---

## 🔮 今後の拡張案

### v2.0
- [ ] 通知機能の実装
- [ ] AIコメント生成（セッション保存時）

## 💡 UXのポイント
1. **ランダムひとこと**: 11種類のメッセージで毎回新鮮な気持ちで開始
2. **視覚的フィードバック**: 目標達成時のバナー、プログレスバー
3. **1タップで開始**: 最小限の操作で作業開始
4. **カスタマイズ性**: タグの色を自由に設定可能
5. **データの永続化**: 全ての設定・記録をSupabaseに保存

---

## 📝 開発メモ

### 日付計算の注意点
- `new Date().getDay()`は曜日インデックス（0=日曜）
- 統計データは日付文字列（YYYY-MM-DD）で比較するのが確実
- タイムゾーンの違いに注意

### カスタムフックの設計
- ローディング・エラー状態を統一的に管理
- useCallbackでメモ化して不要な再レンダリングを防止
- 初回マウント時にuseEffectでデータ取得

---

## 🙏 クレジット
Developed with using Next.js, TypeScript, and Supabase
