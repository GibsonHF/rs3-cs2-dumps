//
function script18547(int0: struct, string0: string): string {
    var int1 = 1;
    var int2 = 10;
    if ((int0 == 49558 as struct)) {
        int1 = 2;
        int2 = 15;
    };
    var string0 = `${string0}- Attacks have a <col=ffffff>${inttostring(int1, 10)}%</col> chance to generate <col=ffffff>${inttostring(1, 10)}</col> <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stack with each hit.`;
    string0 = `${string0}<br>- Applying a <sprite=15190><nbsp><col=ffffff>${struct_getparam(49562, 2794)}</col> stack grants <sprite=15184><nbsp><col=ffffff>${struct_getparam(49563, 2794)}</col> for <col=ffffff>${script15973(int2, 1)}</col>.`;
    string0 = script17708(string0, 49563 as struct);
    return string0;
}