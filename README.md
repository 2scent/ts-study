## String Util

### highlightText

- 안녕하세요. 이향기입니다 => 여기서 ‘이향기’를 하이라이트 시켜라
- 두가지 스트링 인자가 주어지면 키워드로 매칭되는 문자열을 하이라이팅하는 함수를 만들어라
- 자료구조를 어떻게 해야 범용적이게 하이라이팅할 수 있을 지 생각해봐라,
- 다른 옵션도 필요하지 않을 지 생각해봐라(인자가 꼭 2개일 필요는 없음)

## Object Util

- Object.entries, object.keys로 하면 타입 추론이 다 깨진다
- 이것을 타입 추론이 가능하도록 만들어보아라

```typescript
// entries 예시
export const entries = Object.entries as <T>(o: T) => Entries<T>;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
```

- 나는 keys와 values를 한 번 해보아라

### filterByKey의 요구사항

- { a: ‘1’, b: ‘2’, c: ‘3’ } 이런 요구사항이 있다고 할 때 key가 a인 것들만 찾아라?

### filterByValue의 요구사항

- { a: 1, b: 2, c: 3 }이 있다고 할 때 2 이상인 것들을 찾아라?

- 일단은 검색할 수 있다 까지만 요구사항이고
- 리턴하는 타입이 object이면 좋을지 다른 타입이면 좋을지 고민해보아라
