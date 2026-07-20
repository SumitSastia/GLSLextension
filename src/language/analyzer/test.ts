import { Analyzer } from "./analyzer";
import { Parser } from "../parser/parser";
import { Lexer } from "../lexer/lexer";

export function test() {}

const source = `
uniform sampler2D tex;

vec3 lightDir;

float intensity;

void main() {}
`;

const lexer = new Lexer();
const tokens = lexer.tokenize(source);

const parser = new Parser();
const programNode = parser.parse(tokens);

const analyzer = new Analyzer();
analyzer.analyze(programNode);