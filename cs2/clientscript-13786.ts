//
function script13786(): void {
    if (((varplayer_1831 == -1 as obj) || (script4157() != 5))) {
        return;
    };
    var int0 = npc_getparam(item_getparam(varplayer_1831, 74), 5051);
    var int1 = enum_getvalue(73, 73, 7225 as cs2enum, int0);
    var int2 = struct_getparam(11063 as struct, 2483);
    var int3 = script3204(int0);
    var int4 = -1 as npc;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    switch (int3) {
        case 1: {
            int4 = struct_getparam(int1, 3148);
            int5 = struct_getparam(int1, 5052);
            int7 = struct_getparam(int1, 5055);
            IF_SETPOSITION(0, 0, 1, 4, 43384884);
            break;
        }
        case 2: {
            int4 = struct_getparam(int1, 3150);
            int5 = struct_getparam(int1, 5053);
            int7 = struct_getparam(int1, 5056);
            IF_SETPOSITION(0, 0, 1, 4, 43384884);
            break;
        }
        case 3: {
            int4 = struct_getparam(int1, 3152);
            int5 = struct_getparam(int1, 5054);
            int7 = struct_getparam(int1, 5057);
            IF_SETPOSITION(0, 0, 1, 4, 43384884);
            break;
        }
    };
    IF_SETNPCMODEL(int4, 43384884);
    IF_SETMODELZOOM(int5, 43384884);
    IF_SETPOSITION(0, script13787(int7), 1, 4, 43384884);
    if (((int2 != -1 as struct) && (int4 != -1 as npc))) {
        IF_NPC_SETCUSTOMRECOL(1, struct_getparam(int2, 2503), 43384884);
        stack(2);
        stack(int2);
        stack(2504);
        struct_getparam();
        IF_NPC_SETCUSTOMRECOL(stack(), 43384884);
        stack(3);
        stack(int2);
        stack(2505);
        struct_getparam();
        IF_NPC_SETCUSTOMRECOL(stack(), 43384884);
        stack(4);
        stack(int2);
        stack(2506);
        struct_getparam();
        IF_NPC_SETCUSTOMRECOL(stack(), 43384884);
    };
    IF_SETHIDE(0, 43384919);
    IF_SETHIDE(1, 43384920);
    if ((varbitplayer_6048 == 101)) {
        IF_SETHIDE(1, 43384921);
    };
    if ((varbitplayer_27747 == 0)) {
        IF_SETHIDE(1, 43384887);
    } else {
        IF_SETHIDE(0, 43384887);
    };
    IF_SETHIDE(1, 43384885);
    IF_SETHIDE(1, 43384901);
    script11727(0);
    IF_SETPOSITION(10, 44, 0, 0, 43384886);
    script15829(0);
    script15833();
    script14446(script734(varbitplayer_27747));
    return;
}