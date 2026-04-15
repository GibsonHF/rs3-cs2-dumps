//
function script10830(int0: int, int1: component, int2: unknown_int): void {
    var int3 = enum_getvalue(0, 73, 9563 as cs2enum, int0);
    if ((int2 == 0)) {
        IF_SETMODELANIM(9806 as seq, int1);
        IF_SENDTOFRONT(int1);
        IF_SETMODELZOOM(3000, int1);
        if ((int3 != -1 as struct)) {
            IF_SETTEXT(`${struct_getparam(int3, 4720)}<br>Select someone to receive a present!`, comp(1567, 46));
        };
    } else {
        IF_SETMODELANIM(-1 as seq, int1);
        IF_SETMODELZOOM(3500, int1);
    };
    return;
}