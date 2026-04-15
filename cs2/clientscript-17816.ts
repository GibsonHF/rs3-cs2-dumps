//
function script17816(int0: npc): obj {
    var int1 = npc_getparam(int0, 8945);
    if ((script17495("necro_ritual_component_npc_to_component_dummy_get", int1) == 1)) {
        return -1 as obj;
    };
    return dbrow_getfield(int1, 966704, 0);
}