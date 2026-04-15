//
function script17747(int0: dbrow, int1: dbrow): void {
    var int2 = -1 as struct;
    var int3 = script17489(int1, 0, 1);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((int1 != -1 as dbrow)) {
        int2 = dbrow_getfield(int1, 954496, 0);
        int5 = dbrow_getfield(int1, 954432, 0);
        IF_SETHIDE(true, comp(1222, 33));
        IF_SETHIDE(true, comp(1222, 32));
        switch (dbrow_getfield(int1, 954400, 0)) {
            case 1: {
                [string0, string2, string1, int4, int6] = script967(int2, 0, 0, 2);
                int7 = script7473(int2, int4, int6, 2);
                IF_SETTEXT(script17698(int2, 0), comp(1222, 40));
                if ((STRING_LENGTH(IF_GETTEXT(comp(1222, 40))) > 0)) {
                    IF_SETHIDE(false, comp(1222, 33));
                };
                IF_SETTEXT(script17706(int2, 0), comp(1222, 42));
                stack(script17705(struct_getparam(int2, 8170)));
                stack(80085024);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 80085024);
                break;
            }
            default: {
                int3 = script17489(int1, 0, 1);
                string0 = script17486(int1);
                string2 = script17487(int1);
                IF_SETTEXT("", comp(1222, 40));
                IF_SETTEXT("", comp(1222, 42));
                break;
            }
        };
        IF_SETTEXTALIGN(0, 0, 14, comp(1222, 49));
    } else {
        string2 = "Select a talent to see more information.";
        IF_SETTEXTALIGN(1, 1, 14, comp(1222, 49));
    };
    stack(int3);
    stack(80085044);
    IF_SETGRAPHIC();
    IF_SETTEXT(`<col=ffffff>${string0}</col>`, 80085031);
    IF_SETTEXT(string1, 80085033);
    IF_SETTEXT(string2, 80085041);
    if ((int7 > 0)) {
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1222, 47)), 1, 1, comp(1222, 45));
        IF_SETSIZE(16, IF_GETHEIGHT(comp(1222, 47)), 0, 1, comp(1222, 46));
        IF_SETHIDE(false, comp(1222, 47));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1222, 45));
        IF_SETSIZE(16, 0, 0, 1, comp(1222, 46));
        IF_SETHIDE(true, comp(1222, 47));
    };
    if ((script7593(string2, IF_GETWIDTH(comp(1222, 49)), IF_GETFONTMETRICS(comp(1222, 49)), 14) > IF_GETHEIGHT(comp(1222, 45)))) {
        IF_SETSIZE((16 + 3), 0, 1, 1, comp(1222, 49));
        IF_SETSCROLLSIZE(0, (2 + script7593(string2, IF_GETWIDTH(comp(1222, 49)), IF_GETFONTMETRICS(comp(1222, 49)), 14)), comp(1222, 45));
        IF_SETHIDE(false, comp(1222, 46));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(1222, 49));
        IF_SETSCROLLSIZE(0, 0, comp(1222, 45));
        IF_SETHIDE(true, comp(1222, 46));
    };
    IF_SETSCROLLPOS(0, 0, comp(1222, 45));
    script7791(comp(1222, 46), comp(1222, 45));
    IF_SETONOP(callback(), comp(1222, 54));
    IF_SETTEXT(`<col=ffffff>Cost: ${TOSTRING_LOCALISED(int5, 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}`, 80085028);
    IF_SETHIDE(0, 80085029);
    IF_SETTEXTALIGN(1, 0, 14, 80085028);
    var int8 = script17485(int0, int1);
    switch (int8) {
        case 0: {
            IF_SETTEXT("<col=FF0000>You do not meet the requirements to unlock this talent</col>", comp(1222, 36));
            script13969(comp(1222, 53), comp(1222, 54), 28554 as struct, "More Info");
            IF_SETONOP(callback(script17748, int0, int1), comp(1222, 54));
            break;
        }
        case 1: {
            if ((script17480(varplayer_11091) < int5)) {
                IF_SETTEXT(`<col=ff0000>Cost: ${TOSTRING_LOCALISED(int5, 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}`, comp(1222, 36));
                script13971(comp(1222, 53), comp(1222, 54), 28554 as struct, "Unlock Talent", true);
            } else {
                script13969(comp(1222, 53), comp(1222, 54), 28553 as struct, "Unlock Talent");
                IF_SETONOP(callback(script17748, int0, int1), comp(1222, 54));
            };
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1222, 37));
            IF_SETTEXTALIGN(1, 1, 14, comp(1222, 36));
            IF_SETTEXT("<col=00FF00>You have unlocked this talent</col>", comp(1222, 36));
            break;
        }
        case -1: {
            IF_SETTEXT("", comp(1222, 36));
            break;
        }
    };
    return;
}