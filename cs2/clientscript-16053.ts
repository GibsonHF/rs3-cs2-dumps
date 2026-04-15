//
function script16053(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(15414 as cs2enum);
    varbitclient_50189 = 0;
    varbitclient_50190 = 0;
    var int3 = -1 as obj;
    while ((int1 < 6)) {
        CC_CREATE(int0, 6, int1++);
        CC_SETSIZE(91, 82, 0, 0);
        int3 = enum_getvalue(0, 33, 15414 as cs2enum, RANDOM(int2));
        CC_SETOBJECT(int3, -1);
        CC_SETMODELZOOM(SCALE(CC_GETMODELZOOM(), 100, 125));
        CC_SETPOSITION((91 * (int1 - 2)), 0, 0, 4);
    };
    return;
}