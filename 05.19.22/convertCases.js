// Convert all the cases!

// In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

// You must write a function that changes to a given case. It must be able to handle all three case types:

// js> changeCase("snakeCase", "snake")
// "snake_case"
// js> changeCase("some-lisp-name", "camel")
// "someLispName"
// js> changeCase("map_to_all", "kebab")
// "map-to-all"
// js> changeCase("doHTMLRequest", "kebab")
// "do-h-t-m-l-request"
// js> changeCase("invalid-inPut_bad", "kebab")
// undefined
// js> changeCase("valid-input", "huh???")
// undefined
// js> changeCase("", "camel")
// ""
// Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.

function changeCase(identifier, targetCase) {
    if (identifier.length === 0) return "";

    if (identifier.includes("-") && identifier.includes("_")) return undefined;

    if (
        identifier.split("").some((item) => {
            item === item.toUpperCase() &&
                (identifier.includes("-") || identifier.includes("_"));
        })
    ) {
        return undefined;
    }

    switch (targetCase) {
        case "snake":
            return identifier.split("").reduce((acc, curr) => {
                if (curr === curr.toUpperCase())
                    return (acc += `_${curr.toLowerCase()}`);
                return (acc += curr);
            }, "");
        case "camel":
            return identifier.split(/\_|\-/g).reduce((acc, curr, i) => {
                if (i > 0)
                    return (acc +=
                        curr.slice(0, 1).toUpperCase() + curr.slice(1));
                return (acc += curr);
            }, "");
        case "kebab":
            return identifier.split("").reduce((acc, curr) => {
                if (curr === "_") return (acc += "-");
                if (curr === curr.toUpperCase())
                    return (acc += `-${curr.toLowerCase()}`);
                return (acc += curr);
            }, "");

        // default:
        //     return undefined;
    }
}
