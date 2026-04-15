//[proc,inventory_setophelds]
function script2833(int0: obj, int1: unknown_int, int2: int, int3: int): void {
    if ((int1 == 1)) {
        CC_SETOPBASE(`${script4033(int0)}${OC_NAME(int0)}`);
    };
    if (((int1 == 0) && (item_getparam(int0, 3921) == 1))) {
        CC_SETTARGETVERB(item_getparam(int0, 5410));
        CC_SETTARGETOPCURSOR(item_getparam(int0, 5411));
        CC_SETONTARGETENTER(callback(script7006, -2147483645));
        stack(7007);
        stack(-2147483645);
        stack("i");
        CC_SETONTARGETLEAVE();
        stack(int0);
        stack(5411);
        item_getparam();
        stack(int0);
        stack(5412);
        item_getparam();
        CC_SETTARGETCURSORS(stack());
    };
    cc_setparam(7540, 0);
    cc_setparam(7541, int0);
    cc_setparam(7542, int2);
    cc_setparam(7543, 93);
    switch (int0) {
        case 39786:
        case 39788:
        case 39790:
        case 39792:
        case 6099:
        case 6100:
        case 6101:
        case 6102: {
            script2411(int0, int1);
            return;
        }
        case 39784: {
            script12891(int0, int1);
            return;
        }
        case 13561:
        case 19760:
        case 13562: {
            script6468(int0, int1);
            return;
        }
        case 5509: {
            script5862(5509 as obj, int1);
            return;
        }
        case 5510:
        case 5511: {
            script5862(5510 as obj, int1);
            return;
        }
        case 5512:
        case 5513: {
            script5862(5512 as obj, int1);
            return;
        }
        case 5514:
        case 5515: {
            script5862(5514 as obj, int1);
            return;
        }
        case 58451: {
            script5862(58451 as obj, int1);
            return;
        }
        case 24200:
        case 24203:
        case 24199:
        case 24202: {
            script6468(int0, int1);
            return;
        }
        case 19867:
        case 19865:
        case 19868:
        case 19866: {
            script6468(int0, int1);
            return;
        }
        case 24205: {
            script6186(int0, int1);
            return;
        }
        case 31091:
        case 31089:
        case 31101:
        case 31099:
        case 31095:
        case 31097:
        case 31093:
        case 27624:
        case 27620:
        case 27618:
        case 27616:
        case 27622:
        case 28686:
        case 28690:
        case 28692:
        case 28694:
        case 28688:
        case 29970:
        case 35277:
        case 35279:
        case 35281:
        case 35283:
        case 35285:
        case 35287:
        case 35289: {
            script6468(int0, int1);
            return;
        }
        case 27996: {
            script6468(int0, int1);
            return;
        }
        case 20709: {
            script6468(int0, int1);
            return;
        }
        case 21581:
        case 28575: {
            script7031(int0, int1);
            return;
        }
        case 41808: {
            script3866(int0, int1);
            return;
        }
        case 42679: {
            script1667(int0, int1);
            return;
        }
        case 42682: {
            script2383(int0, int1);
            return;
        }
        case 44155: {
            script1520(int0, int1);
            return;
        }
        case 19040:
        case 19042: {
            script997(int0, int1, int2);
            return;
        }
        case 51309: {
            script15591(int0, int1);
            return;
        }
        case 51275:
        case 51276: {
            script8888(int0, int1);
            return;
        }
        case 35:
        case 14632:
        case 36619:
        case 36620: {
            script18401(int0, int1, int3);
            return;
        }
    };
    if ((item_getparam(int0, 6799) == 1)) {
        script12405(int0, int1);
        return;
    };
    if ((item_getparam(int0, 4840) == 1)) {
        script6468(int0, int1);
        return;
    };
    switch (OC_CATEGORY(int0)) {
        case 3464: {
            script6468(int0, int1);
            return;
        }
        case 4040:
        case 4355:
        case 5248:
        case 5363:
        case 5096: {
            script12405(int0, int1);
            return;
        }
        case 1825: {
            script13505(int0, int1, int2);
            return;
        }
        case 4568: {
            script16473(int0, int1, int3);
            return;
        }
    };
    if ((int1 == 1)) {
        if (((OC_UNCERT(int0) != int0) && (varbitplayer_3617 == 1))) {
            stack("Read");
            stack(50);
            stack(OC_IOP(int0, 2));
            OC_ICURSOR(int0, 2);
            stack(OC_IOP(int0, 3));
            OC_ICURSOR(int0, 3);
            stack(OC_IOP(int0, 4));
            OC_ICURSOR(int0, 4);
            stack(OC_IOP(int0, 5));
            OC_ICURSOR(int0, 5);
            stack(int0);
            stack(5410);
            item_getparam();
            stack(int0);
            stack(5411);
            item_getparam();
            stack(int0);
            stack(5412);
            item_getparam();
            script2410(stack(), OC_NAME(int0), int1);
            return;
        };
        CC_SETONVARTRANSMIT(callback());
    };
    var string0 = OC_IOP(int0, 1);
    var string1 = OC_IOP(int0, 2);
    var string2 = OC_IOP(int0, 3);
    var string3 = OC_IOP(int0, 4);
    var string4 = OC_IOP(int0, 5);
    var string5 = item_getparam(int0, 5410);
    OC_ICURSOR(int0, 1);
    var int4 = stack();
    OC_ICURSOR(int0, 2);
    var int5 = stack();
    OC_ICURSOR(int0, 3);
    var int6 = stack();
    OC_ICURSOR(int0, 4);
    var int7 = stack();
    OC_ICURSOR(int0, 5);
    var int8 = stack();
    stack(int0);
    stack(5411);
    item_getparam();
    var int9 = stack();
    stack(int0);
    stack(5412);
    item_getparam();
    var int10 = stack();
    script2410(string0, int4, string1, int5, string2, int6, string3, int7, string4, int8, string5, int9, int10, OC_NAME(int0), int1);
    return;
}