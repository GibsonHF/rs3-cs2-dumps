//
function script15362(int0: component, int1: component): void {
    if ((varplayer_9607 == -1 as achievement)) {
        return;
    };
    var int2 = ACHIEVEMENT_CATEGORY(varplayer_9607);
    var int3 = ACHIEVEMENT_SUBCAT(varplayer_9607);
    var int4 = enum_getreverseindex(41, 0, 16072 as cs2enum, int2, 0);
    script15353(int0, int1, int4);
    var int5 = enum_getvalue(41, 26, 16076 as cs2enum, int2);
    var int6 = -1;
    var int7 = 0;
    if ((int3 != -1 as category)) {
        int6 = enum_getreverseindex(41, 0, int5, int3, 0);
        int7 = (int6 * ((32 + 2) + 2));
        script15359(int2, int3, int7);
    };
    varclient_6829 = (int4 + 1);
    varclient_6830 = (int6 + 1);
    return;
}