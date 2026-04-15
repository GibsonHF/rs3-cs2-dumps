//
function script13379(int0: obj): int {
    var int1 = item_getparam(int0, 9119);
    if ((int1 == -1 as struct)) {
        return 0;
    };
    var int2 = script11943(int1);
    var int3 = 0;
    switch (item_getparam(int0, 9119)) {
        case 50071:
        case 50072:
        case 50073:
        case 50074:
        case 50075:
        case 50076:
        case 52069:
        case 52070: {
            if ((int2 >= 1)) {
                int3 = (int3 + (enum_getvalue(0, 0, 7339 as cs2enum, 100) - enum_getvalue(0, 0, 7339 as cs2enum, 95)));
            };
            break;
        }
    };
    return int3;
}