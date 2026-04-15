//
function script3143(int0: int, int1: int, int2: unknown_int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int2 == 0)) {
        if ((int3 == 1)) {
            int4 = (int0 - int1);
            int5 = (int4 / 1440);
            int6 = (MODULO(int4, 1440) / 60);
            IF_SETTEXT("Member", comp(274, 38));
            if ((int5 == 0)) {
                IF_SETTEXT(`Expires in ${script11479(0, int6, int5)}`, comp(274, 39));
            } else {
                IF_SETTEXT(`Expires in ${inttostring(int5, 10)} days`, comp(274, 39));
            };
            stack(12978);
            stack(17956901);
            IF_SETGRAPHIC();
            script6865(17956902, -1, 0);
            script6865(17956903, -1, 6);
        } else {
            IF_SETTEXT("Non-Member", comp(274, 38));
            IF_SETTEXT("", comp(274, 39));
            stack(12979);
            stack(17956901);
            IF_SETGRAPHIC();
            script6865(17956902, -1, 0);
        };
    } else {
        IF_SETTEXT("Member", comp(274, 38));
        IF_SETTEXT("", comp(274, 39));
        stack(12978);
        stack(17956901);
        IF_SETGRAPHIC();
        script6865(17956902, -1, 0);
        script6865(17956903, -1, 10611452);
    };
    IF_SETTEXT(inttostring(MAP_WORLD(), 10), comp(274, 14));
    script15949();
    return;
}