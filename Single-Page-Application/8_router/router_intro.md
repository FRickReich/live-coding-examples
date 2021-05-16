# erklären was ein modul macht

Zu allererst wollte ich noch einmal mit euch über node module reden, ich wollte euch zeigen das es in react einen speziellen anwendungsfall gibt, da es sehr viele node module gibt, die react um funktionen oder komponenten erweitern, und eines davon wollte ich mir, als beispiel mal mit euch angucken.

# reactstrap
das modul das ich mir mit euch angucken will ist reactstrap, ein node modul, das uns bootstrap direkt in unsere react umgebung läd

===> https://reactstrap.github.io/

um reactstrap zu nutzen, installieren wir es einfach mit dem npm befehl, `npm i reactstrap`. wir sehen reactstrap jetzt in unserer package.json und können das modul ab sofort in unserer react app nutzen.

==> weiter in der app, ein bisschen mit reactstrap rumspielen.

# Was ist ein Router?

Wenn wir uns eine webseite angucken, sehen wir, wenn wir uns auf der seite bewegen oben verschiedene pfade.

===> beispiel https://www.heise.de/

wenn wir auf links klicken, sehen wir das sich der pfad ändert, und wir sehen wo wir auf der seite herumwandern, wenn wir einen link einfügen, der pfade beinhaltet, landen wir genau da, wo wir hin wollten: https://www.heise.de/newsticker/wirtschaft/

Jetzt könnte man denken, das ist eine einfache ordnerstruktur, im ordner newsticker ist ein ordner wirtschaft, und da ist eine html seite, die uns die informationen anzeigt, aber dem ist nicht so, in SPA's sind diese pfade virtuell, und es wird dynamisch auf diesen pfaden der gewünschte inhalt angezeigt.

In react helfen uns beim erstellen und navigieren zwischen diesen verschiedenen url pfaden sogenannte router. Router erlauben es uns zwischen komponenten zu bewegen, ohne die applikation neu zu laden, der router kann urls für jeden gewünschten teil der applikation anlegen und sogar dynamisch spezifizierte links wie zum beispiel webseite/user/käsesemmel123 auslesen und mit daten füllen.

Mit routern können wir den benutzern unserer app also eine möglichkeit bieten, auf unserer seite zu navigieren und zu interagieren, was die benuzererfahrung deutlich verbessert.

# React Router
Einer der bekanntesten frameworks um Router für react zu erstellen ist react-router, es wurde entwicklet um basierend auf komponenten ein einfaches routing zu erstellen, das intuitiv nutzbar und einfach erweiterbar ist.

https://www.npmjs.com/package/react-router

wir schauen uns react-router jetzt einmal an.

# react-router-dom installieren
um react router zu installierern schreiben wir `npm install react-router-dom`, und schauen dann mal in der package ob es da ist.

# react-router-dom einrichten
damit wir mit dem router arbeiten können, brauchen wir erst einmal ein paar komponenten, die wir als seite unter unseren pfaden anzeigen laden wollen.

# typischer ordername für seiten (Pages oder Containers)
Typischerweise landen diese komponenten nicht im ordner "Components" sondern "Views", "Pages" oder "Containers", aus produktion kenne ich hauptsächlich Containers, aber ich habe alle 3 schon gesehen. Nehmen wir mal "Pages", weil wir dann wissen, das es sich bei diesen komponenten um unterseiten unserer applikation handelt.

wir erstellen also einen ordner namens Pages, im src verzeichnis unserer app.

jetzt erstellen wir 3 komponenten:
- "Home" - für unserer startseite, diese wollen wir später einfach unter dem pfad "localhost:3000" erreichen, wie unsere app vorher auch.
- "Blog" - hier hätten wir ein blog, wenn unsere seite oder app so etwas anbieten würde.
- "Contacts" - Eine seite für kontaktinformationen

befüllen wir die komponenten mal ein wenig, damit wir später unterschiede sehen.

# routen erstellen, mit router und switch 

--> weiter in App.js






Dienstag:

Router advanced:
- history, was ist es, wo findet man mehr info
- exact und reihenfolge von switches
- 404

Router navigation:
- Using `<Link>` to navigate to a path
- Creating a Navigation bar with `<NavLink activeClassName=""[...]"">`
- Library clash: Using reactstrap `<NavLink>` with react-router `<NavLink>`
  https://github.com/reactstrap/reactstrap/issues/1285#issuecomment-446592497
- Redirecting components: `<Redirect>`"

Route Parameters:
- Creating dynamic route paths with route params: the `/:<param>` notation
- Route props: Accessing route params with the `match.params` prop"