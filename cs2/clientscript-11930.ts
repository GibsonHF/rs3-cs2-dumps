//
function script11930(int0: int): void {
    var int1 = ENUM_GETOUTPUTCOUNT(10579 as cs2enum);
    var string0 = "";
    var string1 = "";
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = 1;
    var int7 = 1;
    var int8 = 30;
    while ((++int5 < int1)) {
        if ((enum_getvalue(0, 22, 10579 as cs2enum, int5) != -1 as coordgrid)) {
            string0 = enum_getvalue(0, 36, 10582 as cs2enum, int5);
            string1 = `Requires level ${inttostring(enum_getvalue(0, 0, 16061 as cs2enum, int5), 10)} Archaeology.`;
            [int3, int4] = script12959(int5);
            if (((int3 != -1) && (int4 != -1))) {
                if ((script11107(int5) == 0)) {
                    int7 = 0;
                } else {
                    int7 = 1;
                };
                if ((int7 == 0)) {
                    int6 = 5;
                } else {
                    int8 = PARAWIDTH(enum_getvalue(0, 36, 13251 as cs2enum, int5), 94, 26 as fontmetrics);
                    IF_SETHIDE(false, enum_getvalue(0, 9, 10580 as cs2enum, int5));
                    IF_SETPOSITION((int3 + 25), (int4 + 19), 0, 0, enum_getvalue(0, 9, 10580 as cs2enum, int5));
                    IF_SETTEXT(enum_getvalue(0, 36, 13251 as cs2enum, int5), enum_getvalue(0, 9, 10581 as cs2enum, int5));
                    IF_SETSIZE((int8 + 14), 17, 0, 0, enum_getvalue(0, 9, 10580 as cs2enum, int5));
                    int6 = 1;
                };
                if ((MAP_MEMBERS() == 0)) {
                    int2 = 11973 as struct;
                    if ((PLAYERMEMBER() == false)) {
                        string1 = "Members' only location.<br>Select to subscribe.";
                    } else {
                        string1 = "This location is unavailable on free worlds.";
                    };
                } else {
                    int2 = dbrow_getfield(3703 as dbrow, 352400, 0);
                    string1 = `${string1}<br>Keyboard Shortcut : ${script13398(int5)}`;
                };
                script11624(comp(71, 8), comp(71, 9), int2, int3, int4, int5, int6);
                if (((CC_FIND(comp(71, 9), int5) == 1) && (int7 == 1))) {
                    CC_SETOPBASE(string0);
                    CC_SETOP(1, "Info");
                    CC_SETOP(2, "Fast travel");
                    CC_SETOPCURSOR(1, 172);
                    CC_SETONOP(callback(script11931, int5, -2147483644));
                    CC_SETONMOUSEREPEAT(callback(script14732, string0, string1, -2147483645, -2147483643));
                };
                if ((int5 == int0)) {
                    IF_SETPOSITION((int3 - 90), (int4 + 8), 0, 0, comp(71, 10));
                };
            } else {
                CC_CREATE(comp(71, 9), 4, int5);
            };
        };
    };
    script8841(93, 1);
    SOUND_VORBIS_VOLUME(9705 as vorbis, 1, 0, 140);
    return;
}