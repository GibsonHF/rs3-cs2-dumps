//
function script4607(): void {
    var int0 = script4606();
    var int1 = comp(1802, 62);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int0 > 1)) {
        int2 = 139;
    } else if ((int0 == 1)) {
        int2 = ((139 * (DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(6326))) / (DATE_MINUTES_FROMRUNEDAY(6329) - DATE_MINUTES_FROMRUNEDAY(6326)));
    };
    if ((int0 > 2)) {
        int3 = 161;
    } else if ((int0 == 2)) {
        int3 = ((161 * (DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(6329))) / (DATE_MINUTES_FROMRUNEDAY(6331) - DATE_MINUTES_FROMRUNEDAY(6329)));
    };
    if ((int0 > 3)) {
        int4 = 159;
    } else if ((int0 == 3)) {
        int4 = ((159 * (DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(6331))) / (DATE_MINUTES_FROMRUNEDAY(6336) - DATE_MINUTES_FROMRUNEDAY(6331)));
    };
    if ((int0 > 4)) {
        int5 = 143;
    } else if ((int0 == 4)) {
        int5 = ((143 * (DATE_MINUTES() - DATE_MINUTES_FROMRUNEDAY(6336))) / (DATE_MINUTES_FROMRUNEDAY(6340) - DATE_MINUTES_FROMRUNEDAY(6336)));
    };
    int6 = (((int2 + int3) + int4) + int5);
    CC_DELETEALL(int1);
    if ((IF_FIND(int1) == 1)) {
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETGRAPHIC(18070 as graphic);
        CC_SETSIZE(int6, 19, 0, 0);
    };
    return;
}