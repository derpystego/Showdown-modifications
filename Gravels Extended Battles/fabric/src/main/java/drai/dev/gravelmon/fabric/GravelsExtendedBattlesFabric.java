package drai.dev.gravelmon.fabric;

import drai.dev.gravelmon.*;
import eu.midnightdust.lib.config.*;
import net.fabricmc.api.*;
import net.fabricmc.loader.api.*;

import java.io.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FabricLoader.getInstance().getGameDir().toString()+"\\showdown\\data\\mods\\cobblemon\\";
    @Override
    public void onInitialize() {
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        GravelsExtendedBattles.init();
        MidnightConfig.init("gravelmon", GravelmonFabricConfig.class);
        GravelsExtendedBattles.bannedLabels = GravelmonFabricConfig.bannedLabels.toArray(new String[0]);
    }

    static public String exportResource(String minecraftFolder,String resourceName) throws Exception {
        InputStream stream = null;
        OutputStream resStreamOut = null;
        String jarFolder;
        try {
            stream = GravelsExtendedBattlesFabric.class.getResourceAsStream(resourceName);//note that each / is a directory down in the "jar tree" been the jar the root of the tree
            if(stream == null) {
                throw new Exception("Cannot get resource \"" + resourceName + "\" from Jar file.");
            }

            int readBytes;
            byte[] buffer = new byte[4096];
            jarFolder = minecraftFolder +resourceName;
            //jarFolder = "C:\\Users\\Stijn\\Desktop\\test\\"+resourceName;
            resStreamOut = new FileOutputStream(jarFolder);
            while ((readBytes = stream.read(buffer)) > 0) {
                resStreamOut.write(buffer, 0, readBytes);
            }
        } catch (Exception ex) {
            throw ex;
        } finally {
            stream.close();
            resStreamOut.close();
        }

        return jarFolder + resourceName;
    }
}
