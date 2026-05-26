//
function script11720(): void {
    IF_SETHIDE(1, 108396580);
    IF_SETSIZE(SCALE(300, 5000, MIN(5000, varbitplayer_28733)), 5, 0, 0, 108396550);
    var int0 = 1;
    if ((varbitplayer_28733 >= 100)) {
        IF_SETGRAPHIC(2548, 108396551);
        int0 = 2;
    };
    if ((varbitplayer_28733 >= 500)) {
        IF_SETGRAPHIC(2548, 108396552);
        int0 = 3;
    };
    if ((varbitplayer_28733 >= 750)) {
        IF_SETGRAPHIC(2548, 108396553);
        int0 = 4;
    };
    if ((varbitplayer_28733 >= 1000)) {
        IF_SETGRAPHIC(2548, 108396554);
        int0 = 5;
    };
    if ((varbitplayer_28733 >= 1250)) {
        IF_SETGRAPHIC(2548, 108396555);
        int0 = 6;
    };
    if ((varbitplayer_28733 >= 1500)) {
        IF_SETGRAPHIC(2548, 108396556);
        int0 = 7;
    };
    if ((varbitplayer_28733 >= 1750)) {
        IF_SETGRAPHIC(2548, 108396557);
        int0 = 8;
    };
    if ((varbitplayer_28733 >= 2000)) {
        IF_SETGRAPHIC(2548, 108396558);
        int0 = 9;
    };
    if ((varbitplayer_28733 >= 2500)) {
        IF_SETGRAPHIC(2548, 108396559);
        int0 = 10;
    };
    if ((varbitplayer_28733 >= 3000)) {
        IF_SETGRAPHIC(2548, 108396560);
        int0 = 11;
    };
    if ((varbitplayer_28733 >= 5000)) {
        IF_SETGRAPHIC(2548, 108396561);
        int0 = 0;
    };
    var int1 = 0;
    var string0 = "Next unlock: Soon";
    switch (int0) {
        case 0: {
            int1 = 320;
            string0 = "All rewards unlocked!";
            break;
        }
        case 1: {
            int1 = SCALE(320, 100, varbitplayer_28733);
            string0 = `Next unlock: Supply Discount<br>${inttostring(varbitplayer_28733, 10)}/100`;
            break;
        }
        case 2: {
            int1 = SCALE(320, 400, (varbitplayer_28733 - 100));
            string0 = `Next unlock: Bank access (Canal)<br>${inttostring(varbitplayer_28733, 10)}/500`;
            break;
        }
        case 3: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 500));
            string0 = `Next unlock: Fast travel-1<br>${inttostring(varbitplayer_28733, 10)}/750`;
            break;
        }
        case 4: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 750));
            string0 = `Next unlock: Supply Discount+<br>${inttostring(varbitplayer_28733, 10)}/1000`;
            break;
        }
        case 5: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1000));
            string0 = `Next unlock: 'The reputable'<br>${inttostring(varbitplayer_28733, 10)}/1250`;
            break;
        }
        case 6: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1250));
            string0 = `Next unlock: Bank access (Waterfall)<br>${inttostring(varbitplayer_28733, 10)}/1500`;
            break;
        }
        case 7: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1500));
            string0 = `Next unlock: POH location<br>${inttostring(varbitplayer_28733, 10)}/1750`;
            break;
        }
        case 8: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1750));
            string0 = `Next unlock: Fast travel-2<br>${inttostring(varbitplayer_28733, 10)}/2000`;
            break;
        }
        case 9: {
            int1 = SCALE(320, 500, (varbitplayer_28733 - 2000));
            string0 = `Next unlock: Pet Goebie<br>${inttostring(varbitplayer_28733, 10)}/2500`;
            break;
        }
        case 10: {
            int1 = SCALE(320, 500, (varbitplayer_28733 - 2500));
            string0 = `Next unlock: 'of the Goebies'<br>${inttostring(varbitplayer_28733, 10)}/3000`;
            break;
        }
        case 11: {
            int1 = SCALE(320, 2000, (varbitplayer_28733 - 3000));
            string0 = `Next unlock: ${inttostring(10, 10)}% Rare drop chance<br>${inttostring(varbitplayer_28733, 10)}/5000`;
            break;
        }
    };
    IF_SETSIZE(int1, 25, 0, 0, 108396576);
    IF_SETTEXT(`Current reputation: ${inttostring(MIN(5000, varbitplayer_28733), 10)}/5000`, 108396578);
    IF_SETTEXT(string0, 108396570);
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(14194, 108396579);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14196, 108396579);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14195, 108396579);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14195, 108396579);
            break;
        }
    };
    return;
}