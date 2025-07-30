# Snaproom React - TypeScriptとFeature-Sliced Designアーキテクチャ

**TypeScript**と**Feature-Sliced Design (FSD)**方法論を使用して構築されたReactアプリケーションで、優れたコード組織、保守性、拡張性、型安全性を提供します。

## 🏗️ Feature-Sliced Design概要

Feature-Sliced Designは、フロントエンドアプリケーションを組織化するための標準化された方法を提供するアーキテクチャ方法論です。関心の分離、予測可能な構造、階層的アプローチによる保守可能なコードを重視しています。

### 核心原則

1. **階層的組織**: 責任に基づいてコードを階層に分割
2. **ビジネスロジックの分離**: ビジネスロジックとプレゼンテーションの明確な境界
3. **高凝集、低結合**: 関連するコードは一緒に、関連しないコードは分離
4. **予測可能な構造**: アプリケーション全体で一貫したパターン
5. **拡張性**: アプリケーションと共に成長するアーキテクチャ

## 📁 ディレクトリ構造

```
src/
├── app/                    # アプリケーション層
│   ├── config/            # グローバル設定
│   ├── model/             # グローバル状態とビジネスロジック
│   └── index.tsx          # アプリエントリーポイント
├── pages/                 # ページ層
│   ├── home/              # ホームページスライス
│   │   └── index.tsx      # ホームページコンポーネント
│   ├── login/             # ログインページスライス
│   │   └── index.tsx      # ログインページコンポーネント
│   └── index.tsx          # ルーティング設定
├── widgets/               # ウィジェット層
│   └── auth-widget/       # 認証ウィジェット
│       ├── ui/            # ウィジェットコンポーネント
│       ├── model/         # ウィジェットロジック
│       └── index.tsx      # ウィジェットエントリーポイント
├── features/              # フィーチャー層
│   └── auth/              # 認証フィーチャースライス
│       ├── ui/            # フィーチャーコンポーネント (.tsx)
│       ├── model/         # フィーチャービジネスロジック (.tsx)
│       ├── api/           # フィーチャーAPI呼び出し (.tsx)
│       ├── lib/           # フィーチャーユーティリティ (.ts)
│       └── index.tsx      # パブリックAPI
├── entities/              # エンティティ層
│   └── user/              # ユーザーエンティティスライス
│       ├── ui/            # エンティティコンポーネント (.tsx)
│       ├── model/         # エンティティビジネスロジック (.ts)
│       ├── api/           # エンティティAPI呼び出し (.tsx)
│       └── index.tsx      # パブリックAPI
└── shared/                # 共有層
    ├── ui/                # 再利用可能なUIコンポーネント (.tsx)
    ├── api/               # 共通APIユーティリティ (.tsx)
    ├── lib/               # 共有ユーティリティ (.ts)
    └── config/            # 共有設定 (.ts)
```

## 🔄 層の説明

### 1. App層 (`src/app/`)
**目的**: アプリケーションレベルのロジックとグローバル設定
- グローバルプロバイダーとコンテキスト
- アプリケーション設定
- ルートルーティング設定
- グローバルスタイルとテーマ

### 2. Pages層 (`src/pages/`)
**目的**: フルページコンポーネントとページ固有のロジック
- ルートレベルコンポーネント
- ページ固有のレイアウト
- ウィジェットとフィーチャーを使用したページ構成
- URLパラメータの処理

### 3. Widgets層 (`src/widgets/`)
**目的**: 複数のフィーチャーを組み合わせた複雑で再利用可能なUIブロック
- 複合UIコンポーネント
- フィーチャー間の相互作用
- 複雑なビジネスロジックブロック
- 再利用可能なページセクション

### 4. Features層 (`src/features/`)
**目的**: 特定のユーザーフィーチャーと相互作用
- ユーザーストーリーの実装
- フィーチャー固有のビジネスロジック
- インタラクティブ要素
- フィーチャースコープの状態管理

### 5. Entities層 (`src/entities/`)
**目的**: ビジネスエンティティとドメインモデル
- ドメインモデルの表現
- エンティティ固有の操作
- データ変換ロジック
- エンティティ検証ルール

### 6. Shared層 (`src/shared/`)
**目的**: ビジネスコンテキストを持たない汎用的で再利用可能なコード
- UIキットコンポーネント（ボタン、入力など）
- ユーティリティ関数
- 定数と設定
- 共通APIユーティリティ

## 🧩 セグメントの説明

各スライス内で、コードは技術的目的に基づいてセグメントに分割されます：

- **`ui/`**: プレゼンテーションコンポーネントとスタイル
- **`model/`**: ビジネスロジック、状態管理、データ処理
- **`api/`**: API相互作用と外部サービス呼び出し
- **`lib/`**: 内部ユーティリティとヘルパー関数
- **`config/`**: スライス固有の設定

## 🔐 認証の例

認証フィーチャーがFSD層でどのように構造化されるかを示す例：

