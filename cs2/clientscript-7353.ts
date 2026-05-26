//
function script7353(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = script4186();
    if ((int3 < 1)) {
        IF_SETHIDE(0, 61866040);
        IF_SETHIDE(1, 61866039);
        IF_SETGRAPHIC(15550, 61866040);
        IF_SETTEXT("No Ship", 61866042);
    } else if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(0, 61866040);
        IF_SETHIDE(0, 61866039);
        IF_SETGRAPHIC(15542, 61866040);
        IF_SETTEXT("Returned", 61866042);
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(0, 61866040);
        IF_SETHIDE(0, 61866039);
        IF_SETGRAPHIC(15546, 61866040);
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", 61866042);
        } else {
            int0 = (script7632(varbitplayer_17081) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", 61866042);
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, 61866042);
            };
        };
    } else {
        IF_SETHIDE(1, 61866040);
        IF_SETHIDE(0, 61866039);
        IF_SETTEXT("Ready", 61866042);
    };
    if ((int3 < 2)) {
        IF_SETHIDE(0, 61866045);
        IF_SETHIDE(1, 61866044);
        IF_SETGRAPHIC(15550, 61866045);
        IF_SETTEXT("No Ship", 61866047);
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(0, 61866045);
        IF_SETHIDE(0, 61866044);
        IF_SETGRAPHIC(15542, 61866045);
        IF_SETTEXT("Returned", 61866047);
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(0, 61866045);
        IF_SETHIDE(0, 61866044);
        IF_SETGRAPHIC(15546, 61866045);
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", 61866047);
        } else {
            int0 = (script7632(varbitplayer_17092) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", 61866047);
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, 61866047);
            };
        };
    } else {
        IF_SETHIDE(1, 61866045);
        IF_SETHIDE(0, 61866044);
        IF_SETTEXT("Ready", 61866047);
    };
    if ((int3 < 3)) {
        IF_SETHIDE(0, 61866050);
        IF_SETHIDE(1, 61866049);
        IF_SETGRAPHIC(15550, 61866050);
        IF_SETTEXT("No Ship", 61866052);
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(0, 61866050);
        IF_SETHIDE(0, 61866049);
        IF_SETGRAPHIC(15542, 61866050);
        IF_SETTEXT("Returned", 61866052);
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(0, 61866050);
        IF_SETHIDE(0, 61866049);
        IF_SETGRAPHIC(15546, 61866050);
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", 61866052);
        } else {
            int0 = (script7632(varbitplayer_17103) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", 61866052);
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, 61866052);
            };
        };
    } else {
        IF_SETHIDE(1, 61866050);
        IF_SETHIDE(0, 61866049);
        IF_SETTEXT("Ready", 61866052);
    };
    if ((int3 < 4)) {
        IF_SETHIDE(0, 61866055);
        IF_SETHIDE(1, 61866054);
        IF_SETGRAPHIC(15550, 61866055);
        IF_SETTEXT("No Ship", 61866057);
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(0, 61866055);
        IF_SETHIDE(0, 61866054);
        IF_SETGRAPHIC(15542, 61866055);
        IF_SETTEXT("Returned", 61866057);
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(0, 61866055);
        IF_SETHIDE(0, 61866054);
        IF_SETGRAPHIC(15546, 61866055);
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", 61866057);
        } else {
            int0 = (script7632(varbitplayer_17114) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            if ((int0 <= 0)) {
                IF_SETTEXT("Sailing: ETA: Soon...", 61866057);
            } else {
                IF_SETTEXT(`Sailing: ETA: ${inttostring(int1, 10)}:${string0}`, 61866057);
            };
        };
    } else {
        IF_SETHIDE(1, 61866055);
        IF_SETHIDE(0, 61866054);
        IF_SETTEXT("Ready", 61866057);
    };
    return;
}