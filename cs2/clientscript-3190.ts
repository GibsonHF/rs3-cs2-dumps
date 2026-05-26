//
function script3190(): void {
    var int0 = 59965442;
    var int1 = 59965481;
    var int2 = 59965443;
    var int3 = 28782;
    IF_SETHIDE(0, 59375761);
    if ((IF_GETHIDE(enum_getvalue(0, 9, 14462 as cs2enum, 4)) == 0)) {
        script3161(0);
    };
    if ((STRING_LENGTH(varclient_2481) > 0)) {
        script9554(int0, int1, int2, `Reporting: ${varclient_2481}`, int3);
    } else {
        script9554(int0, int1, int2, "Report Player", int3);
    };
    if ((((PLAYERMOD() == 1) || (varclient_733 == 1)) || (STAFFMODLEVEL() > 0))) {
        script7886(59965473, 1, 1, varclient_6);
        if (((PLAYERMODLEVEL() == 5) || (PLAYERMODLEVEL() == 6))) {
            IF_SETTEXT("Suggest to temporarily mute this player", 59965473);
        } else {
            IF_SETTEXT("Temporarily mute this player", 59965473);
        };
        IF_SETHIDE(0, 59965473);
    } else {
        IF_SETHIDE(1, 59965473);
    };
    IF_SETONKEY(callback(script3201, -2147483640), 59965441);
    return;
}