### Feature層 (`src/features/auth/`)
```
auth/
├── ui/
│   └── login-form.tsx     # ログインフォームコンポーネント
├── model/
│   └── use-auth.tsx       # 認証ロジックフック
├── api/
│   └── auth-api.tsx       # 認証API呼び出し
└── index.tsx              # パブリックAPI
```

### Entity層 (`src/entities/user/`)
```
user/
├── ui/
│   └── user-card.tsx      # ユーザー表示コンポーネント
├── api/
│   └── user-api.tsx       # ユーザーデータAPI呼び出し
└── index.tsx              # パブリックAPI
```

### Widget層 (`src/widgets/auth-widget/`)
```
auth-widget/
├── ui/
│   └── auth-widget.tsx    # 複合認証コンポーネント
└── index.tsx              # パブリックAPI
```

### Shared層 (`src/shared/`)
```
shared/
├── ui/
│   ├── button.tsx         # 汎用ボタンコンポーネント
│   └── input.tsx          # 汎用入力コンポーネント
└── api/
    └── index.tsx          # APIクライアントユーティリティ
```

## 🎯 TypeScript設定

このプロジェクトは以下を提供するためにTypeScriptで完全に設定されています：
- **型安全性**: コンパイル時エラーチェックとより良いIDE支援
- **ストリクトモード**: より良いコード品質のための強化された型チェック
- **インターフェース定義**: コンポーネントpropsとAPIレスポンスの明確な契約
- **ジェネリック型**: 再利用可能な型安全ユーティリティ

### 主要なTypeScript機能
- すべてのReactコンポーネントは`React.FC`型付けを使用
- props、状態、APIレスポンスの包括的なインターフェース
- 型安全HTTPリクエストのためのジェネリックAPIクライアントメソッド
- `tsconfig.json`での厳密なTypeScript設定

## 🚀 はじめに

### 前提条件
- Node.js (v14以上)
- npmまたはyarn
- TypeScriptの知識を推奨

### インストール
```bash
# リポジトリをクローン
git clone <repository-url>
cd snaproom-react

# 依存関係をインストール（TypeScriptを含む）
npm install

# TypeScriptコンパイレーションと共に開発サーバーを開始
npm start
```

### 利用可能なスクリプト
- `npm start` - TypeScriptホットリロードと共に開発サーバーを開始
- `npm run build` - TypeScriptコンパイレーションと共に本番ビルド
- `npm test` - TypeScriptサポートでテストを実行
- `npm run lint` - TypeScriptルールでESLintを実行
- `npm run lint:fix` - ESLintの問題を自動修正

## 📝 開発ガイドライン

### インポートルール
適切な層の依存関係を維持するために、以下のインポート規則に従ってください：

```typescript
// ✅ 正しい - 下位層からのインポート
import { Button } from '../../../shared/ui';
import { UserCard, User } from '../../../entities/user';

// ❌ 間違い - 上位層からのインポート
import { HomePage } from '../../../pages/home';
```

### TypeScript開発ガイドライン

#### コンポーネント型定義
```typescript
// コンポーネントpropsのインターフェース定義
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// 関数型コンポーネントにReact.FCを使用
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false 
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
```

#### APIとフック型
```typescript
// APIレスポンスのインターフェース定義
interface LoginResponse {
  user: User;
  token: string;
}

// 戻り値型でカスタムフックを型付け
interface AuthState {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
}

export const useAuth = (): AuthState => {
  // フック実装
};
```

### 層の依存関係
- **Pages**は以下からインポート可能: widgets, features, entities, shared
- **Widgets**は以下からインポート可能: features, entities, shared
- **Features**は以下からインポート可能: entities, shared
- **Entities**は以下からインポート可能: shared
- **Shared**は他の層からインポートすべきでない

### 命名規則
- コンポーネントとインターフェースはPascalCaseを使用: `LoginForm`, `UserCard`, `ButtonProps`
- フックとユーティリティはcamelCaseを使用: `useAuth`, `formatDate`
- ディレクトリはkebab-caseを使用: `auth-widget`, `user-profile`
- JSXを含むファイルは`.tsx`拡張子を使用
- JSXを含まないユーティリティファイルは`.ts`拡張子を使用

## 🤝 貢献

1. 新しいフィーチャーを追加する際はFSD方法論に従ってください
2. 層の境界とインポートルールを尊重してください
3. すべてのpropsとAPIレスポンスに対してTypeScriptインターフェースを定義してください
4. 厳密な型チェックを使用し、`any`型を避けてください
5. 新しい機能に対してテストを書いてください
6. 必要に応じてドキュメントを更新してください

## 📚 さらなる学習

- [Feature-Sliced Designドキュメント](https://feature-sliced.design/)
- [FSDの例とベストプラクティス](https://github.com/feature-sliced/examples)
- [Reactベストプラクティス](https://reactjs.org/docs/thinking-in-react.html)
- [TypeScriptハンドブック](https://www.typescriptlang.org/docs/)
- [React TypeScriptベストプラクティス](https://react-typescript-cheatsheet.netlify.app/)