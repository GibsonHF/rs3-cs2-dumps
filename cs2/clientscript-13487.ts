//
function script13487(int0: int, int1: int, int2: struct): void {
    var int3 = comp(1879, 13);
    var int4 = script13488(int0);
    var string0 = struct_getparam(int2, 6600);
    var int5 = struct_getparam(int2, 6602);
    var int6 = struct_getparam(int2, 6604);
    var int7 = struct_getparam(int2, 6605);
    var int8 = struct_getparam(int2, 6606);
    if ((struct_getparam(int2, 6603) == -1 as model)) {
        IF_SETNPCMODEL(int5, int3);
    } else {
        IF_SETMODEL(struct_getparam(int2, 6603), int3);
    };
    IF_SETMODELANIM(int6, int3);
    IF_SETMODELZOOM(int7, int3);
    IF_SETPOSITION(0, (60 + int8), 1, 0, int3);
    if ((int4 == 1)) {
        IF_RESETMODELLIGHTING(int3);
        IF_SETTEXT(string0, comp(1879, 15));
    } else {
        IF_SETMODELLIGHTING(script16107(), 328 as material, int3);
        IF_SETTEXT("???", comp(1879, 15));
    };
    IF_SETTEXT("", comp(1879, 16));
    var int9 = -1;
    var int10 = -1;
    if ((int4 == 1)) {
        [int9, int10] = script13485(int5);
    };
    if ((int9 > -1)) {
        IF_SETTEXT(`Kills: ${TOSTRING_LOCALISED(int9, 1)}<br>Prestige: ${inttostring(int10, 10)}`, comp(1879, 16));
        IF_SETHIDE(false, comp(1879, 16));
    } else {
        IF_SETHIDE(true, comp(1879, 16));
    };
    var int11 = 5;
    var int12 = 5;
    int11 = ((3 + (MODULO(int1, 5) * 40)) + (MODULO(int1, 5) * 5));
    int12 = ((3 + ((int1 / 5) * 40)) + ((int1 / 5) * 5));
    IF_SETPOSITION(int11, int12, 0, 0, comp(1879, 3));
    return;
}