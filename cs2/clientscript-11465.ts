//
function script11465(int0: component, int1: int, int2: obj, int3: int, int4: int, int5: unknown_int): void {
    if (((varclient_4827 != comp(-1, 65535)) && (varclient_4828 != -1))) {
        return;
    };
    if ((int2 == -1 as obj)) {
        return;
    };
    var long0 = script11472(int3);
    var int6 = 676 as inv;
    if ((varbitplayer_52406 == 2)) {
        int6 = 930 as inv;
    };
    script12094(int2, int6, int3);
    switch (script17138(long0)) {
        case -4: {
            script11600(int0, int1, int2, "<col=00FF00>Always free to protect, unless in a dangerous situation!");
            return;
        }
        case -6: {
            script11600(int0, int1, int2, "<col=00FF00>Always free to protect!");
            return;
        }
        case -3: {
            script11600(int0, int1, int2, "<col=FF0000>This is a members-only item. As you died on a members' world you must be on a members' world to save this item.");
            return;
        }
        case -5: {
            if ((varbitplayer_28118 == 2)) {
                script11600(int0, int1, int2, "<col=00FF00>This is a members-only item. If you died on a free world, it would be free to reclaim.");
                return;
            };
            script11600(int0, int1, int2, "<col=00FF00>This is a members-only item. As you died on a free world, it is free to reclaim.");
            return;
        }
        case -2: {
            script11600(int0, int1, int2, "<col=FF0000>This item is always lost on death.");
            return;
        }
        case -7: {
            return;
        }
    };
    if (((int3 >= 47) && (varbitplayer_52406 != 2))) {
        if (((int4 != -1) && (int3 == 47))) {
            script11600(int0, int1, int2, "<col=FF0000>In dangerous PvP, individual items are protected, so you will lose some of this item stack.");
            long0 = script11472(int4);
            script12094(int2, int6, int4);
        } else {
            script11600(int0, int1, int2, "<col=FF0000>Your beast of burden is carrying this item. It will be lost on death.");
            return;
        };
    };
    var int7 = INV_GETNUM(int6, int3);
    if ((CC_FIND(int0, int1) == 1)) {
        int7 = CC_GETINVCOUNT();
    };
    var long1 = script11466(int2, long0, int7, 1);
    var long2 = 0n;
    var int8 = 0;
    var long3 = 0n;
    var string0 = `<col=00FF00>Item value: ${TOSTRING_LOCALISED_LONG(long0, 1)}`;
    if (branch_gt_long[150](long1, long0)) {
        string0 = strconcat(string0, `<col=00FF00> (${TOSTRING_LOCALISED_LONG(long1, 1)})`);
    };
    if ((varbitplayer_52406 == 2)) {
        [long2, int8, long3] = script11467(int2, long0, int7, 7);
        string0 = strconcat(string0, `<br><col=00FF00>Overflow reclaim cost: ${TOSTRING_LOCALISED_LONG(long2, 1)}`);
    } else if ((int5 == 0)) {
        [long2, int8, long3] = script11467(int2, long0, int7, 2);
        string0 = strconcat(string0, `<br><col=00FF00>Cost to save: ${TOSTRING_LOCALISED_LONG(long2, 1)}`);
        if ((int3 < varbitplayer_28114)) {
            string0 = strconcat(string0, " (Protected for free)");
        } else if ((int8 == 1)) {
            string0 = strconcat(string0, `<br><col=00FF00>Death's Deal saves: ${TOSTRING_LOCALISED_LONG(long3, 1)}`);
        };
    };
    script11600(int0, int1, int2, string0);
    return;
}