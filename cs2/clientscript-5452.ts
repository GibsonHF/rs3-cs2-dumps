//
function script5452(int0: dbrow, int1: unknown_int, int2: unknown_int): void {
    if ((int2 > 1)) {
        if ((strcmp(IF_GETTEXT(comp(90, 172)), dbrow_getfield(int0, 155648, 0)) == 0)) {
            IF_SETHIDE(true, comp(90, 164));
        };
        return;
    };
    IF_SETHIDE(false, comp(90, 164));
    IF_SETOBJECT_NONUM(dbrow_getfield(int0, 155936, 0), 0, comp(90, 169));
    IF_SETMODELZOOM(dbrow_getfield(int0, 155952, 0), comp(90, 169));
    IF_SETTEXT(dbrow_getfield(int0, 155648, 0), comp(90, 172));
    var int3 = 0;
    var int4 = -1 as dbrow;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as inv;
    var int10 = 0;
    [int9, int10] = script2645(dbrow_getfield(int0, 155680, 0));
    var int11 = script2646(int9);
    if ((int9 != -1 as inv)) {
        if ((int1 == 1)) {
            string0 = `Current: <col=CC0000>${dbrow_getfield(int11, 159872, 0)}.</col><br><br>`;
        } else {
            string0 = `Current: <col=00CC00>${dbrow_getfield(int11, 159872, 0)}.</col><br><br>`;
        };
    } else {
        string0 = "Current: <col=00CC00>none.</col><br><br>";
    };
    var int12 = DB_GETFIELDCOUNT(int0, 155920);
    if ((int12 == 0)) {
        if ((script2643(int0) == 1)) {
            string0 = `${string0}Any pen.<br>`;
        } else {
            while ((int3 < int12)) {
                int4 = dbrow_getfield(int0, 155920, int3);
                if ((dbrow_getfield(int4, 159824, 0) == true)) {
                    int5 = 1;
                } else {
                    switch (dbrow_getfield(int4, 159776, 0)) {
                        case 1: {
                            int6 = 1;
                            break;
                        }
                        case 2: {
                            int7 = 1;
                            break;
                        }
                        case 3: {
                            int8 = 1;
                            break;
                        }
                    };
                };
                int3 = (int3 + 1);
            };
        };
    } else {
    };
    if ((int5 == 1)) {
        string0 = `${string0}Breeding pens.<br>`;
    };
    if ((int6 == 1)) {
        string0 = `${string0}Small pens.<br>`;
    };
    if ((int7 == 1)) {
        string0 = `${string0}Medium pens.<br>`;
    };
    if ((int8 == 1)) {
        string0 = `${string0}Large pens.<br>`;
    };
    var int13 = dbrow_getfield(int0, 155856, 0);
    if ((int13 > 0)) {
        string0 = `${string0}${inttostring(int13, 10)} beans per use.<br>`;
    };
    int13 = dbrow_getfield(int0, 155872, 0);
    if ((int13 > 0)) {
        string0 = `${string0}${inttostring(int13, 10)} beans per day.<br>`;
    };
    int13 = dbrow_getfield(int0, 155888, 0);
    if ((int13 > 0)) {
        string0 = `${string0}${inttostring(int13, 10)} beans per week.<br>`;
    };
    int13 = dbrow_getfield(int0, 155904, 0);
    if ((int13 > 0)) {
        string0 = `${string0}${inttostring(int13, 10)} beans per month.<br>`;
    };
    if ((dbrow_getfield(int0, 155696, 0) == true)) {
        string0 = `${string0}Babysitter.<br>`;
    };
    if ((dbrow_getfield(int0, 155824, 0) == true)) {
        string0 = `${string0}Collector.<br>`;
    };
    if ((dbrow_getfield(int0, 155840, 0) == true)) {
        string0 = `${string0}Trapper.`;
    };
    if ((dbrow_getfield(int0, 155712, 0) == 1)) {
        string0 = `${string0}Boosts happiness.<br>`;
    };
    if ((dbrow_getfield(int0, 155728, 0) == 1)) {
        string0 = `${string0}Boosts health.<br>`;
    };
    if ((dbrow_getfield(int0, 155744, 0) == 1)) {
        string0 = `${string0}Boosts breeding chance.<br>`;
    };
    if ((dbrow_getfield(int0, 155776, 0) == 1)) {
        string0 = `${string0}Boosts xp.<br>`;
    };
    if ((dbrow_getfield(int0, 155792, 0) == 1)) {
        string0 = `${string0}Boosts xp chance.<br>`;
    };
    if ((dbrow_getfield(int0, 155808, 0) == 1)) {
        string0 = `${string0}Boosts materials.<br>`;
    };
    IF_SETTEXT(string0, comp(90, 171));
    IF_SETTEXT(dbrow_getfield(int0, 155664, 0), comp(90, 168));
    if ((int1 == 1)) {
        IF_SETHIDE(false, comp(90, 175));
        IF_SETHIDE(true, comp(90, 174));
    } else {
        IF_SETHIDE(true, comp(90, 175));
        IF_SETHIDE(false, comp(90, 174));
    };
    return;
}