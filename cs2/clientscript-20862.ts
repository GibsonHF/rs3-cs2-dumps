//
function script20862(int0: number): number {
    var int1 = script20847();
    if ((int1 == -1 as dbrow)) {
        return int0;
    };
    var int2 = -1 as graphic;
    switch (MAP_LANG()) {
        case 1: {
            int2 = dbrow_getfield(int1, 1552432, 0);
            break;
        }
        case 2: {
            int2 = dbrow_getfield(int1, 1552416, 0);
            break;
        }
        case 3: {
            int2 = dbrow_getfield(int1, 1552448, 0);
            break;
        }
        default: {
            int2 = dbrow_getfield(int1, 1552400, 0);
            break;
        }
    };
    script14391(98172930, IF_GETNEXTSUBID(comp(1498, 2)), 0, int0, 1, 0, 544, 98, 0, 0);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 0, 24, 1, 1, int2);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 0, 24, 1, 1, 36195 as graphic);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 2, 200, 24, 0, 0, 36197 as graphic);
    var int3 = UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2)));
    var int4 = UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2)));
    var int5 = dbrow_getfield(int1, 1552480, 0);
    script10485(int3, int4, 0, 1, 1, 2, 200, 24, 0, 0, 2099, script20864(int5));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETONTIMER(callback(script20863, int3, int4, int5));
    return ++int0;
}