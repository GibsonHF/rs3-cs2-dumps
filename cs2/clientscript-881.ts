//
function script881(int0: struct, int1: int): void {
    var int2 = script883(int0);
    var int3 = script12422(int2, int1, 150);
    IF_SETSIZE(int3, 12, 0, 0, struct_getparam(int0, 7417));
    IF_SETTEXT(`${inttostring(int2, 10)}/${inttostring(int1, 10)}`, struct_getparam(int0, 7418));
    return;
}