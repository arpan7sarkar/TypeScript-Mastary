
# 🟦 **1. GENERICS (Deep)**

## **1️⃣ Why we need / use Generics**

* To write **reusable, flexible, type-safe** functions/classes
* Avoid “any”
* Make functions work with **multiple types**, not just one
* Used everywhere: React, fetch, arrays, promises

---

## **2️⃣ Implementation via Code**

### **Generic Function**

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Arpan");
```

### **Generic Interface**

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{name: string}> = {
  data: { name: "Arpan" },
  success: true
};
```

### **Generic Class**

```ts
class Box<T> {
  constructor(public item: T) {}
}

const numberBox = new Box<number>(100);
```

---

## **3️⃣ Practice Questions**

### **(Easy)**

1. Create a generic function `wrap<T>(value: T)` that returns an object `{ value: T }`.
2. Write a generic array function that returns the first element.

### **(Medium)**

3. Create `ApiResponse<T>` and use it with a list of products.
4. Make a generic class `KeyValue<K, V>`.

### **(Hard)**

5. Create a generic function that accepts two different types `combine<A, B>(a: A, b: B)` and returns a tuple.
6. Create a generic constraint:

   * Accept only objects with a `name` key

---

## **4️⃣ Time Bound**

⏳ **40 minutes max**

---
