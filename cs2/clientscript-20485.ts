//
function script20485(int0: component, int1: dbrow, int2: int, int3: int, string0: string): void {
    var int4 = script20478(string0, IF_GETWIDTH(int0), int1, 0);
    IF_SETTEXT(string0, int0);
    IF_SETSIZE(int2, int4, int3, 0, int0);
    return;
}