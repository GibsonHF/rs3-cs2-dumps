//[clientscript,loot_ontimer]
function script1598(int0: unknown_int): void {
    if ((varclient_53 < CLIENTCLOCK())) {
        if (((varbitplayer_3307 == 1) || (varbitplayer_3308 == 1))) {
            stack(23804);
            stack(int0);
            IF_SETGRAPHIC();
        } else if ((varbitplayer_3306 == 1)) {
            if ((varbitplayer_3310 == 1)) {
                stack(23805);
                stack(int0);
                IF_SETGRAPHIC();
            } else {
                stack(23802);
                stack(int0);
                IF_SETGRAPHIC();
            };
        } else {
            stack(23803);
            stack(int0);
            IF_SETGRAPHIC();
        };
        varclient_53 = (CLIENTCLOCK() + 500);
    };
    return;
}