import { Analyzer } from "./analyzer";
import { Parser } from "../parser/parser";
import { Lexer } from "../lexer/lexer";

export function test() {}

const source = `
uniform sampler2D tex;

vec3 lightDir;

float intensity;

struct Light {

    vec3 direction;
    float strength;
};

void main() {

    float num = 100.0;
    float dist = num;
}
`;

const lexer = new Lexer();
const tokens = lexer.tokenize(source);

console.log("Lexer Completed!");

const parser = new Parser();
const programNode = parser.parse(tokens);

console.log("Parser Completed!");

// console.log(programNode);

const analyzer = new Analyzer();
analyzer.analyze(programNode);

console.log("Analyzer Completed!");