//
function script18823(int0: int, int1: component): void {
    var int2 = script16604(int0);
    if ((int2 == -1 as dbrow)) {
        return;
    };
    var int3 = dbrow_getfield(int2, 753680, 0);
    var int4 = dbrow_getfield(int2, 753696, 0);
    var int5 = -1 as obj;
    var int6 = 0;
    [int5, int6] = dbrow_getfield(int2, 753712, 0);
    var string0 = "";
    if (((int3 > 1) || (int4 > 0))) {
        string0 = script18815(int3, int4);
    } else if (((int5 != -1 as obj) && (int6 > 0))) {
        string0 = script18816(int5, int6);
    };
    script3536(string0, int1, -1);
    return;
}