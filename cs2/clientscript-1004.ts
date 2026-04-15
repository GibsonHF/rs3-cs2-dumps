//
function script1004(int0: obj): string {
    var int1 = item_getparam(int0, 7452);
    if ((int1 == -1 as dbrow)) {
        return "Unknown";
    };
    var int2 = -1 as cs2enum;
    var int3 = -1 as cs2enum;
    [int2, int3] = dbrow_getfield(int1, 119456, 0);
    if ((INVOTHER_GETVAR(varclient_5121, varclient_5122, 41803) == 0)) {
        return enum_getvalue(0, 36, int2, INVOTHER_GETVAR(varclient_5121, varclient_5122, 41802));
    };
    return enum_getvalue(0, 36, int3, INVOTHER_GETVAR(varclient_5121, varclient_5122, 41802));
}