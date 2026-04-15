//
function script14794(int0: dbrow): void {
    var int1 = ENUM_GETOUTPUTCOUNT(14057 as cs2enum);
    var int2 = -1 as dbrow;
    var string0 = "";
    var string1 = "";
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    while ((++int6 < int1)) {
        int2 = enum_getvalue(0, 74, 14057 as cs2enum, int6);
        if ((int2 != -1 as dbrow)) {
            string0 = dbrow_getfield(int2, 352288, 0);
            string1 = `Requires level ${inttostring(dbrow_getfield(int2, 352352, 0), 10)} Archaeology.`;
            [int4, int5] = script14800(int2);
            if (((int4 != -1) && (int5 != -1))) {
                if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int2, 352320, 0) == true))) {
                    int3 = 11973 as struct;
                    if ((PLAYERMEMBER() == false)) {
                        string1 = "Members' only dig site.<br>Select to subscribe.";
                    } else {
                        string1 = "This dig site is unavailable on free worlds.";
                    };
                } else {
                    int3 = dbrow_getfield(int2, 352400, 0);
                    string1 = `${string1}<br>Keyboard Shortcut : ${script14802(int2)}`;
                };
                script11624(comp(667, 10), comp(667, 11), int3, int4, int5, int6, 1);
                if ((CC_FIND(comp(667, 11), int6) == 1)) {
                    CC_SETOPBASE(dbrow_getfield(int2, 352288, 0));
                    CC_SETOP(1, "Info");
                    CC_SETOP(2, "Fast travel");
                    CC_SETOPCURSOR(1, 172);
                    CC_SETONOP(callback(script14795, int2, -2147483644));
                    CC_SETONMOUSEREPEAT(callback(script14732, string0, string1, -2147483645, -2147483643));
                };
                if ((int2 == int0)) {
                    IF_SETPOSITION((int4 - 90), (int5 + 10), 0, 0, comp(667, 12));
                };
            } else {
                CC_CREATE(comp(667, 11), 4, int6);
            };
        };
    };
    string0 = "Archaeology Guild";
    string1 = "";
    if ((IF_FIND(comp(667, 9)) == 1)) {
        script14741(string0, string1);
        if ((int2 == -1 as dbrow)) {
            IF_SETPOSITION((CC_GETX() - 90), (CC_GETY() + 4), 0, 0, comp(667, 12));
        };
    };
    script8841(91, 1);
    SOUND_VORBIS_VOLUME(9705 as vorbis, 1, 0, 140);
    return;
}