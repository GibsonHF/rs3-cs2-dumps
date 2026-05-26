//
function script7329(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = script4186();
    if ((int3 < 1)) {
        IF_SETHIDE(0, 83558412);
        IF_SETHIDE(1, 83558411);
        IF_SETGRAPHIC(15550, 83558412);
        IF_SETHIDE(1, 83558415);
        IF_SETTEXT("No Ship", 83558414);
    } else if ((((varbitplayer_17495 == 24) || (varbitplayer_17495 == 25)) || (varbitplayer_17495 == 50))) {
        IF_SETHIDE(0, 83558412);
        IF_SETHIDE(0, 83558411);
        IF_SETGRAPHIC(15546, 83558412);
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", 83558414);
        } else {
            IF_SETTEXT("Sailing", 83558414);
        };
    } else if (((varbitplayer_17495 == 26) || (varbitplayer_17495 == 52))) {
        IF_SETHIDE(0, 83558412);
        IF_SETHIDE(0, 83558411);
        IF_SETGRAPHIC(15542, 83558412);
        IF_SETTEXT("Returned", 83558414);
    } else if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(0, 83558412);
        IF_SETHIDE(0, 83558411);
        IF_SETGRAPHIC(15542, 83558412);
        IF_SETTEXT("Returned", 83558414);
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(0, 83558412);
        IF_SETHIDE(0, 83558411);
        IF_SETGRAPHIC(15546, 83558412);
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", 83558414);
        } else {
            int0 = (script7632(varbitplayer_17081) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, 83558414);
        };
    } else {
        IF_SETHIDE(1, 83558412);
        IF_SETHIDE(0, 83558411);
        IF_SETTEXT("Ready", 83558414);
    };
    if ((int3 < 2)) {
        IF_SETHIDE(0, 83558418);
        IF_SETHIDE(1, 83558417);
        IF_SETGRAPHIC(15550, 83558418);
        IF_SETHIDE(1, 83558421);
        IF_SETTEXT("No Ship", 83558420);
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(0, 83558418);
        IF_SETHIDE(0, 83558417);
        IF_SETGRAPHIC(15542, 83558418);
        IF_SETHIDE(0, 83558421);
        IF_SETTEXT("Returned", 83558420);
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(0, 83558418);
        IF_SETHIDE(0, 83558417);
        IF_SETGRAPHIC(15546, 83558418);
        IF_SETHIDE(0, 83558421);
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", 83558420);
        } else {
            int0 = (script7632(varbitplayer_17092) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, 83558420);
        };
    } else {
        IF_SETHIDE(1, 83558418);
        IF_SETHIDE(0, 83558417);
        IF_SETHIDE(0, 83558421);
        IF_SETTEXT("Ready", 83558420);
    };
    if ((int3 < 3)) {
        IF_SETHIDE(0, 83558424);
        IF_SETHIDE(1, 83558423);
        IF_SETGRAPHIC(15550, 83558424);
        IF_SETHIDE(1, 83558427);
        IF_SETTEXT("No Ship", 83558426);
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(0, 83558424);
        IF_SETHIDE(0, 83558423);
        IF_SETGRAPHIC(15542, 83558424);
        IF_SETHIDE(0, 83558427);
        IF_SETTEXT("Returned", 83558426);
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(0, 83558424);
        IF_SETHIDE(0, 83558423);
        IF_SETGRAPHIC(15546, 83558424);
        IF_SETHIDE(0, 83558427);
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", 83558426);
        } else {
            int0 = (script7632(varbitplayer_17103) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, 83558426);
        };
    } else {
        IF_SETHIDE(1, 83558424);
        IF_SETHIDE(0, 83558423);
        IF_SETHIDE(0, 83558427);
        IF_SETTEXT("Ready", 83558426);
    };
    if ((int3 < 4)) {
        IF_SETHIDE(0, 83558430);
        IF_SETHIDE(1, 83558429);
        IF_SETGRAPHIC(15550, 83558430);
        IF_SETHIDE(1, 83558433);
        IF_SETTEXT("No Ship", 83558432);
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(0, 83558430);
        IF_SETHIDE(0, 83558429);
        IF_SETGRAPHIC(15542, 83558430);
        IF_SETHIDE(0, 83558433);
        IF_SETTEXT("Returned", 83558432);
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(0, 83558430);
        IF_SETHIDE(0, 83558429);
        IF_SETGRAPHIC(15546, 83558430);
        IF_SETHIDE(0, 83558433);
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", 83558432);
        } else {
            int0 = (script7632(varbitplayer_17114) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, 83558432);
        };
    } else {
        IF_SETHIDE(1, 83558430);
        IF_SETHIDE(0, 83558429);
        IF_SETHIDE(0, 83558433);
        IF_SETTEXT("Ready", 83558432);
    };
    return;
}