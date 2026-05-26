//
function script18222(int0: number): void {
    var int1 = 1;
    var string0 = "";
    [int1, string0] = script18155();
    var int2 = 0;
    if ((int1 == 1)) {
        int2 = 1;
    };
    IF_CLEAROPS(int0);
    IF_SETENABLED(int2, int0);
    IF_SETOP(1, IF_GETTEXT(int0), int0);
    script16248(string0, int0, -1);
    script16247(int0, -1);
    var int3 = script6431();
    if (((((int3 == 1) && (int2 == 0)) || (int3 == 0)) && (STRING_LENGTH(string0) > 0))) {
        script3536(string0, int0, -1);
    };
    return;
}