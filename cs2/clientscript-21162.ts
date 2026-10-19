//
function script21162(): void {
    var int1 = 0;
    if ((varclient_8512 == -1)) {
        int1 = 1;
        unk11976();
        script21163();
    };
    if ((varclient_8512 == 8)) {
        IF_SETHIDE(true, int0);
        stack(1);
        return;
    };
    if ((int0 == comp(-1, 65535))) {
        script12478("Can't continue with auth!");
        stack(0);
        return;
    };
    IF_SETHIDE(false, int0);
    if ((varbitplayer_62213 == 1)) {
        varbitplayer_62213 = 0;
        IF_TRIGGEROP(comp(1578, 21), -1, 1);  // plugin_hub_parent_install:close_button
    };
    IF_SETHIDE(script6427(varbitplayer_62214), comp(1578, 21));  // plugin_hub_parent_install:close_button
    if ((int1 == 1)) {
        stack(20);
        stack(varbitplayer_62195);
        stack(-1);
        stack(-1);
        script21261();
        script8421(103415814, 103415830, 103415815, -1, "Authentication", 1728, -1, 1, -1, -1);
        stack(21165);
        stack(int0);
        IF_SETONOP("i", 103415809);
        stack(21166);
        stack(-2147483647);
        stack(-2147483646);
        stack("ii");
        stack(103415810);
        unk11383();
        stack(varclient_8512);
        script21168();
    };
    stack(0);
    return;
}