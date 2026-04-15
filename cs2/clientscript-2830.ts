//
function script2830(int0: component, int1: component, int2: component, int3: struct, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: boolean): void {
    if ((int3 == -1 as struct)) {
        return;
    };
    switch (struct_getparam(int3, 7513)) {
        case 1: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 17514 as dbrow, struct_getparam(int3, 7518));
            break;
        }
        case 2: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 2100 as dbrow, struct_getparam(int3, 7518));
            break;
        }
        case 3: {
            if ((struct_getparam(int3, 7524) == true)) {
                var int10 = (1 - MIN(int10, 1));
            };
            script7961(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, 4486 as dbrow, "", script12585(int11), 1, script734(int10));
            CC_SETOP(1, "Toggle");
            CC_SETONOP(callback(script5590, -2147483645, -2147483643, int10));
            break;
        }
        case 4:
        case 5: {
            script8020(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, 4487 as dbrow);
            CC_SETONTIMER(callback(script5181, -2147483645, -2147483643, int3, int11, int10));
            CC_SETONDROPDOWNSELECT(callback(script5591, -2147483645, -2147483643, -2147483647, -2147483646));
            break;
        }
        case 6: {
            script2912(int0, int1, int2, 40049 as struct, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, int11);
            break;
        }
        case 7: {
            script2912(int0, int1, int2, 41496 as struct, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, int11);
            break;
        }
        case 8: {
            script2913(int0, int1, int2, 40050 as struct, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, script5178(int3), int11);
            break;
        }
        case 9: {
            script10066(int0, IF_GETNEXTSUBID(int0), int6, int7, int4, int5, script18949(int3), 0);
            script10066(int0, IF_GETNEXTSUBID(int0), int6, int7, int4, int5, 16777215, 0, 0);
            IF_CREATECHILD(4, int8, int9, int1);
            CC_SETSIZE(int6, int7, 0, 0);
            CC_SETPOSITION(int4, int5, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script3069, int0, (IF_GETNEXTSUBID(int0) - 2), int3));
            break;
        }
        case 10: {
            script7857(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, 4476 as dbrow, struct_getparam(int3, 7518));
            CC_SETOP(1, "Select");
            CC_SETENABLED(script12585(int11));
            break;
        }
        case 1000: {
            script2831(int1, comp(365, 25), comp(365, 29), comp(365, 21), int9, int10, int4, int5, int6, int7);
            break;
        }
        case 1001: {
            script2831(int1, comp(365, 31), comp(365, 35), comp(365, 22), int9, int10, int4, int5, int6, int7);
            break;
        }
        case 1002: {
            script2831(int1, comp(365, 37), comp(365, 41), comp(365, 23), int9, int10, int4, int5, int6, int7);
            break;
        }
        case 11: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 2196 as dbrow, struct_getparam(int3, 5390));
            break;
        }
    };
    return;
}