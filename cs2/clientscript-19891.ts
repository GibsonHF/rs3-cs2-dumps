//
function script19891(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string, string1: string, string2: string): void {
    if ((int9 > 0)) {
        script13989(int3, 28554, script653(int1, 1), int7, -1, 0);
    } else {
        script13989(int3, 28553, script653(int1, 1), int7, -1, 0);
    };
    if (((STRING_LENGTH(string0) > 0) && (CC_FIND(int3, script653(int1, 2)) == 1))) {
        CC_SETTEXT(string0);
    };
    var int11 = struct_getparam(int2, 1446);
    if (((struct_getparam(int0, 4153) == 0) && (CC_FIND(int3, script653(int1, 3)) == 1))) {
        CC_SETTEXT(script3930(script12658(int0, int2, int5, int6, int11, 1), 60, 5, 26));
    };
    if ((CC_FIND(int4, int1) == 1)) {
        if ((int7 == 0)) {
            if ((struct_getparam(int0, 9050) == 1)) {
                CC_SETOP(1, struct_getparam(int0, 9051));
                if ((int2 != -1)) {
                    CC_SETONOP(callback(script1365, int2));
                };
            } else {
                CC_SETOP(1, script12793(int2, struct_getparam(int2, 4854), int11));
            };
            if ((((struct_getparam(int2, 4855) != -1) || (struct_getparam(int2, 4856) != -1)) || (struct_getparam(int2, 4857) != -1))) {
                if ((script6431() == 1)) {
                    var string1 = "There are more buy options if you tap and hold.";
                } else {
                    string1 = "There are more buy options if you right-click.";
                };
                if ((struct_getparam(int2, 4855) != -1)) {
                    CC_SETOP(2, script12793(int2, struct_getparam(int2, 4855), 0));
                };
                if ((struct_getparam(int2, 4856) != -1)) {
                    CC_SETOP(3, script12793(int2, struct_getparam(int2, 4856), 0));
                    if ((int11 == 0)) {
                        CC_SETOP(4, script12793(int2, -1, 1));
                    };
                };
                if ((struct_getparam(int2, 4857) != -1)) {
                    CC_SETOP(4, script12793(int2, struct_getparam(int2, 4857), 0));
                    if ((int11 == 0)) {
                        CC_SETOP(5, script12793(int2, -1, 1));
                    };
                };
            };
        } else {
            CC_CLEAROPS();
        };
        if ((script6431() == 1)) {
            if ((int7 == 1)) {
                if ((STRING_LENGTH(string1) > 0)) {
                    CC_SETONCLICK(callback(script7774, string1, -2147483645, -2147483643, int10));
                } else {
                    CC_SETONCLICK(callback());
                };
            } else {
                CC_SETONCLICK(callback());
            };
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    };
    return;
}