//
function script6834(int0: unknown_int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    switch (int0) {
        case 49414177: {
            int2 = comp(754, 39);
            int4 = comp(754, 46);
            break;
        }
        case 49414193: {
            int2 = comp(754, 55);
            int4 = comp(754, 62);
            break;
        }
        case 49414209: {
            int2 = comp(754, 74);
            int3 = comp(754, 72);
            int4 = comp(754, 81);
            break;
        }
        case 49414328: {
            int2 = comp(754, 192);
            int4 = comp(754, 199);
            int6 = comp(754, 193);
            int5 = 49414334;
            int7 = comp(754, 189);
            break;
        }
        case 49414307: {
            int2 = comp(754, 174);
            int3 = comp(754, 172);
            int4 = comp(754, 181);
            int6 = comp(754, 175);
            int5 = 49414313;
            int7 = comp(754, 168);
            break;
        }
        case 49414346: {
            int2 = comp(754, 210);
            int4 = comp(754, 217);
            int6 = comp(754, 211);
            int5 = 49414352;
            int7 = comp(754, 207);
            break;
        }
        case 49414265: {
            int2 = comp(754, 132);
            int3 = comp(754, 130);
            int4 = comp(754, 139);
            int6 = comp(754, 133);
            int5 = 49414271;
            int7 = comp(754, 126);
            break;
        }
        case 49414286: {
            int2 = comp(754, 153);
            int3 = comp(754, 151);
            int4 = comp(754, 160);
            int6 = comp(754, 154);
            int5 = 49414292;
            int7 = comp(754, 147);
            break;
        }
        case 49414229: {
            int2 = comp(754, 92);
            int4 = comp(754, 100);
            int6 = comp(754, 94);
            int5 = 49414235;
            int7 = comp(754, 90);
            break;
        }
        case 49414247: {
            int2 = comp(754, 110);
            int4 = comp(754, 118);
            int6 = comp(754, 112);
            int5 = 49414253;
            int7 = comp(754, 108);
            break;
        }
        case 49414364: {
            int2 = comp(754, 228);
            int4 = comp(754, 235);
            int6 = comp(754, 229);
            int5 = 49414370;
            int7 = comp(754, 225);
            break;
        }
        case 49414382: {
            int2 = comp(754, 246);
            int4 = comp(754, 253);
            int6 = comp(754, 247);
            int5 = 49414388;
            int7 = comp(754, 243);
            break;
        }
        case 49414400: {
            int2 = comp(754, 264);
            int4 = comp(754, 271);
            int6 = comp(754, 265);
            int5 = 49414406;
            int7 = comp(754, 261);
            break;
        }
    };
    if ((int1 == 1)) {
        IF_SETCOLOUR(13249829, int2);
        if ((int3 != comp(-1, 65535))) {
            IF_SETCOLOUR(13249829, int3);
        };
    } else {
        IF_SETCOLOUR(16777215, int2);
        if ((int3 != comp(-1, 65535))) {
            IF_SETCOLOUR(16777215, int3);
        };
        if (((int7 != comp(-1, 65535)) && (int6 != comp(-1, 65535)))) {
            IF_SETHIDE(true, int6);
            IF_SETHIDE(false, int7);
        };
    };
    IF_SETHIDE(false, int4);
    return;
}