//
function script12540(int0: component, int1: component): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    var int2 = -1;
    if (((int0 == comp(1475, 56)) && (enum_hasoutput(0, 7710 as cs2enum, varclient_8372) == 1))) {
        int2 = enum_getreverseindex(0, 0, 7710 as cs2enum, varclient_8372, 0);
    };
    script14141(int0, int1, 7711 as cs2enum, -1, "", int2, 0, false, "Load Preset");
    return;
}