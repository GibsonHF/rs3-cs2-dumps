//[clientscript,cws_setup]
function script348(int0: number, int1: number, int2: number): void {
    var int3 = script12835(int2);
    var int4 = 941;
    if ((int3 >= 7)) {
        IF_SETHIDE(0, int0);
        IF_SETGRAPHIC(942, int1);
        IF_SETONCLICK(callback(script44, int1, int4), int0);
    } else if ((int3 == 6)) {
        IF_SETHIDE(0, int0);
        IF_SETGRAPHIC(941, int1);
        int4 = 942;
        IF_SETONCLICK(callback(script44, int1, int4), int0);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETONCLICK(callback(), int0);
    };
    return;
}