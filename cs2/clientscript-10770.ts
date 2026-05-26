//
function script10770(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 360;
    var int5 = ((int4 / int2) * int1);
    IF_SETSIZE(int5, 32, 0, 0, 23855129);
    var string0 = "";
    if ((int1 != -1)) {
        string0 = `${inttostring(int1, 10)}/${inttostring(int2, 10)}`;
    };
    if ((int3 == 0)) {
        IF_SETTEXT("Free reroll!", 23855119);
    } else {
        IF_SETTEXT(`Reroll Progress - ${string0}`, 23855119);
    };
    if (((int0 == 0) && (int3 == 1))) {
        IF_SETHIDE(0, 23855114);
    } else {
        IF_SETHIDE(1, 23855114);
        IF_SETTEXT(`Reroll Reward (${inttostring(int0, 10)})`, 23855113);
    };
    return;
}