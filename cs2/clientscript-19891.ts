//
function script19891(int0: struct, int1: int, int2: struct, int3: component, int4: component, int5: int, int6: int, int7: unknown_int, int8: unknown_int, int9: int, int10: unknown_int, string0: string, string1: string, string2: string): void {
    if ((int9 > 0)) {
        script13989(int3, 28554 as struct, script653(int1, 1), int7, -1, 0);
    } else {
        script13989(int3, 28553 as struct, script653(int1, 1), int7, -1, 0);
    };
    if (((STRING_LENGTH(string0) > 0) && (CC_FIND(int3, script653(int1, 2)) == 1))) {
        CC_SETTEXT(string0);
    };
    if (((struct_getparam(int0, 4153) == 0) && (CC_FIND(int3, script653(int1, 3)) == 1))) {
        CC_SETTEXT(script12658(int0, int2, int5, int6, 0));
    };
    if ((CC_FIND(int4, int1) == 1)) {
        if ((int7 == 0)) {
            if ((struct_getparam(int0, 9050) == 1)) {
                CC_SETOP(1, struct_getparam(int0, 9051));
                if ((int2 != -1 as struct)) {
                    CC_SETONOP(callback(script1365, int2));
                };
            } else {
                CC_SETOP(1, script12793(int2, struct_getparam(int2, 4854), 0));
            };
            if ((((struct_getparam(int2, 4855) != -1) || (struct_getparam(int2, 4856) != -1)) || (struct_getparam(int2, 4857) != -1))) {
                if ((script6431() == true)) {
                    var string1 = "There are more buy options if you tap and hold.";
                } else {
                    string1 = "There are more buy options if you right-click.";
                };
                if ((struct_getparam(int2, 4855) != -1)) {
                    CC_SETOP(2, script12793(int2, struct_getparam(int2, 4855), 0));
                };
                if ((struct_getparam(int2, 4856) != -1)) {
                    CC_SETOP(3, script12793(int2, struct_getparam(int2, 4856), 0));
                    CC_SETOP(4, script12793(int2, -1, 1));
                };
                if ((struct_getparam(int2, 4857) != -1)) {
                    CC_SETOP(4, script12793(int2, struct_getparam(int2, 4857), 0));
                    CC_SETOP(5, script12793(int2, -1, 1));
                };
            };
        } else {
            CC_CLEAROPS();
        };
        if ((script6431() == true)) {
            if (((int7 == 1) && (STRING_LENGTH(string1) > 0))) {
                CC_SETONCLICK(callback(script7774, string1, -2147483645, -2147483643, int10));
            } else {
                CC_SETONCLICK(callback());
            };
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    };
    return;
}