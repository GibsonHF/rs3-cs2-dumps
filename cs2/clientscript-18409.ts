//
function script18409(int0: unknown_int): unknown_int {
    var int1 = script18418(int0);
    if ((int1 == -1 as struct)) {
        return 1;
    };
    var int2 = script18423(int1);
    var int3 = script18424(int1);
    if ((int0 == 1)) {
        int3 = (struct_getparam(int1, 6134) - 1);
    };
    if (((((int2 == -1) || (int3 == -1)) || (script18437() < int2)) || (script18437() > int3))) {
        return 1;
    };
    if ((script1526() == 1)) {
        return 2;
    };
    if ((script18412() == 1)) {
        return 3;
    };
    return 0;
}