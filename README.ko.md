# Snaproom React - TypeScript와 Feature-Sliced Design 아키텍처

TypeScript와 Feature-Sliced Design (FSD) 방법론을 사용하여 더 나은 코드 구성, 유지보수성, 확장성, 타입 안전성을 제공하는 React 애플리케이션입니다.

## 🏗️ Feature-Sliced Design 개요

Feature-Sliced Design은 프론트엔드 애플리케이션을 구성하는 표준화된 방법을 제공하는 아키텍처 방법론입니다. 관심사의 분리, 예측 가능한 구조, 계층적 접근을 통한 유지보수 가능한 코드를 강조합니다.

### 핵심 원칙

1. **계층적 구성**: 책임에 따라 코드를 계층으로 구성
2. **비즈니스 로직 분리**: 비즈니스 로직과 프레젠테이션 간의 명확한 경계
3. **높은 응집도, 낮은 결합도**: 관련 코드는 함께, 관련 없는 코드는 분리
4. **예측 가능한 구조**: 전체 애플리케이션에서 일관된 패턴
5. **확장성**: 애플리케이션과 함께 성장하는 아키텍처

## 📁 디렉토리 구조

```
src/
├── app/                    # 애플리케이션 계층
│   ├── config/            # 전역 설정
│   ├── model/             # 전역 상태 및 비즈니스 로직
│   └── index.tsx          # 앱 진입점
├── pages/                 # 페이지 계층
│   ├── home/              # 홈 페이지 슬라이스
│   │   └── index.tsx      # 홈 페이지 컴포넌트
│   ├── login/             # 로그인 페이지 슬라이스
│   │   └── index.tsx      # 로그인 페이지 컴포넌트
│   └── index.tsx          # 라우팅 설정
├── widgets/               # 위젯 계층
│   └── auth-widget/       # 인증 위젯
│       ├── ui/            # 위젯 컴포넌트
│       ├── model/         # 위젯 로직
│       └── index.tsx      # 위젯 진입점
├── features/              # 기능 계층
│   └── auth/              # 인증 기능 슬라이스
│       ├── ui/            # 기능 컴포넌트 (.tsx)
│       ├── model/         # 기능 비즈니스 로직 (.tsx)
│       ├── api/           # 기능 API 호출 (.tsx)
│       ├── lib/           # 기능 유틸리티 (.ts)
│       └── index.tsx      # 공개 API
├── entities/              # 엔티티 계층
│   └── user/              # 사용자 엔티티 슬라이스
│       ├── ui/            # 엔티티 컴포넌트 (.tsx)
│       ├── model/         # 엔티티 비즈니스 로직 (.ts)
│       ├── api/           # 엔티티 API 호출 (.tsx)
│       └── index.tsx      # 공개 API
└── shared/                # 공유 계층
    ├── ui/                # 재사용 가능한 UI 컴포넌트 (.tsx)
    ├── api/               # 공통 API 유틸리티 (.tsx)
    ├── lib/               # 공유 유틸리티 (.ts)
    └── config/            # 공유 설정 (.ts)
```

## 🔄 계층 설명

### 1. App 계층 (`src/app/`)
**목적**: 애플리케이션 수준의 로직과 전역 설정
- 전역 프로바이더 및 컨텍스트
- 애플리케이션 설정
- 루트 라우팅 설정
- 전역 스타일 및 테마

### 2. Pages 계층 (`src/pages/`)
**목적**: 전체 페이지 컴포넌트와 페이지별 로직
- 라우트 수준 컴포넌트
- 페이지별 레이아웃
- 위젯과 기능을 사용한 페이지 구성
- URL 매개변수 처리

### 3. Widgets 계층 (`src/widgets/`)
**목적**: 여러 기능을 결합한 복잡하고 재사용 가능한 UI 블록
- 복합 UI 컴포넌트
- 기능 간 상호작용
- 복잡한 비즈니스 로직 블록
- 재사용 가능한 페이지 섹션

### 4. Features 계층 (`src/features/`)
**목적**: 특정 사용자 기능과 상호작용
- 사용자 스토리 구현
- 기능별 비즈니스 로직
- 상호작용 요소
- 기능 범위 상태 관리

### 5. Entities 계층 (`src/entities/`)
**목적**: 비즈니스 엔티티와 도메인 모델
- 도메인 모델 표현
- 엔티티별 작업
- 데이터 변환 로직
- 엔티티 검증 규칙

### 6. Shared 계층 (`src/shared/`)
**목적**: 비즈니스 컨텍스트 없는 범용적이고 재사용 가능한 코드
- UI 킷 컴포넌트 (버튼, 입력 등)
- 유틸리티 함수
- 상수 및 설정
- 공통 API 유틸리티

## 🧩 세그먼트 설명

각 슬라이스 내에서 코드는 기술적 목적에 따라 세그먼트로 구성됩니다:

- **`ui/`**: 프레젠테이션 컴포넌트와 스타일
- **`model/`**: 비즈니스 로직, 상태 관리, 데이터 처리
- **`api/`**: API 상호작용 및 외부 서비스 호출
- **`lib/`**: 내부 유틸리티 및 헬퍼 함수
- **`config/`**: 슬라이스별 설정

## 🔐 인증 예제

인증 기능이 FSD 계층에서 어떻게 구조화되는지 보여주는 예제:

