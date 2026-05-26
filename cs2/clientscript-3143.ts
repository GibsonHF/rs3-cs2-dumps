//
function script3143(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int2 == 0)) {
        if ((int3 == 1)) {
            int4 = (int0 - int1);
            int5 = (int4 / 1440);
            int6 = (MODULO(int4, 1440) / 60);
            IF_SETTEXT("Member", 17956902);
            if ((int5 == 0)) {
                IF_SETTEXT(`Expires in ${script11479(0, int6, int5)}`, 17956903);
            } else {
                IF_SETTEXT(`Expires in ${inttostring(int5, 10)} days`, 17956903);
            };
            stack(12978);
            stack(17956901);
            IF_SETGRAPHIC();
            script6865(17956902, -1, 0);
            script6865(17956903, -1, 6);
        } else {
            IF_SETTEXT("Non-Member", 17956902);
            IF_SETTEXT("", 17956903);
            stack(12979);
            stack(17956901);
            IF_SETGRAPHIC();
            script6865(17956902, -1, 0);
        };
    } else {
        IF_SETTEXT("Member", 17956902);
        IF_SETTEXT("", 17956903);
        stack(12978);
        stack(17956901);
        IF_SETGRAPHIC();
        script6865(17956902, -1, 0);
        script6865(17956903, -1, 10611452);
    };
    IF_SETTEXT(inttostring(MAP_WORLD(), 10), 17956878);
    script15949();
    return;
}