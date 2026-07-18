import { Lexer } from "./language/lexer/lexer";

export const lexer = new Lexer();

const source = `
layout(location = 0) out vec4 FragColor;

uniform sampler2D u_Texture;

void main()
{
    vec3 color = texture(u_Texture, vec2(0.5, 1.0)).rgb;

    float intensity = 0.75;

    if (intensity > 0.5)
    {
        color *= intensity;
    }
}
`;

const tokens = lexer.tokenize(source);

for (const token of tokens) {

    console.log(
        `${token.type} | "${token.lexeme}"`
    );
}