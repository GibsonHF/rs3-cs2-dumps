//
function script18293(): number {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    [int0, int1, int2, int3] = script18289();
    var int4 = 0;
    if (((int0 != -1) && (script18294(int0) == 1))) {
        int4 = (int4 + struct_getparam(int0, 8890));
    };
    if (((int1 != -1) && (script18294(int1) == 1))) {
        int4 = (int4 + struct_getparam(int1, 8890));
    };
    if (((int2 != -1) && (script18294(int2) == 1))) {
        int4 = (int4 + struct_getparam(int2, 8890));
    };
    if (((int3 != -1) && (script18294(int3) == 1))) {
        int4 = (int4 + struct_getparam(int3, 8890));
    };
    return (int4 * 2);
}