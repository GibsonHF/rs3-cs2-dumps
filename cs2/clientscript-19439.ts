//
function script19439(int0: component, int1: int, int2: graphic, int3: graphic, int4: struct, int5: dbrow, int6: int, int7: int, string0: string): void {
    var int8 = 0;
    var int9 = script6428(int1, varbitplayer_56571);
    script15938(int0, int1, int8++, 0, 0, 1, 1, 0, 0, 1, 1);
    script7862(int1, int8++, 0, 0, 1, 1, 0, 0, 1, 1, 4476 as dbrow, "", true, 1, true, int9);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script19451, -2147483645, -2147483643));
    if ((int2 != -1)) {
        script7918(int1, int8++, 0, 0, 1, 1, 32, 32, 0, 0, int2);
    };
    if ((int9 == true)) {
        script19440(int3, int4, int5, string0, int6, int7);
    };
    return;
}