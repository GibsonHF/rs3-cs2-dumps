//
function script2025(): void {
    IF_SETHIDE(true, comp(950, 185));
    IF_SETHIDE(true, comp(950, 229));
    IF_SETHIDE(true, comp(950, 237));
    IF_SETHIDE(true, comp(950, 244));
    IF_SETHIDE(true, comp(950, 251));
    IF_SETHIDE(true, comp(950, 259));
    IF_SETHIDE(true, comp(950, 267));
    IF_SETHIDE(true, comp(950, 183));
    IF_SETHIDE(true, comp(950, 227));
    IF_SETHIDE(true, comp(950, 236));
    IF_SETHIDE(true, comp(950, 243));
    IF_SETHIDE(true, comp(950, 250));
    IF_SETHIDE(true, comp(950, 258));
    IF_SETHIDE(true, comp(950, 264));
    IF_SETTEXT(`x${inttostring(varbitplayer_17424, 10)}`, comp(950, 182));
    if ((varbitplayer_17424 == 0)) {
        IF_SETHIDE(false, comp(950, 185));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17425, 10)}`, comp(950, 226));
    if ((varbitplayer_17425 == 0)) {
        IF_SETHIDE(false, comp(950, 229));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17426, 10)}`, comp(950, 234));
    if ((varbitplayer_17426 == 0)) {
        IF_SETHIDE(false, comp(950, 237));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17427, 10)}`, comp(950, 241));
    if ((varbitplayer_17427 == 0)) {
        IF_SETHIDE(false, comp(950, 244));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17428, 10)}`, comp(950, 248));
    if ((varbitplayer_17428 == 0)) {
        IF_SETHIDE(false, comp(950, 251));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17429, 10)}`, comp(950, 256));
    if ((varbitplayer_17429 == 0)) {
        IF_SETHIDE(false, comp(950, 259));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17430, 10)}`, comp(950, 265));
    if ((varbitplayer_17430 == 0)) {
        IF_SETHIDE(false, comp(950, 267));
    };
    switch (varbitplayer_17132) {
        case 1: {
            if ((varbitplayer_17073 > 0)) {
                IF_SETHIDE(false, comp(950, 183));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17073 / 10), 10)}`, comp(950, 183));
            };
            if ((varbitplayer_17073 >= 30)) {
                IF_SETHIDE(false, comp(950, 185));
            };
            if ((varbitplayer_17074 > 0)) {
                IF_SETHIDE(false, comp(950, 227));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17074 / 10), 10)}`, comp(950, 227));
            };
            if ((varbitplayer_17074 >= 30)) {
                IF_SETHIDE(false, comp(950, 229));
            };
            if ((varbitplayer_17075 > 0)) {
                IF_SETHIDE(false, comp(950, 236));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17075 / 10), 10)}`, comp(950, 236));
            };
            if ((varbitplayer_17075 >= 30)) {
                IF_SETHIDE(false, comp(950, 237));
            };
            if ((varbitplayer_17076 > 0)) {
                IF_SETHIDE(false, comp(950, 243));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17076 / 10), 10)}`, comp(950, 243));
            };
            if ((varbitplayer_17076 >= 30)) {
                IF_SETHIDE(false, comp(950, 244));
            };
            if ((varbitplayer_17077 == 1)) {
                IF_SETHIDE(false, comp(950, 251));
                IF_SETHIDE(false, comp(950, 250));
            };
            if ((varbitplayer_17078 == 1)) {
                IF_SETHIDE(false, comp(950, 259));
                IF_SETHIDE(false, comp(950, 258));
            };
            if ((varbitplayer_17079 == 1)) {
                IF_SETHIDE(false, comp(950, 267));
                IF_SETHIDE(false, comp(950, 264));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_17084 > 0)) {
                IF_SETHIDE(false, comp(950, 183));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17084 / 10), 10)}`, comp(950, 183));
            };
            if ((varbitplayer_17084 >= 30)) {
                IF_SETHIDE(false, comp(950, 185));
            };
            if ((varbitplayer_17085 > 0)) {
                IF_SETHIDE(false, comp(950, 227));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17085 / 10), 10)}`, comp(950, 227));
            };
            if ((varbitplayer_17085 >= 30)) {
                IF_SETHIDE(false, comp(950, 229));
            };
            if ((varbitplayer_17086 > 0)) {
                IF_SETHIDE(false, comp(950, 236));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17086 / 10), 10)}`, comp(950, 236));
            };
            if ((varbitplayer_17086 >= 30)) {
                IF_SETHIDE(false, comp(950, 237));
            };
            if ((varbitplayer_17087 > 0)) {
                IF_SETHIDE(false, comp(950, 243));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17087 / 10), 10)}`, comp(950, 243));
            };
            if ((varbitplayer_17087 >= 30)) {
                IF_SETHIDE(false, comp(950, 244));
            };
            if ((varbitplayer_17088 == 1)) {
                IF_SETHIDE(false, comp(950, 251));
                IF_SETHIDE(false, comp(950, 250));
            };
            if ((varbitplayer_17089 == 1)) {
                IF_SETHIDE(false, comp(950, 259));
                IF_SETHIDE(false, comp(950, 258));
            };
            if ((varbitplayer_17090 == 1)) {
                IF_SETHIDE(false, comp(950, 267));
                IF_SETHIDE(false, comp(950, 264));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_17095 > 0)) {
                IF_SETHIDE(false, comp(950, 183));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17095 / 10), 10)}`, comp(950, 183));
            };
            if ((varbitplayer_17095 >= 30)) {
                IF_SETHIDE(false, comp(950, 185));
            };
            if ((varbitplayer_17096 > 0)) {
                IF_SETHIDE(false, comp(950, 227));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17096 / 10), 10)}`, comp(950, 227));
            };
            if ((varbitplayer_17096 >= 30)) {
                IF_SETHIDE(false, comp(950, 229));
            };
            if ((varbitplayer_17097 > 0)) {
                IF_SETHIDE(false, comp(950, 236));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17097 / 10), 10)}`, comp(950, 236));
            };
            if ((varbitplayer_17097 >= 30)) {
                IF_SETHIDE(false, comp(950, 237));
            };
            if ((varbitplayer_17098 > 0)) {
                IF_SETHIDE(false, comp(950, 243));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17098 / 10), 10)}`, comp(950, 243));
            };
            if ((varbitplayer_17098 >= 30)) {
                IF_SETHIDE(false, comp(950, 244));
            };
            if ((varbitplayer_17099 == 1)) {
                IF_SETHIDE(false, comp(950, 251));
                IF_SETHIDE(false, comp(950, 250));
            };
            if ((varbitplayer_17100 == 1)) {
                IF_SETHIDE(false, comp(950, 259));
                IF_SETHIDE(false, comp(950, 258));
            };
            if ((varbitplayer_17101 == 1)) {
                IF_SETHIDE(false, comp(950, 267));
                IF_SETHIDE(false, comp(950, 264));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_17106 > 0)) {
                IF_SETHIDE(false, comp(950, 183));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17106 / 10), 10)}`, comp(950, 183));
            };
            if ((varbitplayer_17106 >= 30)) {
                IF_SETHIDE(false, comp(950, 185));
            };
            if ((varbitplayer_17107 > 0)) {
                IF_SETHIDE(false, comp(950, 227));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17107 / 10), 10)}`, comp(950, 227));
            };
            if ((varbitplayer_17107 >= 30)) {
                IF_SETHIDE(false, comp(950, 229));
            };
            if ((varbitplayer_17108 > 0)) {
                IF_SETHIDE(false, comp(950, 236));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17108 / 10), 10)}`, comp(950, 236));
            };
            if ((varbitplayer_17108 >= 30)) {
                IF_SETHIDE(false, comp(950, 237));
            };
            if ((varbitplayer_17109 > 0)) {
                IF_SETHIDE(false, comp(950, 243));
                IF_SETTEXT(`Active: ${inttostring((varbitplayer_17109 / 10), 10)}`, comp(950, 243));
            };
            if ((varbitplayer_17109 >= 30)) {
                IF_SETHIDE(false, comp(950, 244));
            };
            if ((varbitplayer_17110 == 1)) {
                IF_SETHIDE(false, comp(950, 251));
                IF_SETHIDE(false, comp(950, 250));
            };
            if ((varbitplayer_17111 == 1)) {
                IF_SETHIDE(false, comp(950, 259));
                IF_SETHIDE(false, comp(950, 258));
            };
            if ((varbitplayer_17112 == 1)) {
                IF_SETHIDE(false, comp(950, 267));
                IF_SETHIDE(false, comp(950, 264));
            };
            break;
        }
    };
    return;
}