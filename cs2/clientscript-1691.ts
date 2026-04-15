//[clientscript,poh_bookcase_build]
function script1691(int0: component, int1: component): void {
    var int2 = 0;
    if ((strcmp(varclient_5877, "") != 0)) {
        int2 = 1;
    } else {
        IF_SETTEXT("Interact here to search for a book", comp(87, 16));
    };
    if ((int2 == 1)) {
        script9554(comp(87, 5), comp(87, 7), comp(87, 6), `Searching for: ${varclient_5877}`, 21218 as struct);
    } else if ((strcmp(varclient_4153, "") == 0)) {
        script9554(comp(87, 5), comp(87, 7), comp(87, 6), "Library", 21218 as struct);
    } else {
        script9554(comp(87, 5), comp(87, 7), comp(87, 6), `Library of ${varclient_4153}`, 21218 as struct);
    };
    CC_DELETEALL(int0);
    var int3 = 0;
    define_array(288);
    var int4 = 0;
    var int5 = -1 as struct;
    while ((int3 < 288)) {
        int5 = enum_getvalue(0, 73, 845 as cs2enum, int3);
        CC_CREATE(int0, 3, int3);
        if (((script1694(int3) == 1) && (int5 != -1 as struct))) {
            if (((int2 == 0) || ((int2 == 1) && (STRING_INDEXOF_STRING(LOWERCASE(struct_getparam(int5, 924)), LOWERCASE(varclient_5877), 0) != -1)))) {
                pop_array(int4, int3);
                int4 = (int4 + 1);
            } else {
                CC_SETHIDE(true);
            };
        } else {
            CC_SETHIDE(true);
        };
        int3 = (int3 + 1);
    };
    if ((int4 == 0)) {
        if ((CC_FIND(int0, 0) == 1)) {
            script1692(int0, 0, -1, 0);
        };
        return;
    };
    script1693(0, 0, (int4 - 1));
    var int6 = 0;
    var int7 = -1;
    int3 = 0;
    while ((int3 < int4)) {
        if ((CC_FIND(int0, push_array(int3)) == 1)) {
            [int6, int7] = script1692(int0, int6, push_array(int3), int3);
        };
        int3 = (int3 + 1);
    };
    if ((int6 <= IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, 0, int0);
        CC_DELETEALL(int1);
        IF_SETHIDE(true, int1);
    } else {
        if (((int7 != -1) && (CC_FIND(int0, int7) == 1))) {
            CC_DELETE();
        };
        IF_SETSCROLLSIZE(0, int6, int0);
        IF_SETHIDE(false, int1);
        script31(int1, int0, 798 as graphic, 795 as graphic, 796 as graphic, 797 as graphic, 793 as graphic, 794 as graphic);
    };
    return;
}