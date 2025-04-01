# Opdracht specificity

***
## Experiment 1 Element selector

Opdracht: schrijf in de HTML een h2 element met een class uit de gezamenlijke stylesheet en een h2 element zonder class. Geef de `h2 `een kleur. Wordt de heading nu blauw? Of wordt de huisstijl uitgevoerd? Kan je bedenken waarom dit gebeurt?

De `h2 `krijgt een midnightblue kleur. Deze is afkomstig van` specifity.css`. Dit gebeurt omdat eerst het gezamenlijke stylesheet wordt ingeladen en daarna de `specifity.css`. Omdat de `specifity.css` later wordt ingeladen krijgt het een blauwe kleur en volgt het niet de huisstijl van de ingeladen gezamenlijke stylesheet.  

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.html#L12-L15
https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.css#L1-L5
![image](https://github.com/user-attachments/assets/58f0c324-df99-4e32-bac9-873e73c20f85)

Vraag: Een class wint van een element. Maar de type stylesheet wint weer van de class want de class staat in de bovenste stylesheet, toch? Vandaar dat de eerste `<h2>` een blauwe kleur krijgt en niet de huisstijl volgt.

## Experiment 2  Class selector

Opdracht: schrijf in de HTML een `h2 `met een class uit de gezamenlijke stylesheet en voeg in dezelfde h2 een nieuwe class toe. Geef de nieuwe class een kleur. Welke kleur krijgt de heading met twee classes? Krijgt het de kleur van de huisstijl of wordt de andere class uitgevoerd? Waarom krijgt de heading die kleur? 

Vraag: Waarom wordt de tweede class gevolgd?

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.html#L16-L18

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.css#L6-L10
![image](https://github.com/user-attachments/assets/86986947-482b-48b3-b8f8-4a59a495d5c5)


## Experiment 3 Class volgorde
Opdracht: Voeg nu aan specificity.css een class toe met dezelfde naam als al in de gezamenlijke stylesheet staat. Geef de class een andere kleur. 
Welke kleur hebben de headings nu? Probeer te beschrijving waarom de heading die kleur heeft?

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.html#L19-L21

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/0f6bf9ff26751912127ab28b4fd517ff14cb7858/opdrachten/specificity.css#L11-L14
![image](https://github.com/user-attachments/assets/a7770f49-82ad-4679-9cf6-8af67c4bb89b)

De heading krijgt de midnightblue kleur. De CSS volgt namelijk de code van boven naar beneden. 

## Experiment 4 ID selector
Opdracht: geef de `<h2>` een class van de gezamenlijke stylesheet en geef het ook een id. Maak een id selector in specificity.css met een andere kleur. Welke kleur krijgt de heading? De kleur van de id-selector of 'wint' de class uit de gezamenlijke stylesheet? Waarom is dat?

De heading krijgt de kleur van de id. Dit komt omdat een id wint van een class en een element.

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/22c047dfa9cfbcd21ed3bd13e9e6d08ef713b9a5/opdrachten/specificity.html#L22-L23

https://github.com/Karima002/look-and-feel-corporate-identity-/blob/22c047dfa9cfbcd21ed3bd13e9e6d08ef713b9a5/opdrachten/specificity.css#L16-L19
![image](https://github.com/user-attachments/assets/3eb4c974-d2fc-4a87-8f4f-a57cff09f697)


# Check-out

**Documenteer wat je hebt gedaan. Voeg links toe naar bronnen en voorbeelden**  
Vandaag zijn we bezig geweest met verschillende opdrachten in de leertaak: Stylesheet. We hebben op de maandag een styleguide gemaakt: https://www.figma.com/design/L3gfL1fO96JSZr6JPNEyMI/Styleguide-en-Interface-inventory?node-id=19-2&t=Zo43jeCxB9JvhqMv-1. We leerden hoe je een  gestructureerd CSS file kan maken met classes en Custom Properties. We hebben eerst voor de website https://css-tricks.com/ uitgezocht hoe CSS is toegepast voor een `h2 `en button element. Vervolgens kregen we een uitleg over custom properties. Een custom property is een variabele in CSS, gedefinieerd door de gebruiker, waarmee je waarden zoals kleuren of afmetingen kunt opslaan. Door custom properties (ook wel CSS-variabelen ) te gebruiken, kun je een consistente stijl behouden en gemakkelijk aanpassingen maken. De code is beter leesbaar, sneller en makkelijker te onderhouden (bronnen: [Stylesheet](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/stylesheet.md#custom-properties) en [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties))


**Schrijf drie dingen op die je geleerd hebt**
- Vele bronnen gebruiken `:root` voor de custom properties. Het is beter om de properties in de `body` te zetten
- Css scoping: Scoping in CSS verwijst naar het beperken van de toepassing van CSS-regels tot specifieke onderdelen van een document, zodat stijlen alleen gelden binnen een bepaalde context. Dit kun je doen door classes te gebruiken om stijlen af te stemmen op die specifieke class. Voorbeeld:

***

`.btn { `  
  `--bg-color: salmon;  `  
  `background: var(--bg-color);`  
`}`

***

- Fallback in een variabel: Een fallback in een variabele in CSS geeft een alternatieve waarde die gebruikt wordt als de custom property niet beschikbaar is of niet werkt. Bron: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#defining_fallbacks_in_the_var_function)
- Liever geen ID gebruiken behalve als je het goed kan beargumenteren. ID heeft een groter gewicht dan een Class. Een <style> attriute wint van de id en de class. 
![image](https://github.com/user-attachments/assets/7e806831-7f29-49e0-af4d-df27c38039b2)


***


**Bedenk ook:**
1. Hoe ga je nieuwe CSS code in de gemeenschappelijke en in je eigen code verwerken?
- Het inladen van de gezamenlijke CSS code en eigen CSS bestand
- Het gebruiken van dezelfde CSS class names in het gezamenlijke bestand als in mijn eigen CSS bestand

2. Waar ga je afspraken over jullie CSS strategie met je teamgenoten documenteren?
- Gezamenlijke projectboard met afspraken, code conventies en to do lijsten
- Team canvas met afspraken over de samenwerking en doelen 

