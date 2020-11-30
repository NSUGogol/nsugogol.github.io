 function startRecognizer() {
     var rec = new webkitSpeechRecognition();
     rec.lang = 'uk';

     rec.onresult = function (e) {
         var rez = e.results[e.resultIndex];
         var str = rez[0].transcript;
         console.log('рез' + str);

         if ((str.indexOf('головна') >= 0) || (str.indexOf('головна') >= 0)) div_show("головна")
         if ((str.indexOf('головну') >= 0) || (str.indexOf('головну') >= 0)) div_show("головну")
         /*перехід на головну*/
         if ((str.indexOf('офіційний сайт') >= 0) || (str.indexOf('офіційний сайт') >= 0)) div_show("офіційний сайт")
         if ((str.indexOf('сайт undo') >= 0) || (str.indexOf('сайт undo') >= 0)) div_show("сайт undo")
         if ((str.indexOf('сайт нду') >= 0) || (str.indexOf('сайт нду') >= 0)) div_show("сайт нду")
         if ((str.indexOf('сайт НБУ') >= 0) || (str.indexOf('сайт НБУ') >= 0)) div_show("сайт НБУ")
         /*перехід на офіційний сайт*/
         if ((str.indexOf('Instagram undo') >= 0) || (str.indexOf('Instagram undo') >= 0)) div_show("Instagram undo")
         if ((str.indexOf('Instagram нду') >= 0) || (str.indexOf('Instagram нду') >= 0)) div_show("Instagram нду")
         if ((str.indexOf('Instagram НБУ') >= 0) || (str.indexOf('Instagram НБУ') >= 0)) div_show("Instagram НБУ")
         /*перехід на інстаграм університету*/
         if ((str.indexOf('Фейсбук') >= 0) || (str.indexOf('Фейсбук') >= 0)) div_show("Фейсбук")
         if ((str.indexOf('Facebook НБУ') >= 0) || (str.indexOf('Facebook НБУ') >= 0)) div_show("Facebook НБУ")
         if ((str.indexOf('Facebook нду') >= 0) || (str.indexOf('Facebook нду') >= 0)) div_show("Facebook нду")
         if ((str.indexOf('Facebook') >= 0) || (str.indexOf('Facebook') >= 0)) div_show("Facebook")
         /*перехід на Фейсбук сторінку НДУ Гоголя*/
         if ((str.indexOf('YouTube') >= 0) || (str.indexOf('YouTube') >= 0)) div_show("YouTube")
         if ((str.indexOf('YouTube нду') >= 0) || (str.indexOf('YouTube нду') >= 0)) div_show("YouTube нду")
         if ((str.indexOf('YouTube НБУ') >= 0) || (str.indexOf('YouTube НБУ') >= 0)) div_show("YouTube НБУ")
         /*перехід на YouTube канал університету*/
         if ((str.indexOf('Instagram профкома') >= 0) || (str.indexOf('Instagram профкома') >= 0)) div_show("Instagram профкома")
         if ((str.indexOf('Instagram профком') >= 0) || (str.indexOf('Instagram профком') >= 0)) div_show("Instagram профком")
         if ((str.indexOf('Instagram профкому студентів') >= 0) || (str.indexOf('Instagram профкому студентів') >= 0)) div_show("Instagram профкому студентів")
         /*перехід на Instagram сторінку профкому студентів*/
         if ((str.indexOf('Instagram на стиле') >= 0) || (str.indexOf('Instagram на стиле') >= 0)) div_show("Instagram на стиле")
         if ((str.indexOf('Instagram Гоголь на стиле') >= 0) || (str.indexOf('Instagram Гоголь на стиле') >= 0)) div_show("Instagram Гоголь на стиле")
         /*перехід на Instagram сторінку gogol_nastile*/
         if ((str.indexOf('нос News') >= 0) || (str.indexOf('нос News') >= 0)) div_show("нос News")
         if ((str.indexOf('News') >= 0) || (str.indexOf('News') >= 0)) div_show("News")
         if ((str.indexOf('новости') >= 0) || (str.indexOf('новости') >= 0)) div_show("новости")
         if ((str.indexOf('новини') >= 0) || (str.indexOf('новини') >= 0)) div_show("новини")
         /*перехід на сторінку NoseNews*/
         if ((str.indexOf('відео профкому') >= 0) || (str.indexOf('відео профкому') >= 0)) div_show("відео профкому")
         if ((str.indexOf('студентський профком') >= 0) || (str.indexOf('студентський профком') >= 0)) div_show("студентський профком")
         if ((str.indexOf('відео профкома') >= 0) || (str.indexOf('відео профкома') >= 0)) div_show("відео профкома")
         if ((str.indexOf('профком') >= 0) || (str.indexOf('профком') >= 0)) div_show("профком")
         /*перехід на сторінку студентський профком*/
         if ((str.indexOf('Гоголь на стиле') >= 0) || (str.indexOf('Гоголь на стиле') >= 0)) div_show("Гоголь на стиле")
         if ((str.indexOf('на стиле') >= 0) || (str.indexOf('на стиле') >= 0)) div_show("на стиле")
         /*перехід на сторінку Gogol NaStile*/
         if ((str.indexOf('міс та Містер') >= 0) || (str.indexOf('міс та Містер') >= 0)) div_show("міс та Містер")
         if ((str.indexOf('міс та Містер НБУ') >= 0) || (str.indexOf('міс та Містер НБУ') >= 0)) div_show("міс та Містер НБУ")
         if ((str.indexOf('міс та Містер нду') >= 0) || (str.indexOf('міс та Містер нду') >= 0)) div_show("міс та Містер нду")
         if ((str.indexOf('конкурс краси') >= 0) || (str.indexOf('конкурс краси') >= 0)) div_show("конкурс краси")
         if ((str.indexOf('міс') >= 0) || (str.indexOf('міс') >= 0)) div_show("міс")
         if ((str.indexOf('містер') >= 0) || (str.indexOf('містер') >= 0)) div_show("містер")
         /*перехід на сторінку Місс та Містер НДУ*/
         if ((str.indexOf('КВН') >= 0) || (str.indexOf('КВН') >= 0)) div_show("КВН")
         /*перехід на сторінку КВН*/
         if ((str.indexOf('Майданс') >= 0) || (str.indexOf('Майданс') >= 0)) div_show("Майданс")
         /*перехід на сторінку MyDance*/
         if ((str.indexOf('вступникам') >= 0) || (str.indexOf('вступникам') >= 0)) div_show("вступникам")
         if ((str.indexOf('абітурієнтам') >= 0) || (str.indexOf('абітурієнтам') >= 0)) div_show("абітурієнтам")
         if ((str.indexOf('вступників') >= 0) || (str.indexOf('вступників') >= 0)) div_show("вступників")
         if ((str.indexOf('абітурієнтів') >= 0) || (str.indexOf('абітурієнтів') >= 0)) div_show("абітурієнтів")
         /*перехід на сторінку Вступникам*/
         if ((str.indexOf('ректор') >= 0) || (str.indexOf('ректор') >= 0)) div_show("ректор")
         if ((str.indexOf('заходи') >= 0) || (str.indexOf('заходи') >= 0)) div_show("заходи")
         if ((str.indexOf('контакти') >= 0) || (str.indexOf('контакти') >= 0)) div_show("контакти")
         if ((str.indexOf('факультети') >= 0) || (str.indexOf('факультети') >= 0)) div_show("факультети")
         if ((str.indexOf('років') >= 0) || (str.indexOf('років') >= 0)) div_show("років")
         if ((str.indexOf('рейтингу') >= 0) || (str.indexOf('рейтингу') >= 0)) div_show("рейтингу")
         /*Запитання сайту*/




     }

     rec.onend = function () {
         startRecognizer();
     }
     rec.start();
 }
 startRecognizer();

 function div_show(num) {
     $("#div1").css('display');

     switch (num) {
         case "головна":
             location.href = "index.html"
             break;
         case "головну":
             location.href = "index.html"
             break;
             /*перехід на головну*/
         case "офіційний сайт":
             location.href = "http://www.ndu.edu.ua/index.php/ua/"
             break;
         case "сайт undo":
             location.href = "http://www.ndu.edu.ua/index.php/ua/"
             break;
         case "сайт нду":
             location.href = "http://www.ndu.edu.ua/index.php/ua/"
             break;
         case "сайт НБУ":
             location.href = "http://www.ndu.edu.ua/index.php/ua/"
             break;
             /*перехід на офіційний сайт*/
         case "Instagram undo":
             location.href = "https://www.instagram.com/ndu_gogol_official/"
             break;
         case "Instagram нду":
             location.href = "https://www.instagram.com/ndu_gogol_official/"
             break;
         case "Instagram НБУ":
             location.href = "https://www.instagram.com/ndu_gogol_official/"
             break;
             /*перехід на інстаграм університету*/
         case "Фейсбук":
             location.href = "https://www.facebook.com/groups/ndu.gogol"
             break;
         case "Facebook НБУ":
             location.href = "https://www.facebook.com/groups/ndu.gogol"
             break;
         case "Facebook нду":
             location.href = "https://www.facebook.com/groups/ndu.gogol"
             break;
         case "Facebook":
             location.href = "https://www.facebook.com/groups/ndu.gogol"
             break;
             /*перехід на Фейсбук сторінку НДУ Гоголя*/
         case "YouTube":
             location.href = "https://www.youtube.com/channel/UCaxImsiHyFjy6ues7annlKw/videos"
             break;
         case "YouTube нду":
             location.href = "https://www.youtube.com/channel/UCaxImsiHyFjy6ues7annlKw/videos"
             break;
         case "YouTube НБУ":
             location.href = "https://www.youtube.com/channel/UCaxImsiHyFjy6ues7annlKw/videos"
             break;
             /*перехід на YouTube канал університету*/
         case "Instagram профкома":
             location.href = "https://www.instagram.com/profkom_ndu/"
             break;
         case "Instagram профком":
             location.href = "https://www.instagram.com/profkom_ndu/"
             break;
         case "Instagram профкому студентів":
             location.href = "https://www.instagram.com/profkom_ndu/"
             break;
             /*перехід на Instagram сторінку профкому студентів*/
         case "Instagram на стиле":
             location.href = "https://www.instagram.com/gogol_nastile/"
             break;
         case "Instagram Гоголь на стиле":
             location.href = "https://www.instagram.com/gogol_nastile/"
             break;
             /*перехід на Instagram сторінку gogol_nastile*/
         case "нос News":
             location.href = "NoseNews.html"
             break;
         case "News":
             location.href = "NoseNews.html"
             break;
         case "новости":
             location.href = "NoseNews.html"
             break;
         case "новини":
             location.href = "NoseNews.html"
             break;
             /*перехід на сторінку NoseNews*/
         case "відео профкому":
             location.href = "profkom.html"
             break;
         case "студентський профком":
             location.href = "profkom.html"
             break;
         case "відео профкома":
             location.href = "profkom.html"
             break;
         case "профком":
             location.href = "profkom.html"
             break;
             /*перехід на сторінку студентський профком*/
         case "Гоголь на стиле":
             location.href = "Nastile.html"
             break;
         case "на стиле":
             location.href = "Nastile.html"
             break;
             /*перехід на сторінку Gogol NaStile*/
         case "міс та Містер":
             location.href = "MissAndMr.html"
             break;
         case "міс та Містер НБУ":
             location.href = "MissAndMr.html"
             break;
         case "міс та Містер нду":
             location.href = "MissAndMr.html"
             break;
         case "конкурс краси":
             location.href = "MissAndMr.html"
             break;
         case "міс":
             location.href = "MissAndMr.html"
             break;
         case "містер":
             location.href = "MissAndMr.html"
             break;
             /*перехід на сторінку Місс та Містер НДУ*/
         case "КВН":
             location.href = "KVN.html"
             break;
             /*перехід на сторінку КВН*/
         case "Майданс":
             location.href = "MyDance.html"
             break;
             /*перехід на сторінку MyDance*/
         case "вступникам":
             location.href = "entrant.html"
             break;
         case "абітурієнтам":
             location.href = "entrant.html"
             break;
         case "вступників":
             location.href = "entrant.html"
             break;
         case "абітурієнтів":
             location.href = "entrant.html"
             break;
             /*перехід на сторінку Вступникам*/
         case "ректор":
             alert('Кандидат історичних наук, доцент, Відмінник освіти України\n Самойленко Олександр Григорович')
             break;
         case "заходи":
             alert('Через карантин, заходів не планується')
             break;
         case "контакти":
             alert('16600, м.Ніжин Чернігівської області, вул.Графська, 2\n Приймальна ректора: (04631) 7 - 19 - 67\n Приймальна комісія: (04631) 2 - 35 - 88\n Приймальна комісія: +380977973948\n E - mail: ndu @ndu.edu.ua ')
             break;
         case "факультети":
             alert('1.Факультет природничо-географічних і точних наук\n 2.ННІ філології, перекладу та журналістики\n 3.ННІ мистецтв імені Олександра Ростовського\n 4.Факультет психології і соціальної роботи\n 5.Факультет іноземних мов\n 6.Історико-юридичний факультет')
             break;
         case "років":
             alert('Ніжинська вища школа в цьому році святкує юбілей в 200 років')
             break;
         case "рейтингу":
             alert('121 місце цього року;\n 173 місце в 2019 році')
             break;
             /*Запитання сайту*/

     }
 }
