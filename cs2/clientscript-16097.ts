//
function script16097(int0: npc): string {
    var int1 = 0;
    if ((int0 != -1 as npc)) {
        int1 = npc_getparam(int0, 2848);
        if ((int1 == 21)) {
            return enum_getvalue(0, 36, 16502 as cs2enum, npc_getparam(int0, 26));
        };
        return enum_getvalue(0, 36, 7733 as cs2enum, int1);
    };
    return "";
}