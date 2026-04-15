//
function script13618(int0: component, int1: int, int2: achievement): void {
    var string0 = ACHIEVEMENT_GETNAME(int2);
    var string1 = `Favourite ${string0}`;
    var string2 = "Favourite";
    var int3 = 3;
    var int4 = 29061;
    var int5 = 29062;
    var int6 = 29063;
    var int7 = 0;
    if (((((varplayer_9616 == int2) || (varplayer_9617 == int2)) || (varplayer_9618 == int2)) || (varplayer_9619 == int2))) {
        string1 = `Unfavourite ${string0}`;
        string2 = "Unfavourite";
        int3 = 4;
        int4 = 29064;
        int5 = 29065;
        int6 = 29066;
        int7 = 1;
    };
    CC_CLEAROPS();
    CC_SETOP(int3, string2);
    CC_SETOPCURSOR(int3, 46);
    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    CC_SETGRAPHIC(int4);
    CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int5));
    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int4));
    CC_SETONCLICK(callback(script5336, -2147483645, -2147483643, int6));
    CC_SETONRELEASE(callback(script5336, -2147483645, -2147483643, int5));
    CC_SETONVARTRANSMIT(callback(script13617, int0, int1, int2, 9616, 9617, 9618, 9619, 4));
    if ((int7 == 1)) {
        CC_SETONOP(callback(script13340));
    } else {
        CC_SETONOP(callback(script13341));
    };
    return;
}