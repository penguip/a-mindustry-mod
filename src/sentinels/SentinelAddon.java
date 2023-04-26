package sentinels;

import mindustry.mod.*;
import sentinels.content.*;

public class SentinelAddon extends Mod{

    @Override

    public void loadContent(){
        SALiquids.load();
    }

}
