//[proc,sidebook_build]
function script1439(int0: component, int1: component, int2: component): void {
    script13959(comp(838, 4), 37996 as struct, false);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    varclient_656 = MIN(varclient_656, (varclient_657 - 1));
    var int3 = 0;
    if (((((((((((((((((varclient_658 > 0) || (varclient_659 > 0)) || (varclient_660 > 0)) || (varclient_661 > 0)) || (varclient_662 > 0)) || (varclient_663 > 0)) || (varclient_664 > 0)) || (varclient_665 > 0)) || (varclient_666 > 0)) || (varclient_667 > 0)) || (varclient_668 > 0)) || (varclient_669 > 0)) || (varclient_670 > 0)) || (varclient_658 > 13)) || (varclient_672 > 0)) || (varclient_673 > 0))) {
        int3 = 1;
    };
    if (((int3 == 0) || (varclient_656 > 0))) {
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(2, 14, 1, 0);
        CC_SETPOSITION(0, 0, 1, 2);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        script11024(1);
        if ((int3 == 0)) {
            CC_SETTEXT(`${inttostring((varclient_656 + 1), 10)} / ${inttostring(varclient_657, 10)}`);
        } else {
            CC_SETTEXT(`${inttostring(varclient_656, 10)} / ${inttostring((varclient_657 - 1), 10)}`);
        };
    };
    if ((varclient_656 > 0)) {
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(2, 17, 1, 1);
        CC_SETPOSITION(0, 1, 1, 0);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        script11024(3);
        switch (varclient_656) {
            case 1: {
                CC_SETTEXT(varclient_2300);
                break;
            }
            case 2: {
                CC_SETTEXT(varclient_2301);
                break;
            }
            case 3: {
                CC_SETTEXT(varclient_2302);
                break;
            }
            case 4: {
                CC_SETTEXT(varclient_2303);
                break;
            }
            case 5: {
                CC_SETTEXT(varclient_2304);
                break;
            }
            case 6: {
                CC_SETTEXT(varclient_2305);
                break;
            }
            case 7: {
                CC_SETTEXT(varclient_2306);
                break;
            }
            case 8: {
                CC_SETTEXT(varclient_2307);
                break;
            }
            case 9: {
                CC_SETTEXT(varclient_2308);
                break;
            }
            case 10: {
                CC_SETTEXT(varclient_2309);
                break;
            }
            case 11: {
                CC_SETTEXT(varclient_2310);
                break;
            }
            case 12: {
                CC_SETTEXT(varclient_2311);
                break;
            }
            case 13: {
                CC_SETTEXT(varclient_2312);
                break;
            }
            case 14: {
                CC_SETTEXT(varclient_2313);
                break;
            }
            case 15: {
                CC_SETTEXT(varclient_2314);
                break;
            }
            case 16: {
                CC_SETTEXT(varclient_2315);
                break;
            }
            case 17: {
                CC_SETTEXT(varclient_2316);
                break;
            }
            case 18: {
                CC_SETTEXT(varclient_2317);
                break;
            }
            case 19: {
                CC_SETTEXT(varclient_2318);
                break;
            }
            case 20: {
                CC_SETTEXT(varclient_2319);
                break;
            }
            case 21: {
                CC_SETTEXT(varclient_2320);
                break;
            }
            case 22: {
                CC_SETTEXT(varclient_2321);
                break;
            }
            case 23: {
                CC_SETTEXT(varclient_2322);
                break;
            }
            case 24: {
                CC_SETTEXT(varclient_2323);
                break;
            }
            case 25: {
                CC_SETTEXT(varclient_2324);
                break;
            }
            case 26: {
                CC_SETTEXT(varclient_2325);
                break;
            }
            case 27: {
                CC_SETTEXT(varclient_2326);
                break;
            }
            case 28: {
                CC_SETTEXT(varclient_2327);
                break;
            }
            case 29: {
                CC_SETTEXT(varclient_2328);
                break;
            }
            case 30: {
                CC_SETTEXT(varclient_2329);
                break;
            }
            case 31: {
                CC_SETTEXT(varclient_2330);
                break;
            }
            case 32: {
                CC_SETTEXT(varclient_2331);
                break;
            }
            case 33: {
                CC_SETTEXT(varclient_2332);
                break;
            }
            case 34: {
                CC_SETTEXT(varclient_2333);
                break;
            }
            case 35: {
                CC_SETTEXT(varclient_2334);
                break;
            }
            case 36: {
                CC_SETTEXT(varclient_2335);
                break;
            }
            case 37: {
                CC_SETTEXT(varclient_2336);
                break;
            }
            case 38: {
                CC_SETTEXT(varclient_2337);
                break;
            }
            case 39: {
                CC_SETTEXT(varclient_2338);
                break;
            }
            case 40: {
                CC_SETTEXT(varclient_2339);
                break;
            }
            case 41: {
                CC_SETTEXT(varclient_2340);
                break;
            }
            case 42: {
                CC_SETTEXT(varclient_2341);
                break;
            }
            case 43: {
                CC_SETTEXT(varclient_2342);
                break;
            }
            case 44: {
                CC_SETTEXT(varclient_2343);
                break;
            }
            case 45: {
                CC_SETTEXT(varclient_2344);
                break;
            }
            case 46: {
                CC_SETTEXT(varclient_2345);
                break;
            }
            case 47: {
                CC_SETTEXT(varclient_2346);
                break;
            }
            case 48: {
                CC_SETTEXT(varclient_2347);
                break;
            }
            case 49: {
                CC_SETTEXT(varclient_2348);
                break;
            }
        };
        return;
    };
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    while ((int4 < 16)) {
        switch (int4) {
            case 0: {
                string0 = varclient_2284;
                int5 = varclient_658;
                break;
            }
            case 1: {
                string0 = varclient_2285;
                int5 = varclient_659;
                break;
            }
            case 2: {
                string0 = varclient_2286;
                int5 = varclient_660;
                break;
            }
            case 3: {
                string0 = varclient_2287;
                int5 = varclient_661;
                break;
            }
            case 4: {
                string0 = varclient_2288;
                int5 = varclient_662;
                break;
            }
            case 5: {
                string0 = varclient_2289;
                int5 = varclient_663;
                break;
            }
            case 6: {
                string0 = varclient_2290;
                int5 = varclient_664;
                break;
            }
            case 7: {
                string0 = varclient_2291;
                int5 = varclient_665;
                break;
            }
            case 8: {
                string0 = varclient_2292;
                int5 = varclient_666;
                break;
            }
            case 9: {
                string0 = varclient_2293;
                int5 = varclient_667;
                break;
            }
            case 10: {
                string0 = varclient_2294;
                int5 = varclient_668;
                break;
            }
            case 11: {
                string0 = varclient_2295;
                int5 = varclient_669;
                break;
            }
            case 12: {
                string0 = varclient_2296;
                int5 = varclient_670;
                break;
            }
            case 13: {
                string0 = varclient_2297;
                int5 = varclient_671;
                break;
            }
            case 14: {
                string0 = varclient_2298;
                int5 = varclient_672;
                break;
            }
            case 15: {
                string0 = varclient_2299;
                int5 = varclient_673;
                break;
            }
            default: {
                string0 = "";
                int5 = 0;
                break;
            }
        };
        if ((STRING_LENGTH(string0) > 0)) {
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            if ((int4 == (16 - 1))) {
                CC_SETSIZE(6, 17, 1, 0);
            } else {
                CC_SETSIZE(2, 12, 1, 0);
            };
            CC_SETPOSITION(0, ((int4 * 12) + 1), 1, 0);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXT(string0);
            if ((int5 > 0)) {
                CC_SETOP(1, "Go");
                CC_SETONOP(callback(script2065, -2147483644, int5, int0, int1, int2));
                script6711(3, 4);
            } else {
                script11024(1);
            };
        };
        int4 = (int4 + 1);
    };
    return;
}