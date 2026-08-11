//
function script3(): void {
    script10428(49348727, 49348728, 9030, -1, "View different category information.", varplayer_4517, 0);
    CC_DELETEALL(comp(753, 4));  // bslay_boss_info:boss_name_builder_layer
    if (((varplayer_4517 < 0) || (varplayer_4517 == -1))) {
        return;
    };
    if ((varplayer_4517 == 1)) {
        IF_SETHIDE(true, comp(753, 1));  // bslay_boss_info:boss_info_layer
        IF_SETHIDE(false, comp(753, 96));  // bslay_boss_info:boss_kill_layer
        IF_SETHIDE(true, comp(753, 107));  // bslay_boss_info:monster_layer
        return;
    };
    if ((varplayer_4517 == 2)) {
        IF_SETHIDE(true, comp(753, 1));  // bslay_boss_info:boss_info_layer
        IF_SETHIDE(true, comp(753, 96));  // bslay_boss_info:boss_kill_layer
        IF_SETHIDE(false, comp(753, 107));  // bslay_boss_info:monster_layer
        return;
    };
    IF_SETHIDE(false, comp(753, 1));  // bslay_boss_info:boss_info_layer
    IF_SETHIDE(true, comp(753, 96));  // bslay_boss_info:boss_kill_layer
    IF_SETHIDE(true, comp(753, 107));  // bslay_boss_info:monster_layer
    var int0 = 9031 as cs2enum;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as struct;
    while ((int1 < ENUM_GETOUTPUTCOUNT(int0))) {
        int4 = enum_getvalue(0, 73, int0, int1);
        if ((IF_FIND(comp(753, 4)) == 1)) {  // bslay_boss_info:boss_name_builder_layer
            int3 = script10410(49348612, 49348613, 28556, 0, (int1 * 32), CC_GETWIDTH(), 30, int3, 0, script16337(int4));
        };
        int1 = (int1 + 1);
    };
    CC_DELETEALL(comp(753, 6));  // bslay_boss_info:boss_name_scrollbar_layer
    if ((((int1 * 32) + 2) > IF_GETHEIGHT(comp(753, 2)))) {  // bslay_boss_info:bos_name_wrapper
        IF_SETSCROLLSIZE(0, ((int1 * 32) + 2), comp(753, 3));  // bslay_boss_info:boss_name_builder_layer_move
        IF_SETSCROLLPOS(0, 0, comp(753, 3));  // bslay_boss_info:boss_name_builder_layer_move
        script31(49348614, 49348611, 4343, 4340, 4341, 4342, 4337, 4336);
    };
    return;
}