//
function script18188(int0: unknown_int, string0: string): unknown_int {
    var int1 = -1;
    MES_TYPED(99, 0, `Substring: ${string0}`);
    if ((strcmp(string0, "") != 0)) {
        int1 = IF_SETONDROPDOWNSELECT(667680, string0, 0);
        var int0 = script18180(int0, int1);
    };
    return int0;
}