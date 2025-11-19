Here’s the **clean, beginner-friendly explanation** of the most important **Utility Types** in TypeScript:
(Short + example-based)

---

# 🚀 **What are Utility Types?**

Utility types are **built-in TypeScript helpers** that let you **modify existing types** without rewriting them.
They make your code **cleaner, safer, and faster** to write.

---

# 🟦 **1. Partial<T>**

Makes **all properties optional**.

### 🔹 Why we use it

Useful when updating objects, patching forms, or sending partial data.

### 🔹 Example

```ts
interface User {
  name: string;
  age: number;
}

const u: Partial<User> = {
  name: "Arpan",  // age is optional now
};
```

---

# 🟦 **2. Required<T>**

Makes **all properties mandatory** (opposite of Partial).

### 🔹 Example

```ts
interface Config {
  url?: string;
  timeout?: number;
}

const c: Required<Config> = {
  url: "api",
  timeout: 3000,
};
```

---

# 🟦 **3. Readonly<T>**

Makes all properties **immutable** (cannot change after set).

### 🔹 Example

```ts
interface Car {
  model: string;
  year: number;
}

const c: Readonly<Car> = { model: "Tesla", year: 2024 };
c.year = 2025; // ❌ Error
```

---

# 🟦 **4. Pick<T, Keys>**

Extract **only selected properties** from a type.

### 🔹 Example

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type BasicUser = Pick<User, "name" | "email">;
```

---

# 🟦 **5. Omit<T, Keys>**

**Opposite of Pick** → removes selected properties.

### 🔹 Example

```ts
type NoEmail = Omit<User, "email">;
```

---

# 🟦 **6. Record<K, T>**

Creates an object type with keys **K** and value type **T**.

### 🔹 Example

```ts
type Scores = Record<string, number>;

const s: Scores = {
  math: 90,
  english: 88,
};
```

---

# 🟦 **7. Exclude<T, U>**

Removes types from a union.

### 🔹 Example

```ts
type Status = "success" | "error" | "loading";
type NoLoading = Exclude<Status, "loading">;
```

---

# 🟦 **8. Extract<T, U>**

Keeps only matching types.

### 🔹 Example

```ts
type OnlyError = Extract<Status, "error">;
```

---

# 🟦 **9. NonNullable<T>**

Removes `null` and `undefined`.

### 🔹 Example

```ts
type Clean = NonNullable<string | null | undefined>; // string
```

---

# 🟩 **10. ReturnType<T>**

Gets the return type of a function.

### 🔹 Example

```ts
function greet() {
  return { msg: "hello" };
}

type GreetType = ReturnType<typeof greet>;
```


## **3️⃣ Practice Questions**

### **(Easy)**

1. Convert a `Product` type into a `Partial<Product>`.
2. Use `Pick` to extract only `email` and `username`.

### **(Medium)**

3. Make all fields required for a `Settings` type.
4. Create a type without a sensitive property (`password`).

### **(Hard)**

5. Given a user type, create a type where only `profile` is optional but everything else is required.
6. Create a utility type that makes only selected keys optional.

---

## **4️⃣ Time Bound**

⏳ **30 minutes**

---

---
