//
function script18441(int0: number): void {
    var int1 = script18437();
    var int2 = script18424(int0);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    if ((int1 < int2)) {
        script18442(0);
        [int3, int4, int5] = script3985(int1, 1);
        int3 = -1;
        if (((int4 == 0) && (int5 == 0))) {
            int4 = 23;
            int5 = 59;
        };
        string0 = script3382(int3, int4, int5, -1, 1, 0);
        IF_SETTEXT(string0, 83886093);
    } else {
        script18442(1);
    };
    IF_SETTEXT(`This event ends: ${script18408(int2)}`, 83886091);
    return;
}