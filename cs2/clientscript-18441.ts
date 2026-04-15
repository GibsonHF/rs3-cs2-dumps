//
function script18441(int0: struct): void {
    var int1 = script18437();
    var int2 = script18424(int0);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    if ((int1 < int2)) {
        script18442(false);
        [int3, int4, int5] = script3985(int1, 1);
        int3 = -1;
        if (((int4 == 0) && (int5 == 0))) {
            int4 = 23;
            int5 = 59;
        };
        string0 = script3382(int3, int4, int5, -1, 1, 0);
        IF_SETTEXT(string0, comp(1280, 13));
    } else {
        script18442(true);
    };
    IF_SETTEXT(`This event ends: ${script18408(int2)}`, comp(1280, 11));
    return;
}