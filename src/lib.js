const SYSTEM_STYLE = `
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.58;
    letter-spacing: -.003em;
`;

const SKILL_STYLE = `
    font-size: 16px;
`

export function sys(text) {
	console.log("%c" + text, SYSTEM_STYLE);
}
export function sys2(text) {
	console.log("%c" + text, SKILL_STYLE);
}

export var host = "http://" + location.hostname + ":8000";
