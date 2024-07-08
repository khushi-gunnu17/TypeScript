let user = {
    name : "Khushi",
    age : 20
}

console.log("Khushi");

console.log(user.name);

// console.log(user.email);

export {}

// In TypeScript, any file containing top-level import or export statements is considered a module. Modules have their own scope and do not pollute the global scope. Conversely, files without import or export statements are treated as scripts, and their contents are available in the global scope.

// export {} is a way to ensure a TypeScript file is treated as a module, providing scope encapsulation and preventing global namespace pollution. This is useful even if there are no actual exports in the file at the moment.