//
function script7329(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = script4186();
    if ((int3 < 1)) {
        IF_SETHIDE(false, comp(1275, 12));
        IF_SETHIDE(true, comp(1275, 11));
        stack(15550);
        stack(83558412);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 83558415);
        IF_SETTEXT("No Ship", 83558414);
    } else if ((((varbitplayer_17495 == 24) || (varbitplayer_17495 == 25)) || (varbitplayer_17495 == 50))) {
        IF_SETHIDE(false, comp(1275, 12));
        IF_SETHIDE(false, comp(1275, 11));
        stack(15546);
        stack(83558412);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 14));
        } else {
            IF_SETTEXT("Sailing", comp(1275, 14));
        };
    } else if (((varbitplayer_17495 == 26) || (varbitplayer_17495 == 52))) {
        IF_SETHIDE(false, comp(1275, 12));
        IF_SETHIDE(false, comp(1275, 11));
        stack(15542);
        stack(83558412);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 83558414);
    } else if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(false, comp(1275, 12));
        IF_SETHIDE(false, comp(1275, 11));
        stack(15542);
        stack(83558412);
        IF_SETGRAPHIC();
        IF_SETTEXT("Returned", 83558414);
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(false, comp(1275, 12));
        IF_SETHIDE(false, comp(1275, 11));
        stack(15546);
        stack(83558412);
        IF_SETGRAPHIC();
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 14));
        } else {
            int0 = (script7632(varbitplayer_17081) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 14));
        };
    } else {
        IF_SETHIDE(true, comp(1275, 12));
        IF_SETHIDE(false, comp(1275, 11));
        IF_SETTEXT("Ready", comp(1275, 14));
    };
    if ((int3 < 2)) {
        IF_SETHIDE(false, comp(1275, 18));
        IF_SETHIDE(true, comp(1275, 17));
        stack(15550);
        stack(83558418);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 83558421);
        IF_SETTEXT("No Ship", 83558420);
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(false, comp(1275, 18));
        IF_SETHIDE(false, comp(1275, 17));
        stack(15542);
        stack(83558418);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558421);
        IF_SETTEXT("Returned", 83558420);
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(false, comp(1275, 18));
        IF_SETHIDE(false, comp(1275, 17));
        stack(15546);
        stack(83558418);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558421);
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 20));
        } else {
            int0 = (script7632(varbitplayer_17092) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 20));
        };
    } else {
        IF_SETHIDE(true, comp(1275, 18));
        IF_SETHIDE(false, comp(1275, 17));
        IF_SETHIDE(false, comp(1275, 21));
        IF_SETTEXT("Ready", comp(1275, 20));
    };
    if ((int3 < 3)) {
        IF_SETHIDE(false, comp(1275, 24));
        IF_SETHIDE(true, comp(1275, 23));
        stack(15550);
        stack(83558424);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 83558427);
        IF_SETTEXT("No Ship", 83558426);
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(false, comp(1275, 24));
        IF_SETHIDE(false, comp(1275, 23));
        stack(15542);
        stack(83558424);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558427);
        IF_SETTEXT("Returned", 83558426);
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(false, comp(1275, 24));
        IF_SETHIDE(false, comp(1275, 23));
        stack(15546);
        stack(83558424);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558427);
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 26));
        } else {
            int0 = (script7632(varbitplayer_17103) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 26));
        };
    } else {
        IF_SETHIDE(true, comp(1275, 24));
        IF_SETHIDE(false, comp(1275, 23));
        IF_SETHIDE(false, comp(1275, 27));
        IF_SETTEXT("Ready", comp(1275, 26));
    };
    if ((int3 < 4)) {
        IF_SETHIDE(false, comp(1275, 30));
        IF_SETHIDE(true, comp(1275, 29));
        stack(15550);
        stack(83558430);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 83558433);
        IF_SETTEXT("No Ship", 83558432);
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(false, comp(1275, 30));
        IF_SETHIDE(false, comp(1275, 29));
        stack(15542);
        stack(83558430);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558433);
        IF_SETTEXT("Returned", 83558432);
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(false, comp(1275, 30));
        IF_SETHIDE(false, comp(1275, 29));
        stack(15546);
        stack(83558430);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83558433);
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 32));
        } else {
            int0 = (script7632(varbitplayer_17114) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 32));
        };
    } else {
        IF_SETHIDE(true, comp(1275, 30));
        IF_SETHIDE(false, comp(1275, 29));
        IF_SETHIDE(false, comp(1275, 33));
        IF_SETTEXT("Ready", comp(1275, 32));
    };
    return;
}