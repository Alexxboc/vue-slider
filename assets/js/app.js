/* 
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo il markup statico in eccesso e inseriamo le immagini dinamicamente servendoci della struttura dati fornita. Stampiamo prima l'immagine grande e usiamo la direttiva v-for per stampare tutti i thumbnails.
Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso Vue-js.
MILESTONE 3
Ora rendiamo lo slider dimanico. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi: - titolo e - testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const app = new Vue ({
    el: '#app',
    data: {
        timer: null,
        activeImage: 0,
        timer: 0,
        travels: [
            {
                image: 'https://imgcdn.agendadigitale.eu/wp-content/uploads/2019/03/07080955/super-mario.jpg.webp',
                title: 'Super Mario Deluxe',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'https://www.giantfreakinrobot.com/wp-content/uploads/2021/07/super-mario-64.jpg',
                title: 'Super Mario Odissey',
                text: 'Lorem ipsum.',
            },
            {
                image: 'https://media-assets.vanityfair.it/photos/614c53590279228e89ab3065/16:9/w_2580,c_limit/Super-MArio-Odyssey-p.jpg',
                title: 'Super Mario 3D World',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/145939-games-review-super-mario-party-review-image1-wv3szmrzxd.jpg',
                title: 'Bowser Fury',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'https://leganerd.com/wp-content/uploads/2018/11/super-mario-999x666.jpg',
                title: 'Mario Kart',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },

    methods: {
        prevImage() {
            // console.log('click');
            this.activeImage++
            if(this.activeImage === this.travels.length) {
                this.activeImage = 0;
            }
        },

        nextImage() {
            // console.log('click 2');
            if(this.activeImage === 0) {
                this.activeImage = this.travels.length
            }
            this.activeImage--
        },

        changeImage(index) {
            // console.log('change');
            this.activeImage = index
        },

        stopPlayer() {
            console.log('stop');
            clearInterval(this.timer)
        },

        startPlayer() {
            console.log('start');
            this.timer = setInterval(this.nextImage, 2000)
        }
        
    },

    mounted() {
        console.log('Mounted');
        this.startPlayer()
    }
        
        
    })
       
       




