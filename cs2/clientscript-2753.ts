//[clientscript,meslayer_lastname]
function script2753(int0: int, int1: unknown_int, int2: component, int3: int, string0: string): void {
    if ((int1 != 1)) {
        return;
    };
    if ((CC_FIND(int2, int3) == 1)) {
        CC_DELETE();
    };
    if (((varclient_5 != int0) || (STRING_LENGTH(string0) <= 0))) {
        return;
    };
    varclient_2506 = REMOVETAGS(string0);
    IF_SETTEXT(ESCAPE(varclient_2506), comp(1469, 4));
    if ((varclient_5 == 8)) {
        RESUME_NAMEDIALOG(varclient_2506);
    } else if ((varclient_5 == 9)) {
        RESUME_STRINGDIALOG(varclient_2506);
    } else if ((varclient_5 == 10)) {
        CLAN_JOINCHAT(varclient_2506);
    };
    script1548(0);
    return;
}