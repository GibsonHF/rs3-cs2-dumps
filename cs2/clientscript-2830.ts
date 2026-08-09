//
function script2830(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): void {
    if ((int3 == -1)) {
        return;
    };
    switch (struct_getparam(int3, 7513)) {
        case 1: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 17514, struct_getparam(int3, 7518));
            break;
        }
        case 2: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 2100, struct_getparam(int3, 7518));
            break;
        }
        case 3: {
            if ((struct_getparam(int3, 7524) == true)) {
                var int10 = (1 - MIN(int10, 1));
            };
            script7961(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, callback(script4486), script12585(int11), 1, script734(int10));
            CC_SETOP(1, "Toggle");
            CC_SETONOP(callback(script5590, -2147483645, -2147483643, int10));
            break;
        }
        case 4:
        case 5: {
            script8020(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, 4487);
            CC_SETONTIMER(callback(script5181, -2147483645, -2147483643, int3, int11, int10));
            CC_SETONDROPDOWNSELECT(callback(script5591, -2147483645, -2147483643, -2147483647, -2147483646));
            break;
        }
        case 6: {
            script2912(int0, int1, int2, 40049, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, int11);
            break;
        }
        case 7: {
            script2912(int0, int1, int2, 41496, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, int11);
            break;
        }
        case 8: {
            script2913(int0, int1, int2, 40050, struct_getparam(int3, 7519), struct_getparam(int3, 7520), int10, int4, int5, int6, int7, int8, int9, script5178(int3), int11);
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
            script7857(int1, int8, int9, int4, int5, 0, 0, int6, int7, 0, 0, 4476, struct_getparam(int3, 7518));
            CC_SETOP(1, "Select");
            CC_SETENABLED(script12585(int11));
            break;
        }
        case 1000: {
            script2831(int1, 23920665, 23920669, 23920661, int9, int10, int4, int5, int6, int7);
            break;
        }
        case 1001: {
            script2831(int1, 23920671, 23920675, 23920662, int9, int10, int4, int5, int6, int7);
            break;
        }
        case 1002: {
            script2831(int1, 23920677, 23920681, 23920663, int9, int10, int4, int5, int6, int7);
            break;
        }
        case 11: {
            script2995(int0, IF_GETNEXTSUBID(int0), int4, int5, 0, 0, int6, int7, 0, 0, 2196, struct_getparam(int3, 5390));
            break;
        }
    };
    return;
}