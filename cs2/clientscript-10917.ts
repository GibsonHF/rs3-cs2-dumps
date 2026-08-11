//
function script10917(int0: number, int1: number, int2: number): void {
    var int3 = (int2 - int1);
    var int4 = (CLIENTCLOCK() - int1);
    var int5 = MIN(100, SCALE(int4, int3, 100));
    var string0 = ",";
    IF_SETSIZE(250, SCALE(45, 100, int5), 0, 0, comp(1580, 8));  // thedrop_buyin:coins
    var int6 = SCALE(int0, 100, int5);
    IF_SETTEXT(`${inttostring(int6, 10)},${inttostring(RANDOM(10), 10)}${inttostring(RANDOM(10), 10)}${inttostring(RANDOM(10), 10)},${inttostring(RANDOM(10), 10)}${inttostring(RANDOM(10), 10)}${inttostring(RANDOM(10), 10)}`, comp(1580, 7));  // thedrop_buyin:money_text
    if ((int5 == 100)) {
        IF_SETTEXT(`${inttostring(int6, 10)},000,000`, comp(1580, 7));  // thedrop_buyin:money_text
        IF_SETONTIMER(callback(), comp(1580, 0));  // thedrop_buyin:coins_layer
    };
    return;
}