### Feature 계층 (`src/features/auth/`)
```
auth/
├── ui/
│   └── login-form.tsx     # 로그인 폼 컴포넌트
├── model/
│   └── use-auth.tsx       # 인증 로직 훅
├── api/
│   └── auth-api.tsx       # 인증 API 호출
└── index.tsx              # 공개 API
```

### Entity 계층 (`src/entities/user/`)
```
user/
├── ui/
│   └── user-card.tsx      # 사용자 표시 컴포넌트
├── api/
│   └── user-api.tsx       # 사용자 데이터 API 호출
└── index.tsx              # 공개 API
```

### Widget 계층 (`src/widgets/auth-widget/`)
```
auth-widget/
├── ui/
│   └── auth-widget.tsx    # 복합 인증 컴포넌트
└── index.tsx              # 공개 API
```

### Shared 계층 (`src/shared/`)
```
shared/
├── ui/
│   ├── button.tsx         # 범용 버튼 컴포넌트
│   └── input.tsx          # 범용 입력 컴포넌트
└── api/
    └── index.tsx          # API 클라이언트 유틸리티
```

## 🎯 TypeScript 설정

이 프로젝트는 다음을 제공하기 위해 TypeScript로 완전히 설정되었습니다:
- **타입 안전성**: 컴파일 타임 오류 검사 및 더 나은 IDE 지원
- **엄격 모드**: 더 나은 코드 품질을 위한 향상된 타입 검사
- **인터페이스 정의**: 컴포넌트 props와 API 응답에 대한 명확한 계약
- **제네릭 타입**: 재사용 가능한 타입 안전 유틸리티

### 주요 TypeScript 기능
- 모든 React 컴포넌트는 `React.FC` 타이핑 사용
- props, state, API 응답에 대한 포괄적인 인터페이스
- 타입 안전 HTTP 요청을 위한 제네릭 API 클라이언트 메서드
- `tsconfig.json`에서 엄격한 TypeScript 설정

## 🚀 시작하기

### 필수 조건
- Node.js (v14 이상)
- npm 또는 yarn
- TypeScript 지식 권장

### 설치
```bash
# 리포지토리 클론
git clone <repository-url>
cd snaproom-react

# 의존성 설치 (TypeScript 포함)
npm install

# TypeScript 컴파일과 함께 개발 서버 시작
npm start
```

### 사용 가능한 스크립트
- `npm start` - TypeScript 핫 리로드와 함께 개발 서버 시작
- `npm run build` - TypeScript 컴파일과 함께 프로덕션용 빌드
- `npm test` - TypeScript 지원으로 테스트 실행
- `npm run lint` - TypeScript 규칙으로 ESLint 실행
- `npm run lint:fix` - ESLint 이슈 자동 수정

## 📝 개발 가이드라인

### 임포트 규칙
적절한 계층 의존성을 유지하기 위해 다음 임포트 규칙을 따르세요:

```typescript
// ✅ 올바름 - 하위 계층에서 임포트
import { Button } from '../../../shared/ui';
import { UserCard, User } from '../../../entities/user';

// ❌ 잘못됨 - 상위 계층에서 임포트
import { HomePage } from '../../../pages/home';
```

### TypeScript 개발 가이드라인

#### 컴포넌트 타입 정의
```typescript
// 컴포넌트 props에 대한 인터페이스 정의
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// 함수형 컴포넌트에 React.FC 사용
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

#### API 및 훅 타입
```typescript
// API 응답에 대한 인터페이스 정의
interface LoginResponse {
  user: User;
  token: string;
}

// 반환 타입으로 커스텀 훅 타입 지정
interface AuthState {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
}

export const useAuth = (): AuthState => {
  // 훅 구현
};
```

### 계층 의존성
- **Pages**는 다음에서 임포트 가능: widgets, features, entities, shared
- **Widgets**는 다음에서 임포트 가능: features, entities, shared
- **Features**는 다음에서 임포트 가능: entities, shared
- **Entities**는 다음에서 임포트 가능: shared
- **Shared**는 다른 계층에서 임포트하면 안됨

### 명명 규칙
- 컴포넌트와 인터페이스는 PascalCase 사용: `LoginForm`, `UserCard`, `ButtonProps`
- 훅과 유틸리티는 camelCase 사용: `useAuth`, `formatDate`
- 디렉토리는 kebab-case 사용: `auth-widget`, `user-profile`
- JSX가 포함된 파일은 `.tsx` 확장자 사용
- JSX가 없는 유틸리티 파일은 `.ts` 확장자 사용

## 🤝 기여하기

1. 새로운 기능을 추가할 때 FSD 방법론을 따르세요
2. 계층 경계와 임포트 규칙을 존중하세요
3. 모든 props와 API 응답에 대해 TypeScript 인터페이스를 정의하세요
4. 엄격한 타입 검사를 사용하고 `any` 타입을 피하세요
5. 새로운 기능에 대한 테스트를 작성하세요
6. 필요시 문서를 업데이트하세요

## 📚 추가 자료

- [Feature-Sliced Design 문서](https://feature-sliced.design/)
- [FSD 예제와 모범 사례](https://github.com/feature-sliced/examples)
- [React 모범 사례](https://reactjs.org/docs/thinking-in-react.html)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [React TypeScript 모범 사례](https://react-typescript-cheatsheet.netlify.app/)