//
function script11414(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(4 as stat) > STAT_BASE(4 as stat))) {
            script10624(14891 as struct, 1);
            script10624(14892 as struct, 0);
            return;
        };
        if ((STAT(4 as stat) < STAT_BASE(4 as stat))) {
            script10624(14891 as struct, 0);
            script10624(14892 as struct, 1);
            return;
        };
    };
    script10624(14891 as struct, 0);
    script10624(14892 as struct, 0);
    return;
}