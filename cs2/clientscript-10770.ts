//
function script10770(int0: int, int1: int, int2: int, int3: unknown_int): void {
    var int4 = 360;
    var int5 = ((int4 / int2) * int1);
    IF_SETSIZE(int5, 32, 0, 0, comp(364, 25));
    var string0 = "";
    if ((int1 != -1)) {
        string0 = `${inttostring(int1, 10)}/${inttostring(int2, 10)}`;
    };
    if ((int3 == 0)) {
        IF_SETTEXT("Free reroll!", comp(364, 15));
    } else {
        IF_SETTEXT(`Reroll Progress - ${string0}`, comp(364, 15));
    };
    if (((int0 == 0) && (int3 == 1))) {
        IF_SETHIDE(false, comp(364, 10));
    } else {
        IF_SETHIDE(true, comp(364, 10));
        IF_SETTEXT(`Reroll Reward (${inttostring(int0, 10)})`, comp(364, 9));
    };
    return;
}