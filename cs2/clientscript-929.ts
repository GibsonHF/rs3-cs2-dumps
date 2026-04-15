//
function script929(int0: obj, int1: unknown_int, int2: unknown_int): unknown_int {
    var int3 = enum_getvalue(33, 74, 15588 as cs2enum, int0);
    if ((int3 != -1 as dbrow)) {
        var int0 = dbrow_getfield(int3, 258048, 0);
    };
    var string0 = "";
    var int4 = 0;
    var int5 = item_getparam(int0, 749);
    var int6 = item_getparam(int0, 750);
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 770);
        int6 = item_getparam(int0, 771);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 772);
        int6 = item_getparam(int0, 773);
    } else {
        int5 = item_getparam(int0, 751);
        int6 = item_getparam(int0, 752);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 774);
        int6 = item_getparam(int0, 775);
    } else {
        int5 = item_getparam(int0, 753);
        int6 = item_getparam(int0, 754);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 776);
        int6 = item_getparam(int0, 777);
    } else {
        int5 = item_getparam(int0, 755);
        int6 = item_getparam(int0, 756);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 778);
        int6 = item_getparam(int0, 779);
    } else {
        int5 = item_getparam(int0, 757);
        int6 = item_getparam(int0, 758);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int2 == 1)) {
        int5 = item_getparam(int0, 780);
        int6 = item_getparam(int0, 781);
    } else {
        int5 = item_getparam(int0, 759);
        int6 = item_getparam(int0, 760);
    };
    if (((int5 != -1 as stat) && (STAT_BASE(int5) < int6))) {
        if ((int2 == 1)) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to add this item to your toolbelt.`;
        } else if (((OC_WEARPOS(int0) == 5) || (((OC_WEARPOS(int0) == 3) && (OC_CATEGORY(int0) != 18 as category)) && (item_getparam(int0, 2832) != 1)))) {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wield this item.`;
        } else {
            string0 = `You need level ${inttostring(int6, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int5)} to wear this item.`;
        };
        int4 = 1;
    };
    if ((int4 == 1)) {
        if (((int1 == 1) && (strcmp(string0, "") != 0))) {
            script3686(string0);
        };
        return 0;
    };
    return 1;
}