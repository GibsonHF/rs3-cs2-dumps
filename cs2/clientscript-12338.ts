//
function script12338(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    if (((((((int5 == -1) || (int0 == comp(-1, 65535))) || (int1 == -1)) || (int2 == -1)) || (int3 == -1)) || (int4 == -1))) {
        return;
    };
    var string0 = "";
    if ((int6 != comp(-1, 65535))) {
        IF_SETSIZE(493, 393, 0, 0, int6);
        if (((int7 != comp(-1, 65535)) && (IF_FIND(int7) == 1))) {
            string0 = "Click here to visit the RuneMetrics webpage";
            switch (MAP_LANG()) {
                case 1: {
                    CC_SETGRAPHIC(9043 as graphic);
                    break;
                }
                case 2: {
                    CC_SETGRAPHIC(9044 as graphic);
                    break;
                }
                case 3: {
                    CC_SETGRAPHIC(9045 as graphic);
                    break;
                }
                default: {
                    CC_SETGRAPHIC(9042 as graphic);
                    break;
                }
            };
            if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
                CC_SETOP(1, "Open link");
                CC_SETONOP(callback(script3928, -2147483645, -2147483643));
            };
        };
        if ((int8 != comp(-1, 65535))) {
            CC_DELETEALL(int8);
            script1147(int8);
        };
    };
    script12340(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9);
    IF_SETONVARTRANSMIT(callback(script12339, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, 5091, 6153, 6154, 6155, 4), int0);
    return;
}