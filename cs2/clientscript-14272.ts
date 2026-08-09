//
function script14272(int0: number, int1: number, int2: number): void {
    var string0 = "No Command";
    var int3 = -1;
    if ((int2 != -1)) {
        string0 = struct_getparam(int2, 1150);
        int3 = struct_getparam(int2, 1153);
    };
    IF_SETTEXT(string0, int0);
    IF_SETGRAPHIC(int3, int1);
    return;
}