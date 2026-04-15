//
function script11017(int0: component, int1: component, int2: unknown_int, int3: component, int4: component, int5: component, int6: unknown_int, int7: component, int8: unknown_int, int9: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    var int10 = 5;
    var int11 = (IF_GETWIDTH(int1) - 10);
    var int12 = 0;
    var int13 = (1 - varbitplayer_35911);
    var int14 = -1;
    if ((script6431() == true)) {
        int13 = script892(varbitplayer_43683);
    };
    CC_DELETEALL(int1);
    CC_DELETEALL(int0);
    [int10, int14] = script6310(int1, "Toggle members and free worlds.", int10, 0);
    int10 = (int10 + 3);
    [int10, int12] = script10429(int1, int0, 0, int10, int11, int12, 7230 as cs2enum, -1, "Select types of world.", varbitplayer_26925, 0);
    int10 = (int10 + 10);
    [int10, int14] = script6310(int1, "Toggle lootshare worlds.", int10, 0);
    int10 = (int10 + 3);
    [int10, int12] = script10429(int1, int0, 0, int10, int11, int12, 9728 as cs2enum, -1, "Select loot settings.", varbitplayer_26926, 0);
    int10 = (int10 + 15);
    [int14, int12] = script6310(int0, "Hide legacy-only worlds.", int10, 1);
    [int10, int12] = script10417(int1, int0, (IF_GETWIDTH(int1) - (18 + 12)), (int10 - 2), int12, varbitplayer_54472);
    int10 = (int10 + 15);
    [int14, int12] = script6310(int0, "Hide EOC-only worlds.", int10, 1);
    [int10, int12] = script10417(int1, int0, (IF_GETWIDTH(int1) - (18 + 12)), (int10 - 2), int12, varbitplayer_54473);
    int10 = (int10 + 15);
    [int14, int12] = script6310(int0, "Toggle world-hop confirmation.", int10, 1);
    [int10, int12] = script10417(int1, int0, (IF_GETWIDTH(int1) - (18 + 12)), (int10 - 2), int12, int13);
    int10 = MAX((int10 + 15), 50);
    IF_SETONOP(callback(script7412, int3, int4, int5, int6, int7, int8, int9, int10), int2);
    return;
}