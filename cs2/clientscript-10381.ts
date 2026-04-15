//
function script10381(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = -1 as struct;
    var int5 = -1 as cs2enum;
    if ((PLAYER_GROUP_FIND() == 1)) {
        IF_SETHIDE(true, int2);
        IF_SETONTIMER(callback(), int2);
        if ((varplayergroup_16 == 999999)) {
            IF_SETTEXT("Custom groups can not assign teams.", int3);
            return;
        };
        int4 = enum_getvalue(0, 73, 888 as cs2enum, varplayergroup_16);
        if ((int4 == -1 as struct)) {
            IF_SETTEXT("Your group can not assign teams.", int3);
            return;
        };
        int5 = struct_getparam(int4, 4508);
        if ((int5 == -1 as cs2enum)) {
            IF_SETTEXT("Your group can not assign teams.", int3);
            return;
        };
        script10427(int0, int1, int5, -1, "Select a team.", 0);
    } else {
        IF_SETHIDE(false, int2);
        IF_SETONTIMER(callback(script10382, int0, int1, int2, int3), int2);
    };
    return;
}