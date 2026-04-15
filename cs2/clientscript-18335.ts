//
function script18335(int0: struct, int1: int): void {
    if ((varplayer_10850 == -1 as struct)) {
        return;
    };
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as var_reference;
    var int5 = -1 as var_reference;
    var int6 = 0;
    var int7 = comp(1802, 325);
    var int8 = comp(1802, 326);
    if ((int0 == -1 as struct)) {
        string0 = "Information";
        string1 = struct_getparam(varplayer_10850, 6136);
    } else {
        string0 = struct_getparam(int0, 8809);
        string1 = struct_getparam(int0, 8810);
        string2 = struct_getparam(int0, 8811);
        string3 = struct_getparam(int0, 9020);
        int2 = script17260(int0);
        int4 = struct_getparam(int0, 9024);
        int5 = struct_getparam(int0, 9022);
        if ((STRING_LENGTH(string1) > 0)) {
            string1 = `${string1} <col=FF00>${inttostring(struct_getparam(int0, 8775), 10)} x ${OC_NAME(57550 as obj)}</col>`;
            if ((int4 != -1 as var_reference)) {
                int3 = WORLDMAP_GETDISPLAYCOORD(int4);
                string1 = `${string1}<br><br>This is a <col=00ffff>repeatable task</col>.<br>Task completed: ${TOSTRING_LOCALISED(int3, 1)} ${script985(int3, "times", "time", "times")}`;
            };
            if ((STRING_LENGTH(string2) > 0)) {
                string1 = `${string1}<br><br>${string2}`;
            };
            if (((script17259() == 0) && ((((int4 != -1 as var_reference) || (script17349(int0) == 0)) && (int5 != -1 as var_reference)) && (int2 != -1)))) {
                string1 = `${string1}<br><br>${string3}: ${TOSTRING_LOCALISED(WORLDMAP_GETDISPLAYCOORD(int5), 1)}/${TOSTRING_LOCALISED(int2, 1)}`;
            };
        };
    };
    int6 = script17359(string1);
    if ((int6 > IF_GETHEIGHT(int8))) {
        IF_SETHIDE(false, int7);
        IF_SETSCROLLPOS(0, 0, int8);
        IF_SETSCROLLSIZE(0, (int6 + 4), int8);
        script7791(int7, int8);
    } else {
        IF_SETHIDE(true, int7);
        IF_SETSCROLLSIZE(0, 0, int8);
    };
    IF_SETTEXT(string0, comp(1802, 328));
    IF_SETTEXT(string1, comp(1802, 327));
    script18336(int1);
    script17358(int0);
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    return;
}