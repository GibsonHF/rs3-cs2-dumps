//
function script17410(int0: unknown_int): string {
    var int1 = varbitplayer_55314;
    if ((int0 == 1)) {
        int1 = varbitplayer_55317;
    };
    var int2 = script16491(int1);
    var int3 = script15828((int2 + 1));
    var string0 = `<col=F5B241>Benchsitting:  ${inttostring(int2, 10)}/${inttostring(int2, 10)}<br><col=F5B241>Current XP:  ${TOSTRING_LOCALISED(int1, 1)}`;
    if ((int2 < 99)) {
        string0 = strconcat(string0, `<br><col=F5B241>Next level:  ${TOSTRING_LOCALISED(int3, 1)}<br><col=F5B241>Remainder:  ${TOSTRING_LOCALISED((int3 - int1), 1)}`);
    };
    return string0;
}