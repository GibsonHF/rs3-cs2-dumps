//
function script12387(int0: int): void {
    var int1 = 1;
    var int2 = 0;
    var string0 = "Faction reputation rewards";
    var int3 = enum_getvalue(0, 26, 10994 as cs2enum, int0);
    if ((int3 == -1 as cs2enum)) {
        return;
    };
    switch (int0) {
        case 1: {
            int2 = varbitplayer_30864;
            string0 = "Seren reputation";
            stack(27225);
            stack(114491398);
            IF_SETGRAPHIC();
            stack(27225);
            stack(114491399);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            int2 = varbitplayer_30865;
            string0 = "Sliske reputation";
            stack(27226);
            stack(114491398);
            IF_SETGRAPHIC();
            stack(27226);
            stack(114491399);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            int2 = varbitplayer_30871;
            string0 = "Zamorak reputation";
            stack(27227);
            stack(114491398);
            IF_SETGRAPHIC();
            stack(27227);
            stack(114491399);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            int2 = varbitplayer_30870;
            string0 = "Zaros reputation";
            stack(27228);
            stack(114491398);
            IF_SETGRAPHIC();
            stack(27228);
            stack(114491399);
            IF_SETGRAPHIC();
            break;
        }
    };
    varclient_5185 = int0;
    IF_SETHIDE(true, comp(1747, 4));
    script9554(comp(1747, 27), comp(1747, 29), comp(1747, 28), `${string0} rewards`, 21218 as struct);
    script12392(int0);
    var int4 = 1;
    var int5 = 0;
    if (((((varbitplayer_30864 + varbitplayer_30865) + varbitplayer_30871) + varbitplayer_30870) >= (5000 * 4))) {
        int4 = 0;
    } else if ((int2 >= 5000)) {
        int4 = 14;
        int5 = 11;
    } else if ((int2 >= 4500)) {
        int4 = 13;
        int5 = 10;
    } else if ((int2 >= 4000)) {
        int4 = 12;
        int5 = 9;
    } else if ((int2 >= 3500)) {
        int4 = 11;
        int5 = 8;
    } else if ((int2 >= 3000)) {
        int4 = 10;
        int5 = 7;
    } else if ((int2 >= 2500)) {
        int4 = 9;
        int5 = 6;
    } else if ((int2 >= 2000)) {
        int4 = 8;
        int5 = 5;
    } else if ((int2 >= 1500)) {
        int4 = 7;
        int5 = 5;
    } else if ((int2 >= 1000)) {
        int4 = 7;
        int5 = 4;
    } else if ((int2 >= 750)) {
        int4 = 5;
        int5 = 3;
    } else if ((int2 >= 500)) {
        int4 = 5;
        int5 = 3;
    } else if ((int2 >= 250)) {
        int4 = 3;
        int5 = 2;
    } else if ((int2 >= 100)) {
        int4 = 2;
        int5 = 1;
    };
    var int6 = (int2 - enum_getvalue(0, 0, 10999 as cs2enum, (int4 - 1)));
    var string1 = "Unknown";
    var int7 = (enum_getvalue(0, 0, 10999 as cs2enum, int4) - enum_getvalue(0, 0, 10999 as cs2enum, (int4 - 1)));
    script12388(int2, int4);
    if ((int4 == 14)) {
        int6 = (((varbitplayer_30864 + varbitplayer_30865) + varbitplayer_30871) + varbitplayer_30870);
        int7 = 20000;
    };
    if ((int4 == 0)) {
        string1 = "All rewards unlocked!";
        IF_SETSIZE(444, 9, 0, 0, comp(1747, 12));
    } else {
        IF_SETSIZE((4 + (44 * (int5 - 1))), 9, 0, 0, comp(1747, 12));
        string1 = enum_getvalue(0, 36, 10993 as cs2enum, int4);
        if ((int4 == 14)) {
            string1 = `Next unlock: ${string1}<br>Total Reputation: ${TOSTRING_LOCALISED(int6, 1)}/${TOSTRING_LOCALISED(int7, 1)}`;
        } else {
            string1 = `Next unlock: ${string1}<br>Progress: ${TOSTRING_LOCALISED(int6, 1)}/${TOSTRING_LOCALISED(int7, 1)}`;
        };
    };
    IF_SETTEXT(string1, comp(1747, 32));
    IF_SETTEXT(`${string0}: ${TOSTRING_LOCALISED(MIN(5000, int2), 1)}/${TOSTRING_LOCALISED(5000, 1)}`, comp(1747, 39));
    return;
}