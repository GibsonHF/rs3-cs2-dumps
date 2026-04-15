//
function script17520(int0: int): npc {
    var int1 = script17518(int0);
    if ((script17495("necro_ritual_component_id_to_component_npc_get", int1) == 1)) {
        return -1 as npc;
    };
    return dbrow_getfield(int1, 966673, 0);
}