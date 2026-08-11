//
function script13452(): void {
    IF_SETOP(1, "Open Imperial faction tab", comp(1875, 12));  // repmodal:circular_bar_layer_imperial
    IF_SETONOP(callback(script13469, 2), comp(1875, 12));  // repmodal:circular_bar_layer_imperial
    IF_SETOP(1, "Open Ports faction tab", comp(1875, 14));  // repmodal:circular_bar_layer_ports
    IF_SETONOP(callback(script13469, 3), comp(1875, 14));  // repmodal:circular_bar_layer_ports
    IF_SETOP(1, "Open Merchant faction tab", comp(1875, 19));  // repmodal:circular_bar_layer_merchant
    IF_SETONOP(callback(script13469, 4), comp(1875, 19));  // repmodal:circular_bar_layer_merchant
    IF_SETOP(1, "Open Worker faction tab", comp(1875, 17));  // repmodal:circular_bar_layer_worker
    IF_SETONOP(callback(script13469, 5), comp(1875, 17));  // repmodal:circular_bar_layer_worker
    return;
}