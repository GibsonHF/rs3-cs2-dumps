//
function script19948(int0: int): void {
    var string0 = "";
    var string1 = "";
    var string2 = "null";
    var int1 = 0;
    var int2 = dbrow_getfield(17867 as dbrow, 1302544, 0);
    var int3 = dbrow_getfield(17866 as dbrow, 1302544, 0);
    var int4 = dbrow_getfield(15221 as dbrow, 1302544, 0);
    var int5 = dbrow_getfield(15221 as dbrow, 1302560, 0);
    stack(1306624);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int6 = stack();
    var int7 = script19930(int6);
    var int8 = script19931(int6);
    stack(0);
    stack(9);
    stack(8220);
    stack(int8);
    enum_getvalue();
    var int9 = stack();
    switch (varbitplayer_57881) {
        case 0: {
            if ((int7 != 0)) {
                int9 = comp(1336, 28);
                string2 = "Speak to Nougat Bunny in the Blooming Burrow to unlock this clue.";
            } else {
                string0 = `Gielinor Egg Hunt - Week 1<br>Clue ${inttostring((int8 + 1), 10)}`;
            };
            break;
        }
        case 1: {
            if ((script12477() < int3)) {
                int9 = comp(1336, 28);
                string2 = `The week 2 Gielinor Egg Hunt will be available from ${script19936(int3, 0)}.`;
            } else if ((int7 != 0)) {
                int9 = comp(1336, 28);
                string2 = "Speak to Nougat Bunny in the Blooming Burrow to unlock this clue.";
            } else {
                string0 = `Gielinor Egg Hunt - Week 2<br>Clue ${inttostring((int8 + 1), 10)}`;
            };
            break;
        }
        case 2: {
            if ((script12477() < int2)) {
                int9 = comp(1336, 28);
                string2 = `The week 3 Gielinor Egg Hunt will be available from ${script19936(int2, 0)}.`;
            } else if ((int7 != 0)) {
                int9 = comp(1336, 28);
                string2 = "Speak to Nougat Bunny in the Blooming Burrow to unlock this clue.";
            } else {
                string0 = `Gielinor Egg Hunt - Week 3<br>Clue ${inttostring((int8 + 1), 10)}`;
            };
            break;
        }
        case 3: {
            if (((script12477() < int4) || ((script12477() == int4) && (MODULO(varplayer_11489, 1440) < int5)))) {
                int9 = comp(1336, 28);
                string2 = `The week 1 Community Egg Hunt will be available from ${script19936(int4, int5)}.`;
            } else if ((int7 == 3)) {
                int9 = comp(1336, 28);
                string2 = "Speak to Nougat Bunny in the Blooming Burrow to unlock this clue.";
            } else if ((int7 == 4)) {
                int9 = comp(1336, 28);
                string2 = "Solve the previous community clue to unlock this clue.";
            } else {
                string0 = `Community Egg Hunt - Week 1<br>Clue ${inttostring((int8 + 1), 10)}`;
            };
            break;
        }
        case 4: {
            int4 = dbrow_getfield(15222 as dbrow, 1302544, 0);
            int5 = dbrow_getfield(15222 as dbrow, 1302560, 0);
            if (((script12477() < int4) || ((script12477() == int4) && (MODULO(varplayer_11489, 1440) < int5)))) {
                int9 = comp(1336, 28);
                string2 = `The week 2 Community Egg Hunt will be available from ${script19936(int4, int5)}.`;
            } else if ((int7 == 3)) {
                int9 = comp(1336, 28);
                string2 = "Speak to Nougat Bunny in the Blooming Burrow to unlock this clue.";
            } else if ((int7 == 4)) {
                int9 = comp(1336, 28);
                string2 = "Solve the previous community clue to unlock this clue.";
            } else {
                string0 = `Community Egg Hunt - Week 2<br>Clue ${inttostring((int8 + 1), 10)}`;
            };
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1336, 28)), 138, 0, 0, comp(1336, 28));
    } else {
        IF_SETSIZE(IF_GETWIDTH(comp(1336, 28)), ((138 + IF_GETHEIGHT(comp(1336, 77))) + 4), 0, 0, comp(1336, 28));
    };
    IF_SETTEXT(string0, comp(1336, 77));
    script19949();
    int1 = (PARAHEIGHT(IF_GETTEXT(int9), 276, 207 as fontmetrics) * 16);
    if ((int1 > 138)) {
        IF_SETHIDE(false, comp(1336, 17));
        IF_SETSIZE(16, 138, 0, 0, comp(1336, 17));
        IF_SETSCROLLPOS(0, 0, comp(1336, 18));
        IF_SETSCROLLSIZE(0, int1, comp(1336, 18));
        script7791(comp(1336, 17), comp(1336, 18));
    } else {
        IF_SETHIDE(true, comp(1336, 17));
        IF_SETSCROLLSIZE(0, 0, comp(1336, 18));
    };
    if ((int9 != comp(1336, 28))) {
        IF_SETHIDE(false, int9);
    } else {
        IF_SETHIDE(false, comp(1336, 28));
        IF_SETTEXT(string2, comp(1336, 28));
    };
    return;
}