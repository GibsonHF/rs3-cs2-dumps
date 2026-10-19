//
function script21212(): void {
    var int1 = script12585(int1);
    if ((int1 == 1)) {
        script21156();
        stack(10);
        stack(2);
        stack(varclient_8499);
        stack(int0);
        script21261();
        stack(int0);
        unk12105();
        if (BRANCH_EQUALS(0)) {
            script426("This plugin could not be enabled. Please try updating if out of date or try again later.", int2, int3, 1);
        };
    } else {
        script21157();
        stack(11);
        stack(2);
        stack(varclient_8499);
        stack(int0);
        script21261();
        stack(int0);
        script21237();
        if (BRANCH_GREATER_THAN(0)) {
            varclient_8506 = int2;
            varclient_8504 = int3;
            varclient_8503 = int0;
            varclient_8505 = string0;
            script2018(15);
        } else {
            stack(int0);
            script21213();
        };
    };
    return;
}