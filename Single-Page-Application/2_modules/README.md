# Einführung: Module für kleinere dateien

Man sagt: "Gute Autoren teilen ihre Bücher in Kapitel, gute Programmierer teilen ihre programme in Module."

Denn genau wie Buchkapitel, sind module ansammlungen von zusammenhängenden inhalten, egal ob text oder code.

Gute Module sind in sich geschlossen und verfügen über unterschiedliche Funktionen, sodass sie nach Bedarf gemischt, entfernt oder hinzugefügt werden können, ohne das unser programm selbst davon beeinträchtigt wird. So kann unser program dynamisch wachsen, und verbessert werden.

**und was genau sind jetzt module?**
Eigentlich sind Module nur JavaScript dateien, die ihren inhalt exportieren, damit er an anderer stelle importiert und benutzt werden kann.

**Warum nutzen wir module**

Module zu nutzen gibt uns viele vorteile, zum beispiel:
1. **Wartung:** Da module in sich selbst verschlossen sind, also alle funktionen, und informationen des moduls zusammenliegen und getrennt vom rest der applikation sind, kann man sie sehr einfach updaten, egal ob man fehler behebt, sie erweitert oder sonst wie ändert, es wird den rest des codes nicht beeinflussen.
2. **Namespaces:** In JavaScript sind Variablen außerhalb des bereiches einer Funktion der obersten ebene global, das bedeutet jeder kann darauf zugreifen. Aus diesem grund kommt es oft zu dem problem, das code der komplett unabhängig voneinander die selben globalen variablen nutzt und viele verschiedene sektionen des codes miteinander verwoben sind. Module nutzen nur die Variablen, die zu ihnen gehören.

3. **Wiederverwendbarkeit:** Genau wie wir schon öfter teile von code kopiert haben, können wir ganze module auch kopieren und übernehmen, als beispiel der farbgenerator, den wir letzlich schrieben, da wir ihn noch einmal brauchten, haben wir ihn uns einfach noch mal geschnappt. Immer dann wenn wir code wiederverwenden können, sollten wir dies auch tun. Module machen es uns einfach, weil sie in sich geschlossen, ohne weitere anforderungen in jedem projekt wiederverwendbar sind.

Alles in allem ist ein programm mit modulen nicht nur einfacher zu bearbeiten, es sieht auch sehr viel strukturierter, ordentlicher und professioneller aus.

# Module, eine übersicht
    - Brief overview of IIFE and the Module pattern
    - Advantages of scope isolation and encapsulation


# 1. "Imports and Exports:
Um mit modulen arbeiten zu können müssen wir uns erst einmal mit dem importieren und exportieren von dateien auseinandersetzen, wir schreiben ein kleines programm, in dem wir importieren und exportieren, und ich werde dabei erklären was wir machen.

(dateien in 1_import-export)

Wir erstellen uns ein paar dateien:
- index.html = unsere haupt html datei
- index.js = unsere haupt javascript datei, zum ausführen unseres codes
- app.js = eine datei in der wir eine klasse erstellen
- utils.js = eine datei mit hilfefunktionen
- user.js = eine datei für ein paar test variablen

(In der index.html der anleitung folgen)

als nächstes wechseln wir in unsere app.js

jetzt wechseln wir in unsere index.js

jetzt wechseln wir zu unserer utils.js datei und fügen ein paar hilfefunktionen hinzu.

jetzt wechseln wir in unsere app.js

jetzt wechseln wir wieder in unsere index.js

zu guter letzt gehen wir mal in unsere user.js

und wechseln wieder in die index.js
