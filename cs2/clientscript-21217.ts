//
function script21217(): void {
    if (((((varclient_8506 == comp(-1, 65535)) || (varclient_8504 == -1)) || (varclient_8503 == -1)) || (STRING_LENGTH(varclient_8505) == 0))) {
        return;
    };
    stack(19);
    stack(2);
    stack(varclient_8499);
    stack(varclient_8503);
    script21261();
    var int0 = ((2500 * 21) + varclient_8504);
    stack(varclient_8506);
    stack(int0);
    script21130();
    if ((CC_FINDBYCATEGORY() == 1)) {
        stack(varclient_8503);
        unk11536();
        if (BRANCH_EQUALS(1)) {
            script21206();
        } else {
            script426("Uninstall failed. Please try again later.", varclient_8506, varclient_8504, 1);
        };
    };
    return;
}