//
function script9474(): [string, string, string] {
    if ((script9472() == 1)) {
        return ["What improvements to your faction's convoys would you like to see?", "Better bodyguard: One bodyguard in your faction's convoys will be exchanged for an upgraded version.", "Better diviner: One diviner in your faction's convoys will be exchanged for an upgraded version."];
    };
    if ((script9472() == 3)) {
        return ["What improvements to your faction's convoys would you like to see?", "Bigger caravan: One caravan unit in your faction's convoys will be exchanged for an upgraded version with 40% extra capacity.", "Tougher caravan: One caravan unit in your faction's convoys will be exchanged for an upgraded version with 50% extra life points."];
    };
    if ((script9472() == 5)) {
        return ["Which faction benefit would you like to see?", "Reduced frequency of Godless attacks: Your faction's convoys and buildings are 15% less likely to be ambushed by the Godless.", "Greater benefit from holding a majority of buildings: Passive benefits received from having buildings at a majority of sites are boosted by 10%."];
    };
    return ["", "", ""];
}