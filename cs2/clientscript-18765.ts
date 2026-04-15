//
function script18765(int0: struct, int1: unknown_int, string0: string): string {
    var string0 = `${string0}<br>- ${script17720(int0, 115, (115 + 20), 0, int1)}.`;
    string0 = `${string0}<br>- ${script17720(int0, 175, (175 + 30), 0, int1)} to the target and up to ${script18561(9)} within ${script17709(1)} of you.`;
    string0 = `${string0}<br>- Deals an additional ${script17721(int0, -1, 18, (18 + 4), 0, int1)} for each <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stack with each hit.`;
    string0 = `${string0}<br>- ${script17712(120, false)} for each <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stack.`;
    string0 = `${string0}<br>- Consumes all <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stacks.`;
    return string0;
}