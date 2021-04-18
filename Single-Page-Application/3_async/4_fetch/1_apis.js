/* APIS
 Was ist eine api?
 Bevor wir uns mit fetch beschäftigen, reden wir erst einmal über API's, da die hauptaufgabe von fetch ist, daten aus apis zu lesen.

 Api steht für "Application programming interface", in deutsch auch als "Anwendungsschnittstelle" oder kurz "Schnittstelle" bekannt, stellt die verbindung von daten zwischen verschiedenen programmen da. In der web entwicklung werden APIS benutzt um daten von externen oder internen quellen zu bekommen.

 Meist werden diese daten in JSON an den entpunkt, also den pfad der api zurückgegeben, das wir mit JavaScript und anderen programmiersprachen auslesen können, woher die daten kommen, ist uns überlassen.

Es gibt verschiedene arten von API's:
- Offene API: auch bekannt als public-API, sind API schnittstellen dessen daten jedem, ohne einschränkung zur verfügung stehen.
- INTERNE API: auch bekannt als private-apis, sind API schnittstellen, die intern benutzt werden, und meist innerhalb eines unternehmens verwendet 
werden, um daten zwischen teams und produkten zu teilen.
- PARTNER API: können nur mit speziellen rechten oder lizenzen benutzt werden und sind nicht öffentlich verfügbar.
- GEMISCHTE API: Diese art der schnittstelle vermischt verschiedene daten und service apis und führt sie zusammen.

APIS kann man mit verschiedenen aufrufmethoden verwenden, die wir schon aus formulaten in HTML kennen.
- Get: fragt existierende daten von einem server ab.
- POST: fügt einem server neue daten hinzu.
- PUT: ändert existierende informationen ab.
- DELETE: Löscht vorhandene informationen.

Oft sind api routen so geordnet, das sie eine liste aller inhalte ausgibt, und eine ebene weiter einzelne inhalte ausgibt.
Eine liste mit produkten: https://api.predic8.de/shop/products/
Ein produkt: https://api.predic8.de/shop/products/62

Oft muss man apis mit hilfe von schlüsseln oder anderen login-daten validieren, um sie zu benutzen, wir schauen uns ein paar beispiele ohne authentifizierung an: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

hier noch eine liste mit einigen apis, gesichert wie auch ungesichert: https://github.com/public-apis/public-apis

*/