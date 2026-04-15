//
function script15832(): seq {
    var int0 = npc_getparam(item_getparam(varplayer_1831, 74), 5051);
    var int1 = enum_getvalue(73, 73, 7225 as cs2enum, int0);
    if ((script4157() == 5)) {
        switch (script3204(int0)) {
            case 1: {
                return BAS_GETANIM_READY(struct_getparam(enum_getvalue(32, 73, 9016 as cs2enum, struct_getparam(int1, 3148)), 4694));
            }
            case 2: {
                return BAS_GETANIM_READY(struct_getparam(enum_getvalue(32, 73, 9016 as cs2enum, struct_getparam(int1, 3150)), 4694));
            }
            case 3: {
                return BAS_GETANIM_READY(struct_getparam(enum_getvalue(32, 73, 9016 as cs2enum, struct_getparam(int1, 3152)), 4694));
            }
        };
    };
    if ((varbitplayer_6044 > 50)) {
        varbitplayer_6044 = (varbitplayer_6044 - 50);
        return enum_getvalue(0, 6, 1275 as cs2enum, varbitplayer_6044);
    };
    return enum_getvalue(0, 6, 1276 as cs2enum, varbitplayer_6044);
}