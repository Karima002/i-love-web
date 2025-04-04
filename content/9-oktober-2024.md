De sprintreview heb ik samen met mijn squad van Redpers voorbereid. We zijn allereerst begonnen met het definiëren van een doel. Ons doel is:

Doel: De opdracht bestaat uit het ontwerpen van een nieuwe homepage voor Red Pers, met meer visuele hiërarchie en een betere responsiviteit. Het doel is om de leesbaarheid van de artikelen te verbeteren en een betere manier vinden om podcasts te tonen. Daarnaast is het doel om de auteur meer centraal te hebben staan. Het design moet er ook voor zorgen dat de artikelen beter worden gelezen en dat het makkelijker wordt voor schrijvers om hun verhalen te delen.

Vervolgens gingen we aan de slag met het voorbereiden van de demonstratie van ons werk. Dit heb ik gedaan door een plan van aanpak op te stellen: [Plan van aanpak demonstratie Sprint review · Issue #20 · Karima002/The-client-s-website (](https://github.com/Karima002/The-client-s-website/issues/20)[github.com](http://github.com/)[)](https://github.com/Karima002/The-client-s-website/issues/20). Ook hebben we vragen opgesteld voor de opdrachtgever. Deze vragen hebben we opgeschreven in het projectboard van 1 van de studenten: https://github.com/DivaniNL/red-pers/issues/12

Ook heeft Sanne mij geholpen met en aantal punten waar ik tegen aan liep:
- Het plaatsen van buttons in grid
- Het plaatsen van de paragraaf in grid
Hiervoor hebben we eerst een aantal schetsen gemaakt:
![WhatsApp Image 2024-10-18 at 22 49 55](https://github.com/user-attachments/assets/97719372-6b0f-4685-ac2e-f83267f80aa9)


Ook ben ik met een medestudent aan de slag gegaan met het plaatsen van svg. Het resultaat ziet er als volgt uit:
![svg](https://github.com/user-attachments/assets/e9d74629-abaa-4c73-bf56-044a6fe70736)

```html
            <!-- menu voor de buttons 'artikel beluisteren, save, share and font' -->
            <menu class="buttons">
                <li><button class="artikel-beluisteren">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.74992 6.95373V21.0463L18.816 14L8.74992 6.95373ZM7.58325 5.87817C7.58325 5.38735 8.13575 5.09972 8.53782 5.38117L20.1405 13.503C20.4855 13.7445 20.4855 14.2555 20.1405 14.497L8.53782 22.6189C8.13578 22.9003 7.58325 22.6127 7.58325 22.1219V5.87817Z" fill="#AF726B"/>
                    </svg>Artikel beluisteren
                </button></li>


                <li><button class="control">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58325 5.25H20.4166V23.208L13.9999 19.2778L7.58325 23.208V5.25ZM8.74992 6.41667V21.1253L13.5734 18.171C13.8351 18.0106 14.1647 18.0106 14.4265 18.171L19.2499 21.1253V6.41667H8.74992Z" fill="#7B7B7A"/>
                    </svg>
                </button></li>


                <li><button class="control">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70792 5.89257C4.48423 5.88628 4.28261 6.00479 4.17575 6.18914C4.06312 6.38344 4.06092 6.64912 4.22341 6.85505C4.36555 7.0352 5.5184 8.498 6.73367 10.091C7.96424 11.704 9.21305 13.3917 9.5826 14.0517C9.74789 14.3468 9.99408 14.9961 10.281 15.8692C10.5617 16.7232 10.8654 17.7401 11.1496 18.7325C11.7177 20.7163 12.2027 22.5834 12.2623 22.8137C12.3294 23.0729 12.549 23.232 12.7755 23.2557C12.9895 23.2781 13.2064 23.1828 13.3325 22.9944L23.7945 7.35949C24.06 6.96281 23.7845 6.4291 23.3074 6.41568L4.70792 5.89257ZM7.66123 9.38332C7.00379 8.52156 6.36478 7.69804 5.89256 7.09302L20.8896 7.51481L10.3047 13.003C9.72578 12.1209 8.65677 10.6883 7.66123 9.38332ZM10.8579 14.0303C11.0255 14.4349 11.2068 14.9493 11.3894 15.5049C11.6768 16.3795 11.9852 17.4127 12.2711 18.4113C12.5787 19.4853 12.8619 20.5247 13.0675 21.2926L21.6826 8.41784L10.8579 14.0303Z" fill="#7B7B7A"/>
                    </svg>
                    </button></li>
                <li><button class="control">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3912 16.0137L20.6326 19.0283C20.7656 19.3608 20.8542 19.649 20.8542 19.915C20.8542 20.6022 20.3444 20.8238 18.8592 20.8682V21.4667H24.5339V20.8682C23.9354 20.7795 23.4699 20.6465 23.2261 20.048L17.3297 5.70618H15.1131L15.7337 7.16918L11.3701 18.192L8.62407 11.5127H7.22407L7.61607 12.4367L4.39607 20.5707C4.25607 20.9487 3.96207 21.0327 3.57007 21.0887V21.4667H6.32807V21.0887C5.37607 21.0607 5.05407 20.9067 5.05407 20.4727C5.05407 20.3187 5.11007 20.1227 5.19407 19.9127L5.93607 18.0227H9.92607L10.6965 19.8937L10.6354 20.048C10.4137 20.6465 9.94822 20.7795 9.32755 20.8682V21.4667H13.6944V20.8682C13.1528 20.8522 12.74 20.8106 12.4333 20.7318C12.4014 20.685 12.3729 20.6317 12.3481 20.5707L11.8069 19.2544C11.8342 19.1736 11.8651 19.0906 11.8989 19.0062L13.0737 16.0137H19.3912ZM13.3397 15.3043L16.1771 8.10018L19.1031 15.3043H13.3397ZM6.10407 17.5747L7.89607 13.0247L9.74407 17.5747H6.10407Z" fill="#7B7B7A"/>
                    </svg>
                    </button></li>
            </menu>
   ```
