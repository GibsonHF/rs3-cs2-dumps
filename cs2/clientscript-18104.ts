//
function script18104(int0: number): void {
    IF_SETGRAPHIC(script18008(50), comp(403, 7));  // bp3_buffs_tab:xp_buff_icon
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = DB_GETFIELDCOUNT(int0, 991520);
    while ((int9 < int10)) {
        int3 = 0;
        int1 = dbrow_getfield(int0, 991520, int9);
        stack(26411017);
        stack(int9);
        stack(int3);
        int3 = (int3 + 1);
        script15938(0, int8, 1, 0, (IF_GETWIDTH(comp(403, 9)) - 50), 58, 0, 0);  // bp3_buffs_tab:xp_buff_content_layer
        int5 = script17926(int1);
        int2 = dbrow_getfield(int1, 1036384, 0);
        if ((int5 > 0)) {
            int6 = 7970;
        } else {
            int6 = 7971;
        };
        if ((int9 == 0)) {
            int7 = 0;
        } else {
            int7 = 1;
        };
        stack(int9);
        stack(int3);
        int3 = (int3 + 1);
        script7862(0, 0, 0, 0, 0, 58, 1, 0, int6, "", 1, 1, 1, int7);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script18107, int9));
        stack(int9);
        stack(int3);
        int3 = (int3 + 1);
        script10485(0, 19, 0, 0, (CC_GETWIDTH() - 43), 20, 0, 0, 7986, `+${TOSTRING_LOCALISED(int5, 1)}% ${enum_getvalue(0, 36, 17022 as cs2enum, int2)} XP`);
        [int3, int4] = script18105(int9, int3, int1, int5, int2);
        if ((CC_FINDBYCATEGORY(comp(403, 9), int9, 0) == 1)) {  // bp3_buffs_tab:xp_buff_content_layer
            cc_setparam(4255, int4);
            if ((int9 == 0)) {
                cc_setparam(8193, 0);
                CC_SETSIZE(CC_GETWIDTH(), cc_getparam(4255), 0, 0);
                int8 = (int8 + cc_getparam(4255));
            } else {
                cc_setparam(8193, 1);
                int8 = (int8 + 58);
            };
        };
        int9 = (int9 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(403, 9));  // bp3_buffs_tab:xp_buff_content_layer
    script18109(int8);
    return;
}