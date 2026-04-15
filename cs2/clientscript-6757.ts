//
function script6757(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = script6341();
    var int3 = struct_getparam(int2, 1268);
    if ((int3 == 4090)) {
        return;
    };
    var int4 = -1 as struct;
    var string0 = "";
    var int5 = struct_getparam(int2, 3330);
    var int6 = struct_getparam(int2, 3331);
    IF_SETHIDE(false, comp(1345, 103));
    IF_SETTEXT(string0, comp(1345, 218));
    script4532(comp(1345, 218));
    if ((struct_getparam(int4, 1290) == 1)) {
        IF_SETTEXT("Free to play content", comp(1345, 116));
        IF_SETCOLOUR(6776679, comp(1345, 116));
        stack(13165);
        stack(88146035);
        IF_SETGRAPHIC();
    } else if ((PLAYERMEMBER() == false)) {
        IF_SETTEXT("RuneScape member: Click to subscribe!", comp(1345, 116));
        IF_SETCOLOUR(9803157, comp(1345, 116));
        stack(13166);
        stack(88146035);
        IF_SETGRAPHIC();
    } else if ((MAP_MEMBERS() == 0)) {
        IF_SETTEXT("Member's world", comp(1345, 116));
        IF_SETCOLOUR(9803157, comp(1345, 116));
        stack(13166);
        stack(88146035);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT("RuneScape member", comp(1345, 116));
        IF_SETCOLOUR(6776679, comp(1345, 116));
        stack(13165);
        stack(88146035);
        IF_SETGRAPHIC();
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = comp(-1, 65535);
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = 0;
    var int15 = 0;
    while (((int14 < 12) && (int15 == 0))) {
        switch (int14) {
            case 0: {
                int7 = struct_getparam(int4, 1294);
                int8 = struct_getparam(int4, 1295);
                int9 = comp(1345, 117);
                int10 = 88146043;
                int11 = 88146044;
                int13 = 88146041;
                int12 = 88146042;
                break;
            }
            case 1: {
                int7 = struct_getparam(int4, 1296);
                int8 = struct_getparam(int4, 1297);
                int9 = comp(1345, 125);
                int10 = 88146051;
                int11 = 88146052;
                int13 = 88146049;
                int12 = 88146050;
                break;
            }
            case 2: {
                int7 = struct_getparam(int4, 1298);
                int8 = struct_getparam(int4, 1299);
                int9 = comp(1345, 133);
                int10 = 88146059;
                int11 = 88146060;
                int13 = 88146057;
                int12 = 88146058;
                break;
            }
            case 3: {
                int7 = struct_getparam(int4, 1300);
                int8 = struct_getparam(int4, 1301);
                int9 = comp(1345, 141);
                int10 = 88146067;
                int11 = 88146068;
                int13 = 88146065;
                int12 = 88146066;
                break;
            }
            case 4: {
                int7 = struct_getparam(int4, 1302);
                int8 = struct_getparam(int4, 1303);
                int9 = comp(1345, 149);
                int10 = 88146075;
                int11 = 88146076;
                int13 = 88146073;
                int12 = 88146074;
                break;
            }
            case 5: {
                int7 = struct_getparam(int4, 1304);
                int8 = struct_getparam(int4, 1305);
                int9 = comp(1345, 157);
                int10 = 88146083;
                int11 = 88146084;
                int13 = 88146081;
                int12 = 88146082;
                break;
            }
            case 6: {
                int7 = struct_getparam(int4, 1306);
                int8 = struct_getparam(int4, 1307);
                int9 = comp(1345, 165);
                int10 = 88146091;
                int11 = 88146092;
                int13 = 88146089;
                int12 = 88146090;
                break;
            }
            case 7: {
                int7 = struct_getparam(int4, 1308);
                int8 = struct_getparam(int4, 1309);
                int9 = comp(1345, 173);
                int10 = 88146099;
                int11 = 88146100;
                int13 = 88146097;
                int12 = 88146098;
                break;
            }
            case 8: {
                int7 = struct_getparam(int4, 1310);
                int8 = struct_getparam(int4, 1311);
                int9 = comp(1345, 181);
                int10 = 88146107;
                int11 = 88146108;
                int13 = 88146105;
                int12 = 88146106;
                break;
            }
            case 9: {
                int7 = struct_getparam(int4, 1312);
                int8 = struct_getparam(int4, 1313);
                int9 = comp(1345, 189);
                int10 = 88146115;
                int11 = 88146116;
                int13 = 88146113;
                int12 = 88146114;
                break;
            }
            case 10: {
                int7 = struct_getparam(int4, 2227);
                int8 = struct_getparam(int4, 2228);
                int9 = comp(1345, 197);
                int10 = 88146123;
                int11 = 88146124;
                int13 = 88146121;
                int12 = 88146122;
                break;
            }
            case 11: {
                int7 = struct_getparam(int4, 2229);
                int8 = struct_getparam(int4, 2230);
                int9 = comp(1345, 205);
                int10 = 88146131;
                int11 = 88146132;
                int13 = 88146129;
                int12 = 88146130;
                break;
            }
        };
        int14 = (1 + int14);
        if ((int7 == 0)) {
            int15 = 1;
        } else {
            script6758(int3, int14, int7, int8, int9, int10, int11, int13, int12);
        };
    };
    IF_SETSIZE(400, (115 + (23 * int14)), 0, 0, comp(1345, 106));
    return;
}