//
function script10791(int0: int, int1: component): void {
    var int2 = struct_getparam(enum_getvalue(0, 73, 9563 as cs2enum, int0), 4718);
    if ((int2 != -1 as npc)) {
        IF_SETNPCHEAD(int2, int1);
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1567, 46));
    };
    return;
}