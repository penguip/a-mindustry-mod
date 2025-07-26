Planets.tantros.accessible = Planets.tantros.alwaysUnlocked = Planets.tantros.visible = true
Planets.tantros.localizedName = "Tantros"
Planets.tantros.sectors = 4

Events.run(ClientLoadEvent, () => {
  // Definition of methods
  let moddedItem = contentName => Vars.content.item(contentName); //Modded item
  let moddedLiquid = contentName => Vars.content.liquid(contentName); //Modded Liquid
  let moddedPlanet = contentName => Vars.content.planet(contentName); //Modded Planet
//contentChild is teh thing your adding to the tech tree
//contentParent is the thing the ContentChild will branch off of
//index is complicated. But if contentParent is a liquid, use -1. if it's a modded item, use 0. If it's null, it defaults to 0.
//planet: if ContentParent is a vanilla item, use your planet here. otherwise, you can leave it blank 
  function addNode(contentChild, contentParent, index, planet) {
    if(contentChild == null || contentParent == null) return;
    if(index == null) index = 0;
    if(index < 0) index = contentParent.techNodes.size + index; // Index of last technode

    contentParent.techNodes.get(index).children.add(
      TechTree.nodeProduce(contentChild, () => {}),
    );
    // If the content you are branching off of also appears on other planets but you only want it to appear on a certain planet, then use planet parameter
    if (planet == null) {
      contentChild.shownPlanets.addAll(contentParent.shownPlanets);
      contentChild.databaseTabs.addAll(contentParent.databaseTabs);
    } else {
      contentChild.shownPlanets.add(planet);
      contentChild.databaseTabs.add(planet);
    };
  };

  // Application of methods
  let exerio = moddedPlanet("daf-exerio");
>   addNode(Items.silicon, moddedItem("daf-gadolinium")); //Water will branch off of the item, if you want an item, like sand, use Items.sand
});
