//
function script11457(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): [number, number] {
    if (((int0 == -1) && (int1 == comp(-1, 65535)))) {
        return [int4, int5];
    };
    var int10 = 0;
    var int11 = 0;
    if ((int1 != comp(-1, 65535))) {
        if (((int4 + 39) > IF_GETWIDTH(int1))) {
            var int4 = 0;
            var int5 = (int5 + 39);
        };
        CC_CREATE(int1, 5, int7);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        if ((int2 != -1 as obj)) {
            if (((OC_MEMBERS(int2) == 1) && (MAP_MEMBERS() == 0))) {
                int10 = 1;
            };
            CC_SETOPBASE(`<col=FF981F>${OC_NAME(int2)}`);
            if (((int9 == 1) || (int9 == 3))) {
                if ((int1 == comp(1626, 63))) {  // death:autosave_click
                    CC_SETOP(1, "Examine");
                } else {
                    CC_SETOP(1, "Examine");
                };
            } else {
                switch (int1) {
                    case 106561546: {
                        CC_SETOP(1, "Examine");
                        break;
                    }
                    case 106561592: {
                        CC_SETOP(1, "Examine");
                        break;
                    }
                    case 106561540: {
                        CC_SETOP(1, "Examine");
                        break;
                    }
                    case 106561632: {
                        CC_SETOP(1, "Examine");
                        break;
                    }
                    case 106561599: {
                        CC_SETOP(1, "Examine");
                        break;
                    }
                    case 106561615: {
                        CC_SETOP(1, "Select");
                        CC_SETOP(3, "Examine");
                        CC_SETONOP(callback(script17086, -2147483643, -2147483644));
                        break;
                    }
                };
            };
            CC_SETOBJECT(int2, int3);
            CC_SETONMOUSEREPEAT(callback(script11465, -2147483645, -2147483643, int2, int6, int8, int9));
            CC_SETONMOUSELEAVE(callback(script11471, -2147483645, -2147483643));
            CC_SETOUTLINE(1);
        };
    };
    int4 = (int4 + 39);
    return [int4, int5];
}