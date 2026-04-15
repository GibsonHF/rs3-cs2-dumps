//
function script14326(int0: component, int1: component, int2: cs2enum, int3: int, int4: int, int5: int): [int, int] {
    var int6 = ENUM_GETOUTPUTCOUNT(int2);
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    while ((int8 < int6)) {
        int7 = enum_getvalue(0, 33, int2, int8);
        script10410(int0, int1, 28556 as struct, int9, int3, 48, 52, int4, false, "");
        if ((CC_FIND(int1, int4) == 1)) {
            CC_SETOPBASE(`<col=FF981F>${OC_NAME(int7)}</col>`);
            CC_SETOP(1, "Info");
            CC_SETOP(2, "Buy 1");
            CC_SETOP(3, "Buy 5");
            CC_SETOP(4, "Buy 10");
            CC_SETOP(5, "Buy 50");
            CC_SETOP(6, "Buy 250");
            CC_SETOP(10, "Examine");
            CC_SETONMOUSEREPEAT(callback(script9564, int7, -2147483645, -2147483643));
        };
        script6197(int0, 36, 32, (int9 + 6), (int3 + 4), int7, -1);
        script4512(int0, 12, 12, (int9 + 2), (int3 + 38), 2181 as graphic);
        script6200(int0, 31, 12, (int9 + 14), (int3 + 38), 26 as fontmetrics, script940(script2262(int7)), 0);
        CC_SETTEXTALIGN(2, 1, 0);
        int8 = (int8 + 1);
        var int4 = (int4 + 1);
        if (((++int9 + 48) > int5)) {
            int9 = 0;
            var int3 = (int3 + 56);
        };
    };
    if ((int9 != 0)) {
        int9 = 0;
        int3 = (int3 + 52);
    };
    return [int8, int3];
}