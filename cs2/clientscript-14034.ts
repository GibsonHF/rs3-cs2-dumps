//
function script14034(int0: number, int1: number, int2: number): string {
    if ((int1 >= 1000000)) {
        return "";
    };
    if ((int0 <= 1)) {
        return TOSTRING_LOCALISED(((int0 * 1000000) + int1), int2);
    };
    var string0 = "";
    if ((int2 == 1)) {
        string0 = script8001();
    };
    return `${TOSTRING_LOCALISED(int0, int2)}${string0}${script47((int1 / 1000))}${string0}${script47((int1 - ((int1 / 1000) * 1000)))}`;
}