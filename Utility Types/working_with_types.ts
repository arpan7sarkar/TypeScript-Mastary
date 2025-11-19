// 🟦 6. Record<K, T>
// Creates an object type with keys K and value type T.
/*
K= Key/value
T= Datatype
✅ Why we use it (Real Product Use)

For defining configs, enums, permissions, feature flags, translations, role-based access, etc.

Ensures all keys must exist and have valid value types.*/

type Role="admin" | "user" | "guest"
type Permissions=Record<Role,{read:boolean,write:boolean}>

const access:Permissions={
    admin:{
        read:true,
        write:true
    },
    user:{
        read:true,
        write:false
    },
    guest:{
        read:true,
        write:false
    }
}
console.log(access);


// 7. Exclude<T, U>
// Removes types from a union.
// Useful when filtering specific valid states.
// Creating subsets of types.
// Handling specific error types from APIs.

// 🔹 Example
type Status = "success" | "error" | "loading";
type NoLoading = Exclude<Status, "loading">;

// 8. Extract<T, U>
// Keeps only matching types.

// 🔹 Example
type OnlyError = Extract<Status, "error">;


// 🟦 9. NonNullable<T> — Remove null and undefined
// ✅ Why we use it (Real Product Use)

// Prevent runtime crashes

// Ensure data is clean before using it

// Used often with API responses, form input, database fields

// ✅ Example 
// API may return null but your UI needs a clean type:
type ApiUser = {
  name: string | null;
};

type CleanUserName = NonNullable<ApiUser["name"]>; // string

/*10. ReturnType<T> — Infer Function Return Types
✅ Why we use it (Real Product Use)

Helps reuse return types

Avoids duplicating types

Useful in Redux, Services, API calls

Helps in strongly typed components */

// example:
function fetchUser() {
  return {
    name: "Arpan",
    age: 19,
    verified: true,
  };
}

type UserResponse = ReturnType<typeof fetchUser>;
