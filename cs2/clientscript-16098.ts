//
function script16098(int0: number): number {
    var int1 = 0;
    if ((int0 != -1)) {
        int1 = npc_getparam(int0, 2848);
        if ((int1 == 21)) {
            return enum_getvalue(0, 23, 13675 as cs2enum, npc_getparam(int0, 26));
        };
        return enum_getvalue(0, 23, 6745 as cs2enum, int1);
    };
    return -1 as graphic;
}