//
function script6531(int0: component, int1: int, int2: int): void {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    var int3 = (DATE_MINUTES_FROMRUNEDAY((int2 + 1)) - DATE_MINUTES());
    var int4 = (int3 / 1440);
    var int5 = (MODULO(int3, 1440) / 60);
    var int6 = MODULO(int3, 60);
    var string0 = inttostring(int4, 10);
    var string1 = inttostring(int5, 10);
    var string2 = inttostring(int6, 10);
    if ((STRING_LENGTH(string0) == 1)) {
        string0 = strconcat("0", string0);
    };
    if ((STRING_LENGTH(string1) == 1)) {
        string1 = strconcat("0", string1);
    };
    if ((STRING_LENGTH(string2) == 1)) {
        string2 = strconcat("0", string2);
    };
    var string3 = `${string0}D ${string1}H ${string2}M`;
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXT(string3);
    };
    return;
}