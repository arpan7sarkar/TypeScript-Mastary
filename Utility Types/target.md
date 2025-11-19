# 🟦 **2. UTILITY TYPES (Partial, Required, Pick, Omit)**

## **1️⃣ Why we need it**

* Modify existing types without rewriting
* Used heavily in React, form handling, APIs
* Reduce code duplication
* Make strict types flexible

---

## **2️⃣ Code Examples**

### **Partial<T>** → makes all properties optional

```ts
interface User { name: string; age: number; }
const u: Partial<User> = { name: "Arpan" };
```

### **Required<T>** → makes all optional properties required

```ts
interface Config { url?: string; timeout?: number; }
let c: Required<Config> = { url: "a", timeout: 3000 };
```

### **Pick<T, Keys>**

```ts
type UserBasic = Pick<User, "name">;
```

### **Omit<T, Keys>**

```ts
type WithoutAge = Omit<User, "age">;
```

---

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
