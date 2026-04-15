//
function script9962(int0: component, int1: component): void {
    if ((varplayer_9607 != -1 as achievement)) {
        return;
    };
    var int2 = (varplayer_9620 - 1);
    var int3 = (varplayer_9621 - 1);
    var int4 = -1 as category;
    var int5 = -1 as cs2enum;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    if ((int2 > -1)) {
        int8 = (2 + ((int2 + 1) * (45 + 2)));
        int4 = enum_getvalue(0, 41, 16072 as cs2enum, int2);
        script15353(int0, int1, int2);
        if ((int3 >= 0)) {
            int5 = enum_getvalue(41, 26, 16076 as cs2enum, int4);
            varclient_6830 = (int3 + 1);
            script15355(int0, int1, int5, int4, int2, int8, 1);
        } else {
            varclient_6830 = -1;
        };
        varclient_6829 = (int2 + 1);
    };
    return;
}