//
function script17521(int0: unknown_int): npc {
    var int1 = script17519(int0);
    if ((script17495("necro_ritual_broken_component_id_to_component_npc_get", int1) == 1)) {
        return -1 as npc;
    };
    return dbrow_getfield(int1, 966689, 0);
}