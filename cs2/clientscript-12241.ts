//
function script12241(int0: component, int1: struct, int2: int): void {
    IF_SETPOSITION(0, IF_GETHEIGHT(struct_getparam(int1, 8130)), 0, 2, int0);
    var int3 = 0;
    if ((IF_GETHIDE(struct_getparam(int1, 8123)) == false)) {
        int3 = 16;
    };
    IF_SETSIZE((IF_GETWIDTH(struct_getparam(int1, 8122)) + int3), (IF_GETHEIGHT(struct_getparam(int1, 8122)) + IF_GETHEIGHT(struct_getparam(int1, 8127))), 0, 0, int0);
    CC_DELETEALL(int0);
    var string0 = "";
    if ((varbitplayer_45116 == 1)) {
        if ((int2 == 0)) {
            IF_SETHIDE(true, struct_getparam(int1, 8127));
            IF_SETHIDE(true, struct_getparam(int1, 8123));
            IF_SETHIDE(false, int0);
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            if ((script6431() == false)) {
                switch (varbitplayer_16789) {
                    case 1: {
                        string0 = "You don't have any curses active.<br><br>Click the bottom-left button to view the full curse list.";
                        break;
                    }
                    default: {
                        string0 = "You don't have any prayers active.<br><br>Click the bottom-left button to view the full prayer list.";
                        break;
                    }
                };
            } else {
                switch (varbitplayer_16789) {
                    case 1: {
                        string0 = "You don't have any curses active.<br><br>Tap the Active Curses button to view the full list of curses.";
                        break;
                    }
                    default: {
                        string0 = "You don't have any prayers active.<br><br>Tap the Active Prayers button to view the full list of prayers.";
                        break;
                    }
                };
            };
            CC_SETTEXT(string0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(16777215);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTSHADOW(true);
            CC_SETSIZE(8, 8, 1, 1);
            CC_SETPOSITION(0, 0, 1, 1);
        } else {
            IF_SETHIDE(false, struct_getparam(int1, 8127));
            IF_SETHIDE(true, int0);
            IF_SETHIDE(false, struct_getparam(int1, 8123));
        };
    } else {
        IF_SETHIDE(true, struct_getparam(int1, 8127));
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, struct_getparam(int1, 8123));
    };
    return;
}