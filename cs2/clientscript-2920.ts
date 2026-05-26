//
function script2920(int0: number, int1: number, string0: string): void {
    script3181();
    if ((STRING_LENGTH(string0) > 0)) {
        varclient_2478 = REMOVETAGS(string0);
    } else {
        varclient_2478 = "";
    };
    IF_SETTEXT(varclient_2478, 59899907);
    if ((IF_GETHIDE(enum_getvalue(0, 9, script17126(), 4)) == 0)) {
        script3161(0);
    };
    IF_SETONKEY(callback(script3185, -2147483640, -2147483639, -2147483645), 59899907);
    varclient_1097 = STRING_LENGTH(varclient_2478);
    script1566(0, varclient_2478, 12);
    IF_SETONCLICK(callback(script1878, -2147483647, 59899907, 59899908), 59899907);
    script1879(59899907, 59899908, varclient_2478);
    IF_SETHIDE(1, 59899908);
    if ((int0 == 1)) {
        script7886(59899916, 1, 1, varclient_6);
        if (((int1 == 5) || (int1 == 6))) {
            IF_SETTEXT("Suggest to temporarily mute this player", 59899916);
        } else {
            IF_SETTEXT("Temporarily mute this player", 59899916);
        };
        IF_SETHIDE(0, 59899916);
    } else {
        IF_SETHIDE(1, 59899916);
    };
    IF_SETHIDE(0, 59375760);
    return;
}