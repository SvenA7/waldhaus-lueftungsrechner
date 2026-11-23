# Waldhaus – Lüftungsrechner

Offlinefähige Web-App (PWA) zum Vergleich von Innen- und Außenluftfeuchte. Alle Berechnungen laufen lokal, ohne Datenübertragung.

## Veröffentlichung

1. Öffentliches GitHub-Repository `waldhaus-lueftungsrechner` erstellen.
2. Alle Dateien **und den Ordner `icons`** aus diesem Paket in das Stammverzeichnis hochladen, nicht die ZIP-Datei selbst.
3. Unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch**, Branch **main** und Ordner **/(root)** wählen und speichern.
4. Die Adresse `https://svena7.github.io/waldhaus-lueftungsrechner/` öffnen (Bereitstellung kann einige Minuten dauern).
5. Auf dem iPhone in Safari öffnen und über **Teilen → Zum Home-Bildschirm** installieren. Danach den Offlinebetrieb im Flugmodus testen.

## Hinweise

Bei Änderungen den Cache-Namen in `service-worker.js` erhöhen. Browser können gespeicherte Daten unter bestimmten Umständen löschen. Die Feuchteprognose ist idealisiert und ersetzt keine Prüfung des Schimmelrisikos an kalten Bauteilen.
