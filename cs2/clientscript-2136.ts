//
function script2136(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = ((118 + varbitplayer_14115) + varbitplayer_14115);
    CC_CREATE(int0, 4, 0);
    CC_SETSIZE(200, 32, 0, 0);
    CC_SETPOSITION(int1, 36, 0, 0);
    CC_SETTEXTFONT(68 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(3419664);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(enum_getvalue(0, 36, 2224 as cs2enum, varbitplayer_14116));
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 3419664));
    CC_SETOP(1, "Select");
    CC_CREATE(int0, 4, 1);
    CC_SETSIZE(200, 32, 0, 0);
    CC_SETPOSITION(int1, 70, 0, 0);
    CC_SETTEXTFONT(68);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(3419664);
    CC_SETTEXTSHADOW(0);
    CC_SETTEXT(enum_getvalue(0, 36, 2224, varbitplayer_14118));
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 3419664));
    CC_SETOP(1, "Select");
    CC_CREATE(int0, 4, 2);
    CC_SETSIZE(200, 32, 0, 0);
    CC_SETPOSITION(int1, 104, 0, 0);
    CC_SETTEXTFONT(68);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(3419664);
    CC_SETTEXTSHADOW(0);
    CC_SETTEXT(enum_getvalue(0, 36, 2224, varbitplayer_14120));
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 3419664));
    CC_SETOP(1, "Select");
    CC_CREATE[1](int0, 6, 3);
    CC_SETSIZE[1](226, 144, 0, 0);
    CC_SETPOSITION[1](0, 147, 1, 0);
    switch (varbitplayer_14117) {
        case 0: {
            CC_SETMODEL[1](enum_getvalue(0, 31, 2225 as cs2enum, varbitplayer_14122));
            break;
        }
        case 1: {
            CC_SETMODEL[1](enum_getvalue(0, 31, 2226 as cs2enum, varbitplayer_14122));
            break;
        }
        case 2: {
            CC_SETMODEL[1](enum_getvalue(0, 31, 2227 as cs2enum, varbitplayer_14122));
            break;
        }
        default: {
            CC_SETMODEL[1](enum_getvalue(0, 31, 2228 as cs2enum, varbitplayer_14122));
            break;
        }
    };
    var int2 = ((varbitplayer_14115 - 5) * 4);
    var int3 = ((varbitplayer_14119 - 4) * 4);
    CC_SETMODELANGLE[1](int2, int3, POW(varbitplayer_14121, 2), POW(varbitplayer_14121, 2), POW(varbitplayer_14121, 2), ((400 + varbitplayer_14123) + varbitplayer_14123));
    var int4 = varbitplayer_14115;
    var int5 = (varbitplayer_14119 / 2);
    var int6 = 0;
    switch (varbitplayer_14123) {
        case 0: {
            [int4, int5, int6] = [int5, int6, int4];
            break;
        }
        case 1: {
            [int4, int5, int6] = [int6, int4, int5];
            break;
        }
        case 2: {
            [int4, int5, int6] = [int4, int6, int5];
            break;
        }
    };
    CC_SETONTIMER[1](callback(script2137, int4, int5, int6, int2, int3, -2147483645, -2147483643));
    CC_CREATE(int0, 3, 4);
    CC_SETSIZE(226, 144, 0, 0);
    CC_SETPOSITION(0, 147, 1, 0);
    CC_SETCOLOUR(script693((varbitplayer_14121 + 95), (varbitplayer_14119 + 85), (varbitplayer_14115 + 29)));
    CC_SETFILL(1);
    CC_SETTRANS(0);
    CC_SETONTIMER(callback(script2138, -2147483645, -2147483643, 0));
    CC_CREATE(int0, 5, 5);
    CC_SETSIZE(19, 16, 0, 0);
    CC_SETPOSITION(349, (varbitplayer_14119 + 148), 0, 0);
    CC_SETHFLIP(1);
    CC_SETGRAPHIC(1538);
    CC_SETONMOUSEOVER(callback(script2140, -2147483645, -2147483643, 125));
    CC_SETONMOUSELEAVE(callback(script2140, -2147483645, -2147483643, 0));
    CC_SETOP(1, "Change spin");
    CC_SETONOP(callback(script2139, -2147483644, int0, CC_GETID[1](), int2, int3));
    return;
}