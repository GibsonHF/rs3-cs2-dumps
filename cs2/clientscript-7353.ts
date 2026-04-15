//
function script7353(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = script4186();
    if ((int3 < 1)) {
        IF_SETHIDE(false, comp(944, 56));
        IF_SETHIDE(true, comp(944, 55));
        stack(15550);
        stack(61866040);
        IF_SETGRAPHIC();
        IF_SETTEXT("No Ship", 61866042);
    } else if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(false, comp(944, 56));
        IF_SETHIDE(false, comp(944, 55));
        stack(15542);
        stack(61866040);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 61866042);
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(false, comp(944, 56));
        IF_SETHIDE(false, comp(944, 55));
        stack(15546);
        stack(61866040);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(944, 58));
        } else {
            int0 = (script7632(varbitplayer_17081) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", comp(944, 58));
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, comp(944, 58));
            };
        };
    } else {
        IF_SETHIDE(true, comp(944, 56));
        IF_SETHIDE(false, comp(944, 55));
        IF_SETTEXT("Ready", comp(944, 58));
    };
    if ((int3 < 2)) {
        IF_SETHIDE(false, comp(944, 61));
        IF_SETHIDE(true, comp(944, 60));
        stack(15550);
        stack(61866045);
        IF_SETGRAPHIC();
        IF_SETTEXT("No Ship", 61866047);
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(false, comp(944, 61));
        IF_SETHIDE(false, comp(944, 60));
        stack(15542);
        stack(61866045);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 61866047);
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(false, comp(944, 61));
        IF_SETHIDE(false, comp(944, 60));
        stack(15546);
        stack(61866045);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", comp(944, 63));
        } else {
            int0 = (script7632(varbitplayer_17092) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", comp(944, 63));
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, comp(944, 63));
            };
        };
    } else {
        IF_SETHIDE(true, comp(944, 61));
        IF_SETHIDE(false, comp(944, 60));
        IF_SETTEXT("Ready", comp(944, 63));
    };
    if ((int3 < 3)) {
        IF_SETHIDE(false, comp(944, 66));
        IF_SETHIDE(true, comp(944, 65));
        stack(15550);
        stack(61866050);
        IF_SETGRAPHIC();
        IF_SETTEXT("No Ship", 61866052);
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(false, comp(944, 66));
        IF_SETHIDE(false, comp(944, 65));
        stack(15542);
        stack(61866050);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 61866052);
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(false, comp(944, 66));
        IF_SETHIDE(false, comp(944, 65));
        stack(15546);
        stack(61866050);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", comp(944, 68));
        } else {
            int0 = (script7632(varbitplayer_17103) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", comp(944, 68));
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, comp(944, 68));
            };
        };
    } else {
        IF_SETHIDE(true, comp(944, 66));
        IF_SETHIDE(false, comp(944, 65));
        IF_SETTEXT("Ready", comp(944, 68));
    };
    if ((int3 < 4)) {
        IF_SETHIDE(false, comp(944, 71));
        IF_SETHIDE(true, comp(944, 70));
        stack(15550);
        stack(61866055);
        IF_SETGRAPHIC();
        IF_SETTEXT("No Ship", 61866057);
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(false, comp(944, 71));
        IF_SETHIDE(false, comp(944, 70));
        stack(15542);
        stack(61866055);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 61866057);
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(false, comp(944, 71));
        IF_SETHIDE(false, comp(944, 70));
        stack(15546);
        stack(61866055);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", comp(944, 73));
        } else {
            int0 = (script7632(varbitplayer_17114) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", comp(944, 73));
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, comp(944, 73));
            };
        };
    } else {
        IF_SETHIDE(true, comp(944, 71));
        IF_SETHIDE(false, comp(944, 70));
        IF_SETTEXT("Ready", comp(944, 73));
    };
    return;
}