//
function script13675(int0: component): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script13641(varbitplayer_37615);
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int3 = stack();
    stack(int3);
    stack(90288);
    stack(0);
    dbrow_getfield();
    var int4 = stack();
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (varbitplayer_37593) {
        case 1: {
            int9 = 175000;
            break;
        }
        case 2: {
            int9 = 350000;
            break;
        }
        case 3: {
            int9 = 500000;
            break;
        }
    };
    if ((DB_GETFIELDCOUNT(int3, 90416) > 0)) {
        [int5, int7] = dbrow_getfield(int3, 90416, 0);
        if ((DB_GETFIELDCOUNT(int3, 90416) > 1)) {
            [int6, int8] = dbrow_getfield(int3, 90416, 1);
        };
    };
    if ((int0 == comp(1902, 10))) {
        string0 = `${TOSTRING_LOCALISED(int1, 1)}/${TOSTRING_LOCALISED((int4 * int7), 1)} ${OC_NAME(int5)}<br>The indicator shows how many secondaries you need to fully process your input.`;
    } else if ((int0 == comp(1902, 11))) {
        string0 = `${TOSTRING_LOCALISED(int2, 1)}/${TOSTRING_LOCALISED((int4 * int8), 1)} ${OC_NAME(int6)}<br>The indicator shows how many secondaries you need to fully process your input.`;
    } else if ((int0 == comp(1902, 12))) {
        if ((int9 == 0)) {
            string0 = "You don't have a generator built. You must build a generator and add divine charge to it before this machine will function.";
        } else {
            string0 = `The amount of charge in your generator.<br>${TOSTRING_LOCALISED(varbitplayer_37590, 1)}/${TOSTRING_LOCALISED(int9, 1)}`;
        };
    };
    script13651(string0, int0, -1, 1, 0, (enum_getvalue(25, 0, 8549 as cs2enum, 27 as fontmetrics) + 2));
    return;
}