//
function script15489(int0: struct): [obj, int, obj, int, obj, int, obj, int, obj, int, obj, int, obj, int] {
    var int1 = struct_getparam(int0, 8202);
    if ((int1 == 0)) {
        script12478("trh_get_bonus_prize_obj_data called with a promo which doesn't have a trh_promo_id param set.");
        return [-1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0];
    };
    if ((int1 != varbitplayer_20967)) {
        script12478(`trh_get_bonus_prize_obj_data called on an old promo. We're promo ${inttostring(int1, 10)}, but we're looking at promo ${inttostring(varbitplayer_20967, 10)}'s variables.`);
        return [-1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0, -1 as obj, 0];
    };
    return [varplayer_9727, varplayer_9734, varplayer_9728, varplayer_9735, varplayer_9729, varplayer_9736, varplayer_9730, varplayer_9737, varplayer_9731, varplayer_9738, varplayer_9732, varplayer_9739, varplayer_9733, varplayer_9740];
}