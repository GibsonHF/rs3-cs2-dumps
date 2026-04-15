//[proc,clan_time_tostring]
function script4341(int0: int, int1: int, int2: int): [string, string] {
    var string0 = inttostring(int1, 10);
    var string1 = inttostring(int2, 10);
    var int3 = 0;
    var string2 = "";
    int3 = (((60 * int1) + int0) + int2);
    if ((int3 < 0)) {
        int3 = (1440 + int3);
    };
    var int2 = MODULO(int3, 60);
    var int1 = (int3 / 60);
    if ((int1 > 23)) {
        int1 = (int1 - 24);
    } else if ((int1 < 0)) {
        int1 = (24 - int1);
    };
    if ((int1 < 10)) {
        string0 = `0${inttostring(int1, 10)}`;
    } else {
        string0 = inttostring(int1, 10);
    };
    if ((int2 < 10)) {
        string1 = `0${inttostring(int2, 10)}`;
    } else {
        string1 = inttostring(int2, 10);
    };
    return [string0, string1];
}