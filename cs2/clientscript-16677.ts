//
function script16677(): void {
    script16679();
    script14391(comp(1253, 37), 2, 0, 78, 1, 0, 0, 192, 1, 1);
    CC_SETNOCLICKTHROUGH(true);
    script14391(comp(1253, 37), 3, 0, -20, 1, 1, 235, 253, 0, 0);
    script7920(comp(1253, 37), 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 1, 19731 as graphic);
    script15939(comp(1253, 37), 3, 1, 0, 3, 0, 58, 1, 0, 50, 85, 1, 1);
    script7920(comp(1253, 37), 3, 2, 3, 1, 0, -30, 1, 1, 294, 294, 0, 0, 19732 as graphic);
    script7920(comp(1253, 37), 3, 3, 3, 1, 0, -30, 1, 1, 294, 294, 0, 0, 19733 as graphic);
    script10507(comp(1253, 37), 3, 4, 0, 3, 0, 20, 1, 0, 8, 34, 1, 0, 1314 as dbrow, "Bonus reward");
    CC_SETCOLOUR(16777215);
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1] = script16653(varbitplayer_51407);
    script7920(comp(1253, 37), 3, 5, 0, 3, 0, -17, 1, 1, 75, 75, 0, 0, -1 as graphic);
    if ((item_getparam(int0, 2531) == 2)) {
        CC_SETGRAPHIC(enum_getvalue(0, 23, 11578 as cs2enum, varbitplayer_51407));
        [int2, int3] = CC_GETGRAPHICDIMENSIONS();
        CC_SETASPECT(int2, int3);
        if ((int2 > int3)) {
            CC_SETSIZE(75, 1, 0, 4);
        } else {
            CC_SETSIZE(1, 75, 4, 0);
        };
    } else {
        CC_SETOBJECT_NONUM(int0, int1);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(0, -12, 1, 1);
    };
    script10507(comp(1253, 37), 3, 6, 0, 3, 0, 70, 1, 2, 50, 32, 1, 0, 4699 as dbrow, script16655());
    script7863(comp(1253, 37), 3, 7, 0, 3, 0, 30, 1, 2, 130, 32, 0, 0, 17062 as dbrow, "Claim");
    CC_SETONOP(callback(script16680));
    CC_SETOP(1, "Claim");
    script6574(1);
    return;
}