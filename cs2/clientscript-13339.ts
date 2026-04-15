//
function script13339(int0: component, int1: int, int2: achievement): void {
    var string0 = "Pin Achievement";
    var string1 = "Pin";
    var int3 = 1;
    var int4 = 29246;
    var int5 = 29247;
    var int6 = 29398;
    var int7 = 0;
    var int8 = 0;
    if ((script15325(int2) > -1)) {
        string0 = "Unpin Achievement";
        string1 = "Unpin";
        int3 = 2;
        int4 = 29401;
        int5 = 29831;
        int6 = 29832;
        int7 = 1;
    } else if ((script8230() == 0)) {
        int8 = 1;
        int4 = 29400;
    };
    CC_CLEAROPS();
    CC_CLEARSCRIPTHOOKS();
    CC_SETONVARTRANSMIT(callback(script13338, int0, int1, int2, 9622, 9623, 9624, 9625, 9626, 5));
    CC_SETGRAPHIC(int4);
    if ((int8 == 0)) {
        CC_SETOP(int3, string1);
        CC_SETOPCURSOR(int3, 46);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int5));
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int4));
        CC_SETONCLICK(callback(script5336, -2147483645, -2147483643, int6));
        CC_SETONRELEASE(callback(script5336, -2147483645, -2147483643, int5));
        if ((int7 == 1)) {
            CC_SETONOP(callback(script13340));
        } else {
            CC_SETONOP(callback(script13341));
        };
    };
    return;
}