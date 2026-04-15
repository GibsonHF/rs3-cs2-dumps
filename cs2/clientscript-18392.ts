//
function script18392(int0: int, int1: component): void {
    var int2 = struct_getparam(enum_getvalue(0, 73, 17256 as cs2enum, int0), 9029);
    if ((int2 != -1 as npc)) {
        IF_SETNPCHEAD(int2, int1);
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Select a delivery target in the left panel for more information", comp(1279, 27));
    };
    return;
}