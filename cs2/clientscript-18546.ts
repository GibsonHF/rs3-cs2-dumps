//
function script18546(int0: struct, string0: string): string {
    var int1 = 5;
    if ((int0 == 49559 as struct)) {
        int1 = 10;
    };
    var string0 = `${string0}- Attacks have a <col=ffffff>${inttostring(int1, 10)}%</col> chance to generate <col=ffffff>${inttostring(1, 10)}</col> <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stack with each hit.`;
    return string0;
}