
   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');

    const a1=document.querySelector('.a1');
    const a2=document.querySelector('.a2');
    const a3=document.querySelector('.a3');
    const a4=document.querySelector('.a4');
    const a5=document.querySelector('.a5');

		const d1=document.querySelector('.d1');
		const d2=document.querySelector('.d2');
    const d3=document.querySelector('.mb-4');
    const d4=document.querySelector('.d4');
    const d5=document.querySelector('.d5');
    const d6=document.querySelector('.d6');
    const d7=document.querySelector('.d7');
    const d8=document.querySelector('.d8');
    const d9=document.querySelector('.d9');
    const d10=document.querySelector('.d10');
    const d11=document.querySelector('.d11');
    const d12=document.querySelector('.d12');
    const d13=document.querySelector('.d13');
    const d14=document.querySelector('.d14');
    const d15=document.querySelector('.d15');
    const d16=document.querySelector('.d16');
    const d17=document.querySelector('.d17');
    const d18=document.querySelector('.d18');
    const d19=document.querySelector('.d19');
    const d20=document.querySelector('.d20');

      const dd=document.querySelector('.dd');
      const ddd=document.querySelector('.ddd');
      const mb=document.querySelector('.mb');
      const la=document.querySelector('.la');

    const t1=document.querySelector('.t1');
		const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
		const t5=document.querySelector('.t5');
		const t6=document.querySelector('.sp');
    const t7=document.querySelector('.t7');
    const t8=document.querySelector('.small-text');
    const t9=document.querySelector('.mr-2');

		link.forEach(el => {
			el.addEventListener('click', () => {

				const attr = el.getAttribute('language');


				d1.textContent =data[attr].d1;
				d2.textContent =data[attr].d2;
        d3.textContent =data[attr].d3;
        d4.textContent =data[attr].d4;
        d5.textContent =data[attr].d5;
        d6.textContent =data[attr].d6;
        d7.textContent =data[attr].d7;
        d8.textContent =data[attr].d8;
        d9.textContent =data[attr].d9;
        d10.textContent =data[attr].d10;
        d11.textContent =data[attr].d11;
        d12.textContent =data[attr].d12;
        d13.textContent =data[attr].d13;
        d14.textContent =data[attr].d14;
        d15.textContent =data[attr].d15;
        d16.textContent =data[attr].d16;
        d17.textContent =data[attr].d17;
        d18.textContent =data[attr].d18;
        d19.textContent =data[attr].d19;
        d20.textContent =data[attr].d20;

        dd.textContent =data[attr].dd;
        ddd.textContent =data[attr].ddd;
        mb.textContent =data[attr].mb;
        la.textContent =data[attr].la;

        a1.textContent=data[attr].a1;
        a2.textContent=data[attr].a2;
        a3.textContent=data[attr].a3;
        a4.textContent=data[attr].a4;
        a5.textContent=data[attr].a5;


				t1.textContent =data[attr].t1;
				t2.textContent =data[attr].t2;
				t3.textContent =data[attr].t3;
				t4.textContent =data[attr].t4;
				t5.textContent =data[attr].t5;
				t6.textContent =data[attr].t6;
        t7.textContent =data[attr].t7;
        t8.textContent =data[attr].t8;
        t9.textContent =data[attr].t9;




			});
		});

		var data = {
			  "english":
			  {
			    "title": "xenon",
				   "t1":"About",
           "t2":"Projects",
           "t3":"Resume",
           "t4":"Contact",
           "t5":"Color mode",
           "t6":"Language:",
           "t7":"Amharic",
           "t8":"Welcome to my portfolio website!",
           "t9":"Hey Guy's, I'm",

           "d1":"I am highly energetic young developer that's specialized in java programming language and it's application like javafx,android studio,servlet and jsp.",
           "d2":"Things I have designed for different campanys",
           "d3":"Experiences",
           "d4":"Web Development",
           "d5":"in this year i made a lot of website for different campanys and you can check them here",
           "d6":"UI Designer",
           "d7":"Desctop apps",
           "d8":"i creat ui desctop app for elcetonics campany it was one of my best",
           "d9":"Game development",
           "d10":"i creat simple games using java freamworks like javafx and swing i also have excprince using c# and unity",
           "d11":"command line",
           "d12":"i have 5 year of unix exprince i also good in server side programing.",
           "d13":"Educations",
           "d14":"university",
           "dd":"i am know currently at asstu university taking ",
           "d15":"Menilik ll",
           "d16":"preparotary",
           "ddd":"i finished preparotary in menilik ll.",
           "d17":"Tikure anbesa",
           "d18":"high School",
           "d19":"You can freely use Tooplate's templates for your business or personal sites. You cannot redistribute this template without a permission.",
           "d20":"Say hello",
           "mb":"If interested? Let's talk",
           "la":"Copyright &copy; 2022 kome offical . All rights reserved",

           "a1":"Kumenit Desta",
           "a2":"Web Designer",
           "a3":"UI Specialist",
           "a4":"Download Resume",
           "a5":"to contact me",
           "a6":"If interested? Let's talk",




			  },
			  "amharic":
			  {
				  "title":"ዜነን",
          "t1":"ስለ",
          "t2":"ፕሮጀክቶች",
          "t3":"የራስ መግለጫ",
          "t4":"ተገናኝ",
          "t5":"የቀለም ሁነታ",
          "t6":"ቋንቋ፡",
          "t7":"አማርኛ",
          "t8":"እንኳን ወደ ፖርትፎሊዮ ድር ጣቢያዬ በደህና መጡ!",
          "t9":"ሄይ ጋይስ፣እኔ",

          "a1":"ኩመኒት ደስታ",
          "a2":" ድረገፅ አዘጋጅ",
          "a3":"UI ስፔሻሊስት",
          "a4":"ከቆመበት ቀጥል አውርድ",
          "a5":"እኔን ለማግኘት",

          "d1":"እኔ በጃቫ ፕሮግራሚንግ ቋንቋ ላይ የተካነ በጣም ጉልበተኛ ወጣት ገንቢ ነኝ እና እንደ javafx ፣android studio ፣servlet እና jsp መተግበሪያ ነው።",
          "d2":"ለተለያዩ ካምፓኒዎች ያቀረብኳቸው ነገሮች",
          "d3":"",
          "d4":"የድር ልማት",
          "d5":"በዚህ አመት ውስጥ ለተለያዩ ካምፓኒዎች ብዙ ድህረ ገጽ ሰራሁ እና እዚህ ሊመለከቷቸው ይችላሉ።",
          "d6":"UI ዲዛይነር",
          "d7":"መተግበሪያዎችን አውጣ",
          "d8":"ለ elcetonics campany የዩአይ ዴስኮፕ መተግበሪያን ፈጠርኩ ከምርጦቼ አንዱ ነበር።",
          "d9":"የጨዋታ እድገት",
          "d10":"እንደ javafx እና swing ያሉ የጃቫ ፍሪም ስራዎችን በመጠቀም ቀላል ጨዋታዎችን እፈጥራለሁ እንዲሁም c# እና አንድነትን በመጠቀም ኤክስፕሪንስ አለኝ",
          "d11":"የትእዛዝ መስመር.",
          "d12":"የ 5 አመት ዩኒክስ ኤክስፕሪንስ አለኝ እኔም በአገልጋይ ጎን ፕሮግራም ጥሩ ነኝ።",
          "d13":"ትምህርቶች",
          "d14":"ዩኒቨርሲቲ",
          "d15":"ምንሊክ 11",
          "d16":"መሰናዶ",
          "d17":"ጥቁር አንበሳ",
          "d18":"ሁለተኛ ደረጃ ትምህርት ቤት",
          "d19":"ለንግድዎ ወይም ለግል ጣቢያዎችዎ የTooplate አብነቶችን በነጻነት መጠቀም ይችላሉ። ይህን አብነት ያለፈቃድ እንደገና ማሰራጨት አይችሉም።",
          "d20":"ሰላም በል።",
          "dd":"በአሁኑ ጊዜ በአስቱ ዩኒቨርሲቲ አውቃለሁ።",
          "ddd":"ፕሪፓሮታሪን በሜኒሊክ ጨረስኩ።",
          "mb":"ፍላጎት ካላችሁ? እንነጋገር",
          "la":"የቅጂ መብት © 2022 ኮሜ ኦፊሴላዊ። መብቱ በህግ የተጠበቀ ነው",

			  }


			}
