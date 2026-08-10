//
function script13379(int0: number): number {
    script20988();
    if (BRANCH_EQUALS(1)) {
        stack(int1);
        script20990();
        return;
    };
    var int2 = item_getparam(int0, 9119);
    if ((int2 == -1)) {
        return 0;
    };
    var int3 = script11943(int2);
    var int4 = 0;
    switch (item_getparam(int0, 9119)) {
        case 50071:
        case 50072:
        case 50073:
        case 50074:
        case 50075:
        case 50076:
        case 52069:
        case 52070: {
            if ((int3 >= 1)) {
                int4 = (int4 + (enum_getvalue(0, 0, 7339, 100) - enum_getvalue(0, 0, 7339, 95)));
            };
            break;
        }
    };
    return int4;
}