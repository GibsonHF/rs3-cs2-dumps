//
function script14272(int0: component, int1: unknown_int, int2: struct): void {
    var string0 = "No Command";
    var int3 = -1 as graphic;
    if ((int2 != -1 as struct)) {
        string0 = struct_getparam(int2, 1150);
        int3 = struct_getparam(int2, 1153);
    };
    IF_SETTEXT(string0, int0);
    stack(int3);
    stack(int1);
    IF_SETGRAPHIC();
    return;
}