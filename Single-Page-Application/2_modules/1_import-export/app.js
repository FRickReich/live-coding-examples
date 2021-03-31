// 5. wir importieren 2 funktionen aus der datei utils.js, mit einem sogenannten deconstructed import
import {
    // wir übernehmen den namen, wie wir ihn angegeben haben ...
    getTimesTwo,
    // oder nutzen auch hier wieder as, um den namen zu ändern
    getTimesFour as getFour
} from './utils.js'

// 1. Wir erstellen eine klasse
class App
{
    // 2. und fügen eine constructor hinzu, in der wir einen wert übergeben
    constructor(value)
    {
        this.value = value;
    }

    // 3. wir erstellen eine methode, um dessen inhalt wir uns später noch kümmern werden
    createNewValue()
    {
        // 6. wir erstellen einen return, und nutzen dabei die funktionen aus unserer utils.js datei
        return {
            timesTwo: getTimesTwo(this.value),
            timesFour: getFour(this.value)
        }
    }
}

// 4. um diese klasse jetzt in unserem code verwenden zu können, müssen wir sie exportieren, 
// wir nutzen dazu den sogenannten "default export", was bedeutet das wir ein einzelnes element exportieren, das unser DEFAULT aus der datei ist.
export default App;
