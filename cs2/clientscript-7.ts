//
function script7(int0: npc): [int, int] {
    if ((varbitplayer_27170 == 3)) {
        script38();
        return [-1, -1];
    };
    if ((((varplayer_623 == -1 as npc_uid) && (varplayer_616 == -1 as player_uid)) && (((varbitplayer_38842 == 0) || (varplayer_7879 != 1)) || (varbitclient_41275 == 1)))) {
        script38();
        return [-1, -1];
    };
    if ((varbitplayer_38842 == 1)) {
        return [0, 0];
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if (((varbitplayer_22332 == 0) || ((varbitplayer_22332 == 1) && (varbitplayer_27170 >= 2)))) {
        [int1, int2, int3, int4, int5] = GET_ENTITY_BOUNDING_BOX();
        if ((int1 == 0)) {
            script38();
            return [-1, -1];
        };
        [int6, int8, int7] = GET_ENTITY_SCREEN_POSITION(0);
        [int6, int9, int7] = GET_ENTITY_SCREEN_POSITION(GET_ENTITY_OVERLAY_HEIGHT());
        int9 = (int9 - 20);
        if ((int0 != -1 as npc)) {
            int9 = (int9 - npc_getparam(int0, 7237));
        };
        int10 = (int8 - int9);
        if ((CC_FIND(comp(1488, 0), varclient_2826) == 1)) {
            CC_SETHIDE(false);
            CC_SETPOSITION(int2, int9, 0, 0);
            CC_SETSIZE((int4 - int2), int10, 0, 0);
        } else {
            varclient_2826 = IF_GETNEXTSUBID(comp(1488, 0));
            CC_CREATE(comp(1488, 0), 3, varclient_2826);
            CC_SETTRANS(255);
            CC_SETPOSITION(int2, int9, 0, 0);
            CC_SETSIZE((int4 - int2), int10, 0, 0);
        };
    };
    IF_SETHIDE(false, comp(1490, 14));
    return [int6, int9];
}