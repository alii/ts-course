# Introduction

> #### Warning:
>
> This chapter will be very wordy just to get everything laid down as a basis. I promise future chapters will be easier to read and understand.

## What, why, who!?

First of all, what is TypeScript and why would you use it? TypeScript is a heroic superset of JavaScript that brings strict typing to the language. Strict typing is useful because it allows us to write predictable and reliable code that guarantees the types of things at compile time, before our code even runs. Additionally, it allows us to write code that is easier to read and maintain. For example if we wanted to write a function that takes some type of arguments and returned a complex value, we could type the function's signature to ensure that when we came back to read it in the future we could look at it and be able to confirm the input and output of the function. This allows us to write code that can be easy to maintain at scale. Also, it's helpful for teams as other developers can read and understand our code and know what it does.

## Who am I?

My name is Alistair, at the time of writing I'm seventeen years old and I'm writing this line on the 12th of November, 2021. I absolutely love TypeScript and want to share my passion for not only the friend I have written this for, but also for the world and you as a developer learning the language. Thank you for taking the time to check out the course! Btw, if you have any questions or comments feel free to reach out to me on Twitter or Discord. If this repo helped you, please consider starring it and checking out my GitHub sponsors. I'd be extremely grateful!

## Setup

Most lessons here can be done online through the TypeScript Playground. Future exercises, however, wil be required to be done by yourself outside of the playground. You'll need to install the TypeScript compiler and the Node.js runtime for those and once we get to them, documentation on getting setup with the TypeScript compiler and Node.js will be available.

### Resources

- [TypeScript Playground](https://www.typescriptlang.org/play/)

## Takeoff 🚀

With the playground open in another tab, let's take a very brief look at what TypeScript can do for us. We're going to write a very basic function that will take in a number and return the square. The code is below. Don't worry if you don't fully understand what is happening here, everything will be explained eventually.

```ts
/**
 * Squares a number
 * @param a The number to square
 * @returns The square of the number
 */
function square(num: number): number {
  return num * num;
}
```

Cool, we've got our function! Now we've added some verrrrry basic data types here as you can see. We've added a JSDoc comment _above_ the function, a **type annotation** for the function's return value, and a **type annotation** for the function's single argument. This is incredibly useful because we can instantly see what values this function can accept and what values it will return back to the caller. Try typing out the following (underneath the function) in the playground and see what happens:

```ts
square(10);
square("not a number!");
```

You'll notice that the first call works just fine, however the second call will give us an error! It will look something like the next line

```
Argument of type 'string' is not assignable to parameter of type 'number'. (2345)
```

This is TypeScript telling us that we are giving an invalid parameter type to our function! How helpful! We can now prevent our code from compiling until the developer has fixed this bug, because we know for a fact that this code will not work at runtime. You can't multiply a string by a string!

Type annotations are arguably the primary feature of TypeScript. They enable us as developers to see at a glance what types of data we are dealing with and how we can use that data. Our code becomes less buggy too as a direct result of this because we know what to expect in our functions and we can be confident that our code will not compile until we fix any bugs. Maybe at this point you can start to see why utilizing TypeScript is so much more useful than plain, vanilla JavaScript.

And that wraps up our introduction to TypeScript! We've seen how the language can let us write predictable code and reduce bugs. There's no wonder is growing rapidly in popularity and adoption. I hope you enjoy this course and I hope you'll join me on the journey to becoming a better developer! In the next chapter we will cover the basic data types and how to use them.

Alistair xoxo
