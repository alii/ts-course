/*

  # Introduction

  ## What, why, who!?

  First of all, what is TypeScript and why would you use it? TypeScript is a superset of JavaScript that
  brings strict typing to the language. Strict typing is useful because it allows us to write predictable
  and reliable code that guarantees the types of things at compile time, before our code even runs.
  Additionally, it allows us to write code that is easier to read and maintain. For example if we wanted
  to write a function that takes some type of arguments and returned a complex value, we could type the
  function's signature to ensure that when we came back to read it in the future we could look at it
  and be able to confirm the input and output of the function. This allows us to write code that can
  be easy to maintain at scale. Also, it's helpful for teams as other developers can read and understand
  our code and know what it does.

  ## Setup

  Most lessons here can be done online through the TypeScript Playground. However, if you want to do the
  exercises yourself, you'll need to install the TypeScript compiler and the Node.js runtime.
  Once we get to those exercises, documentation on getting setup with the TypeScript compiler and Node.js will be available.

  ### Resources

  - [TypeScript Playground](https://www.typescriptlang.org/play/)

  ## Takeoff 🚀

  With the playground open in another tab, let's take a very brief look at what TypeScript can do for us.
  We're going to write a very basic function that will take in a number and return the square. The code
  is below.

*/

/**
 * Squares a number
 * @param a The number to square
 * @returns The square of the number
 */
function add(num: number): number {
  return num * num;
}
