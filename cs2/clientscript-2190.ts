//[proc,lobbyscreen_input_full]
function script2190(int0: number, int1: number, int2: number, string0: string, string1: string, string2: string, string3: string): void {
    var int3 = 80;
    if ((((int1 != -1) && (int1 != 6)) && (STRING_LENGTH(string0) <= 0))) {
        return;
    };
    if (((int1 == -1) || (int1 == 6))) {
        if ((STRING_LENGTH(string0) <= 0)) {
            var string0 = string1;
        };
    };
    script3018();
    script9554(52953090, 52953096, 52953091, string0, 28782);
    varclient_2478 = string1;
    if ((int0 == 1)) {
        IF_SETTEXT(ESCAPE(varclient_2478), comp(808, 10));  // lobbyscreen_input:text
    } else {
        IF_SETTEXT(varclient_2478, 52953098);
    };
    var int4 = script13749();
    var string4 = "Done";
    var string5 = "Cancel";
    var int5 = 350;
    if (((int1 == 6) || (int1 == 10))) {
        string4 = "Yes";
        string5 = "No";
    } else if ((int1 == 0)) {
        int5 = 485;
        varclient_1650 = 1;
    };
    IF_SETTEXT(string4, comp(808, 6));  // lobbyscreen_input:positive
    IF_SETOP(1, string4, comp(808, 6));  // lobbyscreen_input:positive
    IF_SETONOP(callback(script3019, int1, string2), comp(808, 6));  // lobbyscreen_input:positive
    IF_SETTEXT(string5, comp(808, 7));  // lobbyscreen_input:neutral
    IF_SETOP(1, string5, comp(808, 7));  // lobbyscreen_input:neutral
    IF_SETSIZE(int5, 175, 0, 0, comp(808, 1));  // lobbyscreen_input:window
    if ((int4 == 1)) {
        IF_SETPOSITION(0, 0, 1, 0, comp(808, 1));  // lobbyscreen_input:window
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(808, 1));  // lobbyscreen_input:window
    };
    if ((int2 == 0)) {
        IF_SETPOSITION(0, 5, 1, 2, comp(808, 6));  // lobbyscreen_input:positive
        IF_SETHIDE(true, comp(808, 7));  // lobbyscreen_input:neutral
    } else {
        IF_SETPOSITION(-75, 5, 1, 2, comp(808, 6));  // lobbyscreen_input:positive
        IF_SETPOSITION(75, 5, 1, 2, comp(808, 7));  // lobbyscreen_input:neutral
        IF_SETHIDE(false, comp(808, 7));  // lobbyscreen_input:neutral
    };
    IF_SETHIDE(false, comp(906, 99));  // lobbyscreen:input
    var int6 = 0;
    switch (int1) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 7:
        case 9: {
            int6 = 2;
            int3 = 12;
            break;
        }
        case 0: {
            int3 = 255;
            break;
        }
        case 6: {
            int3 = 500;
            break;
        }
    };
    var int7 = script17126();
    if ((IF_GETHIDE(enum_getvalue(0, 9, int7, 4)) == 0)) {
        script3161(0);
    } else if ((IF_GETHIDE(enum_getvalue(0, 9, int7, 3)) == 0)) {
        script4556(0);
    };
    IF_SETONKEY(callback(script3022, -2147483640, -2147483639, -2147483645, int6, int1, string2), comp(808, 10));  // lobbyscreen_input:text
    varplayer_8156 = int3;
    script1566(0, string1, int3);
    if ((int1 != -1)) {
        if ((int1 != 6)) {
            varclient_1097 = STRING_LENGTH(varclient_2478);
            IF_SETONCLICK(callback(script1874, -2147483647, 52953098, 52953099), comp(808, 10));  // lobbyscreen_input:text
            script1875(52953098, 52953099, varclient_2478);
            IF_SETHIDE(true, comp(808, 11));  // lobbyscreen_input:caret
            IF_SETHIDE(false, comp(808, 4));  // lobbyscreen_input:box_container
        } else {
            varclient_1097 = 0;
            IF_SETHIDE(true, comp(808, 4));  // lobbyscreen_input:box_container
            if (((STRING_LENGTH(string3) > 0) && (STRING_LENGTH(varclient_2478) > 0))) {
                IF_SETTEXT(`<u=AED0E0>${string3}</u>`, comp(808, 5));  // lobbyscreen_input:link
                IF_SETHIDE(false, comp(808, 5));  // lobbyscreen_input:link
            };
        };
    } else {
        varclient_1097 = 0;
        IF_SETHIDE(true, comp(808, 4));  // lobbyscreen_input:box_container
        if (((STRING_LENGTH(string3) > 0) && (STRING_LENGTH(varclient_2478) > 0))) {
            IF_SETTEXT(`<u=AED0E0>${string3}</u>`, comp(808, 5));  // lobbyscreen_input:link
            IF_SETHIDE(false, comp(808, 5));  // lobbyscreen_input:link
        };
    };
    return;
}