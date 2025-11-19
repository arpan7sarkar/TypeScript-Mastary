// Pick<T, Keys>

// Extract only selected properties from a type.

interface User {
  name: string;
  age: number;
  email: string;
}

type BasicUser = Pick<User, "name" | "email">;

const u: BasicUser = { name: "Arpan", email: "arpan@x.com" };
console.log(u);

//we use pic to chose any particuler filed from any interface to a new type

// Use Pick to extract only email and username.

interface User2 {
  username: string;
  email: string;
  password: string;
}
type UserDetails = Pick<User2, "username" | "email">;

// 🟦 5. Omit<T, Keys>
// Opposite of Pick → removes selected properties.
// Create a type without a sensitive property (password).

type NoPass = Omit<User2, "password">;
const NoP:NoPass={username:"arpan",email:"notFound@404.com"}
