//
function script9543(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void {
    IF_SETPARAM_INT(5928, int2, int6);
    IF_SETPARAM_INT(5929, int3, int6);
    IF_SETPARAM_INT(8054, script9544(IF_GETX(int6), IF_GETWIDTH(int6), IF_GETWIDTH(IF_GETPARENTLAYER(int6)), int2), int6);
    IF_SETPARAM_INT(8056, script9544(IF_GETY(int6), IF_GETHEIGHT(int6), IF_GETHEIGHT(IF_GETPARENTLAYER(int6)), int3), int6);
    IF_SETPARAM_INT(5926, int0, int6);
    IF_SETPARAM_INT(5927, int1, int6);
    IF_SETPARAM_INT(5829, int4, int6);
    IF_SETPARAM_INT(5830, int5, int6);
    IF_SETPARAM_INT(8058, -1, int6);
    return;
}