
/*        Async/Await

        Seit EcmaScript7 steht uns ein neuer weg für asyncrones verhalten in javascript zu verfügung, der dasdas arbeiten mit promises einfacher macht.

        Die schlüsselwörter Async und Await, mit denen wir asynchrone funktionen erstellen können, die eine promise zurück geben.

        Bisher, mussten wir für eine promise, ein promise objekt erstellen, indem wir zum beispiel new Promise(() => {}); schrieben, oder Promise.resolve();

        Anstelle jetzt das das Promise objekt zu nutzen, können wir einfach ansychrone funktionen schreiben, und somit keine promise mehr selber schreiben müssen.

        (Aus Promise.resolve("Hello world!")); 
        
        wird 

        async function greet()
        {
            return "Hello world!"
        }

        Die wahre macht in der asynchronen funktion lieg im await keyword. Mit dem await keyword können wir asynchrone funktionen pausieren, während wir auf den erwartete Promise warten. Wenn wir den ausgabewert haben wollen, wie wir es vorher mit der .then(); methode machten, können wir jetzt direkt variablen zuweisen.

*/
        const einePromise = () => Promise.resolve('Promise');

        async function testFunktion()
        {
            console.log("in der funktion");

            const res = await einePromise();

            console.log(res);
        }

        console.log("vorher");
        testFunktion();
        console.log("nachher");

        /*
        Was passiert hier?



        Zunächst trifft die Engine auf ein console.log. Es wird auf den Aufrufstapel gelegt, woraufhin die Before-Funktion! wird protokolliert.
        Dann rufen wir die asynchrone Funktion myFunc () auf, wonach der Funktionskörper von myFunc ausgeführt wird. In der allerersten Zeile des Funktionskörpers rufen wir eine andere console.log auf, diesmal mit der Zeichenfolge In function!. Das console.log wird dem Aufrufstapel hinzugefügt, protokolliert den Wert und wird gelöscht.

        Der Funktionskörper wird weiterhin ausgeführt, wodurch wir zur zweiten Zeile gelangen. Endlich sehen wir ein Schlüsselwort zum Warten! 🎉
Das erste, was passiert, ist, dass der erwartete Wert ausgeführt wird: in diesem Fall die Funktion eins. Es wird auf den Aufrufstapel gelegt und gibt schließlich ein gelöstes Versprechen zurück. Sobald das Versprechen aufgelöst wurde und ein Wert zurückgegeben wurde, trifft die Engine auf das Schlüsselwort await.
Wenn Sie auf ein Schlüsselwort "wait" stoßen, wird die asynchrone Funktion angehalten. ✋🏼 Die Ausführung des Funktionskörpers wird angehalten und der Rest der asynchronen Funktion wird in einer Mikrotask anstelle einer regulären Aufgabe ausgeführt!

Der Funktionskörper wird weiterhin ausgeführt, wodurch wir zur zweiten Zeile gelangen. Endlich sehen wir ein Schlüsselwort zum Warten! 🎉
Das erste, was passiert, ist, dass der erwartete Wert ausgeführt wird: in diesem Fall die Funktion eins. Es wird auf den Aufrufstapel gelegt und gibt schließlich ein gelöstes Versprechen zurück. Sobald das Versprechen aufgelöst wurde und ein Wert zurückgegeben wurde, trifft die Engine auf das Schlüsselwort await.
Nachdem die asynchrone Funktion myFunc angehalten wurde, als sie auf das Schlüsselwort await stieß, springt die Engine aus der asynchronen Funktion heraus und führt den Code in dem Ausführungskontext weiter aus, in dem die asynchrone Funktion aufgerufen wurde: in diesem Fall der globale Ausführungskontext! 🏃🏽‍♀️

Schließlich müssen im globalen Ausführungskontext keine Aufgaben mehr ausgeführt werden! Die Ereignisschleife prüft, ob Mikrotasks in der Warteschlange stehen: und welche! Die asynchrone myFunc-Funktion wird nach dem Auflösen des Werts Eins in die Warteschlange gestellt. myFunc wird wieder auf den Aufrufstapel verschoben und läuft dort weiter, wo es zuvor aufgehört hat.
Die Variable res erhält schließlich ihren Wert, nämlich den Wert des aufgelösten Versprechens, das man zurückgegeben hat! Wir rufen console.log mit dem Wert res auf: the string One! in diesem Fall. Einer! wird an der Konsole angemeldet und vom Aufrufstapel gestrichen! 😊
Endlich alles erledigt! Haben Sie bemerkt, dass sich asynchrone Funktionen von einem Versprechen unterscheiden? Das Schlüsselwort await unterbricht die asynchrone Funktion, während der Promise-Body weiterhin ausgeführt worden wäre, wenn wir ihn dann verwendet hätten!
*/