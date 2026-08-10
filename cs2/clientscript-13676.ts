//
function script13676(int0: number): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    stack(int1);
    script21123();
    var int2 = [];
    var int3 = dbrow_getfield(int1, 90272, 0);
    var string0 = `The amount of time until your machine has processed all of your items.<br>This machine processes ${TOSTRING_LOCALISED(int2, 1)} items per hour.`;
    if ((int3 == 2)) {
        string0 = `${string0}<br>It also processes some items in batches, for example arrows.`;
    };
    var int4 = -1;
    var int5 = 0;
    var int6 = -1;
    var int7 = 0;
    var int8 = DB_GETFIELDCOUNT(int1, 90416);
    var int9 = dbrow_getfield(int1, 90464, 0);
    var int10 = 0;
    var int11 = 0;
    [int10, int11] = script13641(varbitplayer_37615);
    var int12 = 100;
    var int13 = 100;
    var int14 = 100;
    var int15 = 0;
    var int16 = 0;
    if ((int3 == 2)) {
        if ((varbitplayer_48814 > 0)) {
            int16 = SCALE(varbitplayer_48814, int2, 100);
        } else {
            int16 = SCALE(varplayer_7270, int2, 100);
        };
    } else {
        int16 = SCALE(varplayer_7270, int2, 100);
    };
    if ((MODULO(int16, 100) > 0)) {
        int16 = (int16 + 100);
    };
    int16 = (int16 / 100);
    int16 = (int16 * dbrow_getfield(int1, 90464, 0));
    if ((int8 > 0)) {
        [int4, int5] = dbrow_getfield(int1, 90416, 0);
        if ((int8 > 1)) {
            [int6, int7] = dbrow_getfield(int1, 90416, 1);
        };
    };
    if ((varplayer_7270 > 0)) {
        if ((int4 != -1)) {
            int12 = ((100 * varbitplayer_37616) / (int5 * varplayer_7270));
        };
        if ((int6 != -1)) {
            int13 = ((100 * varbitplayer_37617) / (int7 * varplayer_7270));
        };
        if ((int16 == 0)) {
            if ((varbitplayer_37590 == 0)) {
                script20979();
                if (BRANCH_EQUALS(0)) {
                    int14 = 0;
                } else {
                    int14 = 100;
                };
            } else {
                int14 = 100;
            };
        } else {
            int14 = SCALE(varbitplayer_37590, int16, 100);
        };
        if ((int12 < 100)) {
            int15 = 1;
            string0 = `${string0}<br><col=ff0000>Your machine will process more items if you add more of the following:<br></col><col=ff0000>${OC_NAME(int4)}</col>`;
        };
        if ((int13 < 100)) {
            if ((int15 == 0)) {
                int15 = 1;
                string0 = `${string0}<br><col=ff0000>Your machine will run for longer if you add more of the following:</col>`;
            };
            string0 = `${string0}<br><col=ff0000>${OC_NAME(int6)}</col>`;
        };
        if ((int14 < 100)) {
            if ((int15 == 0)) {
                int15 = 1;
                string0 = `${string0}<br><col=ff0000>Your machine will run for longer if you add more of the following:</col>`;
            };
            string0 = `${string0}<br><col=ff0000>${OC_NAME(36390 as obj)}</col>`;
        };
    };
    script13651(string0, int0, -1, 1, 0, (enum_getvalue(25, 0, 8549, 27) + 2));
    return;
}