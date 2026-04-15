//
function script1005(int0: obj): string {
    var int1 = item_getparam(int0, 7452);
    if ((int1 == -1 as dbrow)) {
        return "";
    };
    var int2 = INVOTHER_GETVAR(varclient_5121, varclient_5122, 41804);
    if ((int2 < dbrow_getfield(int1, 118912, 0))) {
        return "Egg";
    };
    if ((int2 < dbrow_getfield(int1, 118928, 0))) {
        return "Child";
    };
    if ((int2 < dbrow_getfield(int1, 118944, 0))) {
        return "Adolescent";
    };
    if ((int2 < dbrow_getfield(int1, 118896, 0))) {
        return "Adult";
    };
    return "Elder";
}