//
function script21216(): void {
    script21154();
    stack(18);
    stack(2);
    stack(varclient_8499);
    stack(int2);
    script21261();
    stack(int2);
    script21237();
    if (BRANCH_GREATER_THAN(0)) {
        stack("This plugin cannot be uninstalled as it is a required dependency for the following plugins:<br>");
        stack(int2);
        script21239();
        script426(`.<br><br>Please uninstall those first if you wish to continue.`, int0, int1, 1);
        return;
    };
    varclient_8506 = int0;
    varclient_8504 = int1;
    varclient_8503 = int2;
    varclient_8505 = string0;
    script2018(14);
    return;
}