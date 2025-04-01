Vandaag ben ik bezig geweest met het responsieve maken van mijn website. Ik heb van een medestudente een tip gekregen om te werken met clamp. Hiermee kan je nettere code schrijven zonder gebruik te maken van @media. . De clamp() functie zorgt ervoor dat de tekstgrootte binnen een bepaald bereik blijft, afhankelijk van de grootte van het scherm (in dit geval de breedte van het venster). De clamp functie wordt als volgt opgebouwd: clamp(min, val, max). Dit heb ik kunnen toepassen op de titel van mijn pagina: `font-size: clamp(18px, 5vw, 45px);`
- min: 18px is de minimale waarde. Dit betekent dat de tekst nooit kleiner wordt dan 18 pixels, zelfs als het scherm heel smal is.
- val (voorkeurswaarde): 5vw is de voorkeurswaarde (de "val") die gebruikt wordt als het scherm groot genoeg is. 5vw betekent 5% van de breedte van het venster (viewport). 
- max (maximale waarde): 45px is de maximale waarde. Dit betekent dat de tekst nooit groter wordt dan 45 pixels, zelfs op heel brede schermen.

Bron: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp




![WhatsApp Image 2024-10-22 at 12 27 52](https://github.com/user-attachments/assets/5f49153d-5fcd-45b9-b52f-83560219d151)
