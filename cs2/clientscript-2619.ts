//
function script2619(int0: unknown_int): void {
    if (((varplayer_9005 == -1 as struct) || (struct_getparam(varplayer_9005, 3847) == 0))) {
        return;
    };
    IF_NPC_SETCUSTOMHEADMODEL(1, script2783(varplayer_9005), int0);
    var int1 = script2782(varplayer_9005);
    if ((int1 != -1 as material)) {
        IF_NPC_SETCUSTOMRETEX(4, int1, int0);
    };
    return;
}