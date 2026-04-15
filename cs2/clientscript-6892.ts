//
function script6892(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    define_array[33](1);
    define_array[65536](1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    while ((int0 < 1)) {
        int1 = INV_GETOBJ(134 as inv, int0);
        if ((int1 != -1 as obj)) {
            [int1, int2] = [OC_UNCERT(int1), INV_GETNUM(134 as inv, int0)];
            [int4, int5] = [0, 0];
            while (((int4 < int3) && (int5 == 0))) {
                if ((push_array(int4) == int1)) {
                    pop_array[1](int4, (push_array[1](int4) + 1));
                    int5 = 1;
                };
                int4 = (int4 + 1);
            };
            if ((int5 == 0)) {
                pop_array(int3, int1);
                pop_array[1](int3, int2);
                int3 = (int3 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    var string0 = "";
    var int6 = 1;
    if ((int3 > 0)) {
        [int4, int6] = [0, 0];
        while ((int4 < int3)) {
            string0 = script6893(push_array[1](int4), push_array(int4), string0);
            pop_array(int4, -1);
            pop_array[1](int4, 0);
            int4 = (int4 + 1);
        };
        IF_SETHIDE(false, comp(1366, 7));
    } else {
        IF_SETHIDE(true, comp(1366, 7));
        string0 = "Absolutely nothing";
    };
    script6894(string0, comp(1366, 6), comp(1366, 7), comp(1366, 5));
    [int0, int3] = [0, 0];
    while ((int0 < 1)) {
        int1 = INVOTHER_GETOBJ(134 as inv, int0);
        if ((int1 != -1 as obj)) {
            [int1, int2] = [OC_UNCERT(int1), INVOTHER_GETNUM(134 as inv, int0)];
            [int4, int5] = [0, 0];
            while (((int4 < int3) && (int5 == 0))) {
                if ((push_array(int4) == int1)) {
                    pop_array[1](int4, (push_array[1](int4) + 1));
                    int5 = 1;
                };
                int4 = (int4 + 1);
            };
            if ((int5 == 0)) {
                pop_array(int3, int1);
                pop_array[1](int3, int2);
                int3 = (int3 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    string0 = "";
    var int7 = 1;
    if ((int3 > 0)) {
        [int4, int7] = [0, 0];
        while ((int4 < int3)) {
            string0 = script6893(push_array[1](int4), push_array(int4), string0);
            pop_array(int4, -1);
            pop_array[1](int4, 0);
            int4 = (int4 + 1);
        };
        IF_SETHIDE(false, comp(1366, 12));
    } else {
        string0 = "<col=ff0000>Absolutely nothing</col>";
        IF_SETHIDE(true, comp(1366, 12));
    };
    script6894(string0, comp(1366, 11), comp(1366, 12), comp(1366, 10));
    var string1 = "";
    var string2 = "";
    if ((int6 == 0)) {
        if ((varclient_546 >= POW(10, 7))) {
            string1 = `${TOSTRING_LOCALISED((varclient_546 / POW(10, 6)), 1)}M gp`;
        } else if ((varclient_546 >= POW(10, 4))) {
            string1 = `${TOSTRING_LOCALISED((varclient_546 / POW(10, 3)), 1)}K gp`;
        } else if ((varclient_546 >= 0)) {
            string1 = `${TOSTRING_LOCALISED(varclient_546, 1)} gp`;
        } else {
            string1 = "Unknown value";
        };
    };
    if ((int7 == 0)) {
        if ((varclient_1333 >= POW(10, 7))) {
            string2 = `${TOSTRING_LOCALISED((varclient_1333 / POW(10, 6)), 1)}M gp`;
        } else if ((varclient_1333 >= POW(10, 4))) {
            string2 = `${TOSTRING_LOCALISED((varclient_1333 / POW(10, 3)), 1)}K gp`;
        } else if ((varclient_1333 >= 0)) {
            string2 = `${TOSTRING_LOCALISED(varclient_1333, 1)} gp`;
        } else {
            string2 = "Unknown value";
        };
    };
    if (((varclient_546 < 0) || (varclient_1333 < 0))) {
        [string1, string2] = [`Your stake: <col=ff0000>${string1}</col>`, `Opponent's stake: <col=ff0000>${string2}</col>`];
    } else if ((varclient_546 > varclient_1333)) {
        [string1, string2] = [`Your stake: ${string1}`, `Opponent's stake: <col=ff0000>${string2}</col>`];
    } else if ((varclient_546 < varclient_1333)) {
        [string1, string2] = [`Your stake: <col=ff0000>${string1}</col>`, `Opponent's stake: ${string2}`];
    } else {
        [string1, string2] = [`Your stake: ${string1}`, `Opponent's stake: ${string2}`];
    };
    IF_SETTEXT(string1, comp(1366, 5));
    IF_SETTEXT(string2, comp(1366, 10));
    return;
}