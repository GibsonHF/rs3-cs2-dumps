//
function script2306(int0: component, int1: component): void {
    var int2 = 28;
    var int3 = 0;
    var int4 = 28;
    var int5 = 0;
    var int6 = 28;
    if ((RUNENERGY_VISIBLE() >= 100)) {
        int3 = 0;
    } else {
        int3 = (int5 + (int6 - SCALE(RUNENERGY_VISIBLE(), 100, int6)));
    };
    IF_SETSIZE(int4, int3, 0, 0, int0);
    IF_SETTEXT(`${inttostring(RUNENERGY_VISIBLE(), 10)}%`, int1);
    return;
}