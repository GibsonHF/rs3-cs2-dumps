//
function script16527(): void {
    var int0 = 0;
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = -1 as dbrow;
    var int4 = -1 as dbrow;
    var int5 = 22607;
    var int6 = struct_getparam(int5, 8006);
    var int7 = struct_getparam(int5, 8007);
    var int8 = struct_getparam(int5, 8008);
    var int9 = struct_getparam(int5, 8009);
    var int10 = struct_getparam(int5, 8010);
    var int11 = struct_getparam(int5, 8011);
    var int12 = struct_getparam(int5, 8012);
    var int13 = struct_getparam(int5, 8013);
    var int14 = struct_getparam(int5, 8014);
    var int15 = struct_getparam(int5, 8015);
    var string0 = "";
    while ((++int0 <= 6)) {
        int3 = script16520(int0);
        int2 = dbrow_getfield(int3, 720912, 0);
        int1 = script16512(int0);
        int4 = enum_getvalue(0, 74, 10599 as cs2enum, int1);
        if ((script16511(int0) == 0)) {
            IF_SETOP(1, "Smash", int2);
            script447(int2, int4);
            IF_SETMODEL(dbrow_getfield(int4, 503872, 0), int2);
            IF_SETMODELANIM(-1 as seq, int2);
            IF_SETONTIMER(callback(script16528, int2, (200 + RANDOM(200)), 1), int2);
            IF_SETONMOUSEOVER(callback(script16529, int2), int2);
            IF_SETONMOUSELEAVE(callback(script16530, int2, -1), int2);
            if (((script13749() == 0) && (int1 > 0))) {
                string0 = `${script18341(int1)}${script18840(int1)}</col>`;
                IF_SETONMOUSEREPEAT(callback(script12111, string0, int2, -1), int2);
            };
        } else {
            IF_CLEAROPS(int2);
            IF_SETMODEL(dbrow_getfield(int4, 503920, 0), int2);
            IF_SETMODELANIM(-1 as seq, int2);
            IF_SETONTIMER(callback(), int2);
            IF_SETONMOUSEOVER(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
            IF_SETONMOUSEREPEAT(callback(), int2);
        };
        IF_SETMODELLIGHTING(int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int2);
    };
    script16531();
    script16532();
    return;
}