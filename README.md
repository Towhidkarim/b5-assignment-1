## Explain the difference between any, unknown, and never types in TypeScript.

In TypeScript, we have these three special basic types 'unknown', 'never' and 'any' which on the surface may look similar and may do the same thing but actually it's quite the contrary. These three have different purpose for defining an unambiguous type in typescript depending on ur need and the context. Let's take a look on a bit more detail for each of them

### Type 'any'

when we use type 'any' on any TS object or variable, in simple words, that variable pretty much works like a variable that has been defined in raw JS. Meaning, when using type 'any' TypeScript allows calling any, and by all means, any method on the given object or the variable. For example,
lets say, we have a variable as

```ts
const val: any = 5;
```

as we can see, this is a numeric (number type) variable where we are supposed to call methonds related to number type only. But since we defined the variable as 'any' it won't throw an error even if we call methods such as

```ts
val.pop();
```

or anything. It will then throw an error on runtime sicne 'pop()' does not exist on type 'any'. This is how the 'any' type works. We should not be using the 'any' type because it mostly defeats the purpose of using typescript itself.

### Type 'unknown'

The unknown type works a little like 'any' as it allows assignment of any kind of values, but the different is that the unknown type is pretty much restricted and it's strict. It won't allow us to call anything on it until we narrow down it's type using type guard clauses. The unknown type is more desireable and more suitable in cases where the type is not known and we got to narrow down the type on runtime before executing on it.

### Type 'never'

As the name suggests, the 'never' type means basically that that situation will never occur. For example if we use type never as the return type of a function that will throw and not return, it will be valid. Because it's not gonna return anything, not even void, it only gonna throw, hence it will 'never' return. We can't assign value to a variable typed 'never' on TS, as the TypeScript Engine won't allow it showing it as an error

### Conclusion

Hence we can conclude that, type 'any' and 'unknown' have similar features but we should always be using type 'unknown' in cases where we don't know the type beforehand, ignoring the type 'any' altogether. As for 'never', it should be used where the certain situation may 'never' occur.

---

## How does TypeScript help in improving code quality and project maintainability?

Typescript was released on 2012, it was released as a superset of JavaScript and it is actively maintained by Microsoft. TypeScript was invented to solve the shortcomings of raw JS when it comes to scalability, maintain and sustainability in larger projects. As we all know, JS is a dynamically typed language kind of similar to python where it is not needed to specify the types of variables, functions, function returns and many other things

On the surface level this looks pretty cool and interesting, less boilerplating and less code right? To some degree, yes, TS does introduce some boilerplate code due to it's type declarations, but the loosely typed of dynamically typed feature becomes the bane of development and runtime bugs as type errors are not always detected during development. Since JS doesn't yell at us even if we call wrong methods on the wrong type during development, it as usual will throw errors during runtime.

Runtime errors are the least desirable thing on an ongoing industry application. These type of bugs are often tougher to catch and debug. The project becomes quite unstructed fast, hurting the code quality, readability and maintainibility as with the growing number of lines, we become more unable to wrap around our heads all the available object/function/variable structure and blueprints. There are several many more reasons like this why TS won over JS.

**Presenting: TypeScript!** a superset of JS with strict types! TS as type annotations and strict typing to JS and enforces a solid structure and architecture on a JS project. It does not allow us to call illegal methods. The TS engine catches many many bugs during coding time reducing down bugs and eliminating many potential bugs and breaking code early on. It enforces a uniform structure to JS codes and these are the reasons why it's so much more suitable for any JS based project nowadays be it with raw TS or frameworks such as React, Svelt, Vue, TS will gurantee typesafety throughout the code base, making it more and more robust!

The Typescirpt code is not executed directly. It is first trnaspiled to JS and then JS is executed. Nowadays almost all JS runtimes support execution of JS, (atleast there latest versions) including Bun, Deno and Node. Deno and Bun have first class support for TS while NodeJs runs behind only partially supporting it's execution directly

Overall TypeScript is a blessing for the JS ecosystem, boosting software development with robustness and rigidity. It makes projects more maintainable, improve it's quiality but improvising certain strictness and makes it very much easier and more beneficial for the developer coding on TypeScript
