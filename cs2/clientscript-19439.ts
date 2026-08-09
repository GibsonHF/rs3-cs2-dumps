//
function script19439(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): void {
    var int8 = 0;
    var int9 = script6428(int1, varbitplayer_56571);
    stack(int0);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script15938(0, 0, 1, 1, 0, 0, 1, 1);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script7862(0, 0, 1, 1, 0, 0, 1, 1, callback(script4476), 1, 1, 1, int9);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script19451, -2147483645, -2147483643));
    if ((int2 != -1)) {
        stack(int1);
        stack(int8);
        int8 = (int8 + 1);
        script7918(0, 0, 1, 1, 32, 32, 0, 0, int2);
    };
    if ((int9 == 1)) {
        script19440(int3, int4, int5, string0, int6, int7);
    };
    return;
}