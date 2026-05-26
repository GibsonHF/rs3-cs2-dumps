//
function script19018(int0: number, int1: number, int2: number): void {
    var int3 = enum_getvalue(0, 73, int2, int1);
    var string0 = struct_getparam(int3, 855);
    var int4 = struct_getparam(int3, 9111);
    var int5 = struct_getparam(int3, 856);
    if ((IF_FIND(122552330) == 1)) {
        if ((int4 != -1 as obj)) {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = `${OC_NAME(int4)} - ${item_getparam(int4, 4085)}`;
            };
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = `${OC_NAME(int4)} - ${OC_DESC(int4)}`;
            };
            CC_SETOBJECT_HIGHRES(int4);
        } else {
            CC_SETGRAPHIC(int5);
        };
    };
    IF_SETTEXT(string0, 122552329);
    varbitplayer_43520 = int1;
    switch (int0) {
        case 49941: {
            SOUND_VORBIS_VOLUME(56633, 1, 0, 150);
            break;
        }
        default: {
            SOUND_VORBIS_VOLUME(14378, 1, 0, 150);
            break;
        }
    };
    return;
}