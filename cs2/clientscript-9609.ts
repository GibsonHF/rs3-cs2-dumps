//
function script9609(int0: obj): void {
    var int1 = true;
    var int2 = true;
    var string0 = "-";
    var string1 = "-";
    var int3 = -1 as obj;
    var int4 = -1 as obj;
    var string2 = "-";
    var string3 = "-";
    if ((int0 != -1 as obj)) {
        int3 = item_getparam(int0, 7245);
        int4 = item_getparam(int0, 7246);
        string0 = OC_NAME(int3);
        string1 = OC_NAME(int4);
        string2 = TOSTRING_LOCALISED(item_getparam(int0, 7247), 1);
        string3 = TOSTRING_LOCALISED(item_getparam(int0, 7248), 1);
        if (((INV_TOTAL(93 as inv, int3) > 0) && (INV_TOTAL(93 as inv, int4) > 0))) {
            int1 = false;
        };
        if ((INV_TOTAL(93 as inv, int0) > 0)) {
            int2 = false;
        };
    };
    IF_SETTEXT(string0, comp(419, 11));
    IF_SETTEXT(string1, comp(419, 14));
    IF_SETTEXT(string2, comp(419, 17));
    IF_SETTEXT(string3, comp(419, 18));
    script13971(comp(419, 19), comp(-1, 65535), 28553 as struct, "Create", int1);
    script13971(comp(419, 20), comp(-1, 65535), 28553 as struct, "Separate", int2);
    IF_SETONTIMER(callback(), comp(419, 3));
    return;
}