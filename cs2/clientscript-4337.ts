//[proc,clan_offset_tostring]
function script4337(int0: int): string {
    var string0 = "+";
    if ((int0 < 0)) {
        string0 = "-";
        var int0 = (0 - int0);
    };
    var int1 = (int0 / 60);
    var int2 = MODULO(int0, 60);
    var string1 = inttostring(int1, 10);
    if ((int1 < 10)) {
        string1 = `0${inttostring(int1, 10)}`;
    };
    var string2 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string2 = `0${inttostring(int2, 10)}`;
    };
    return `${string0}${string1}:${string2}`;
}