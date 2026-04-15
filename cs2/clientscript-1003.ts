//
function script1003(int0: obj): string {
    var int1 = item_getparam(int0, 7452);
    if ((int1 == -1 as dbrow)) {
        return "";
    };
    var int2 = enum_getvalue(0, 73, 14344 as cs2enum, INV_GETVAR(varclient_5121, varclient_5122, 41809));
    if ((int2 == 41261 as struct)) {
        int2 = dbrow_getfield(int1, 119408, 0);
    } else if ((int2 == 41262 as struct)) {
        int2 = dbrow_getfield(int1, 119424, 0);
    } else if ((int2 == 41263 as struct)) {
        int2 = dbrow_getfield(int1, 119440, 0);
    };
    return `Trait: ${struct_getparam(int2, 7456)}`;
}