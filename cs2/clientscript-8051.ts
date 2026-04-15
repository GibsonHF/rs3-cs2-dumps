//
function script8051(int0: component): void {
    var int1 = 0;
    var string0 = "Preset";
    while ((int1 < 8)) {
        if ((script6799(int1) == varbitplayer_16789)) {
            if ((int1 < varbitplayer_36829)) {
                string0 = ` - ${enum_getvalue(0, 36, 8657 as cs2enum, script2222(int1))}`;
            } else {
                string0 = "";
            };
            IF_SETOP((int1 + 3), string0, int0);
        } else {
            IF_SETOP((int1 + 3), "", int0);
        };
        int1 = (int1 + 1);
    };
    return;
}