//
function script19009(int0: struct, int1: int, int2: int, int3: int, int4: int, int5: graphic, int6: graphic): void {
    var int7 = -1 as graphic;
    var int8 = int2;
    var int9 = int2;
    var string0 = "Dig";
    if ((int0 == 49941 as struct)) {
        string0 = "Prepare";
        var [int7, int5, int6] = script18988(int1);
        if ((int1 == 12)) {
            int9 = 66;
            var int4 = (int4 - (int9 - int2));
            string0 = "Complete";
        };
    };
    CC_CREATE(comp(1870, 16), 5, int1);
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETGRAPHIC(int5);
    CC_SETOP(1, string0);
    CC_SETONOP(callback(script19007, int1, -2147483644));
    CC_CREATE(122552338, 5, int1);
    CC_SETOPCURSOR(1, 173);
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONVARTRANSMIT(callback(script19014, int1, 7940, 7941, 7932, 7933, 7934, 7935, 7936, 7937, 7938, 9));
    CC_CREATE(122552337, 5, int1);
    CC_SETSIZE(int8, int9, 0, 0);
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int6));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, -1));
    return;
}