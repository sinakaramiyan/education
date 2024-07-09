class app{
  constructor(){
    this.courses();
    this.homeDynamic();
    // this.homeStatic();
    // this.login();
    this.admin();
  }
  courses()
  {
    //courses
    const element = document.querySelectorAll('#accordion');
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener("click", function() 
      {
        if(document.body.contains(element[i].querySelector('#svg-course'))){
          const element = this.querySelector('#svg-course')
          element.classList.toggle('rotate-180');
        }else if(document.body.contains(element[i].querySelector('#svg-parent'))){
          const element3 = element[i].querySelector('#svg-parent');
          element3.lastElementChild.classList.toggle('rotate-180');
        }
    
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  homeDynamic()
  {
    const tab = document.querySelector('#tab');
    if(document.contains(document.querySelector('#tab'))){
      const learning = document.querySelector('#learning');
      tab.addEventListener("click",function(){
        if (learning.classList.contains('hidden')) {
          learning.classList.remove('hidden');
          done.classList.add('hidden');
          const s = "bg-zinc-200"
          tab.classList.add(s);
          tab1.classList.remove(s);
        }
      })  
    }

    const tab1 = document.querySelector('#tab1');
    if(document.contains(document.querySelector('#tab1'))){
      const done = document.querySelector('#done');
      tab1.addEventListener("click",function(){
        if (done.classList.contains('hidden')) {
          done.classList.remove('hidden');
          learning.classList.add('hidden');
          const s = "bg-zinc-200"
          tab1.classList.add(s);
          tab.classList.remove(s);
        }
      }) 
    }
  }

  homeStatic()
  {
    const python_cotent = document.querySelector('#python_cotent');
    const assembly_cotent = document.querySelector('#assembly_cotent');
    const cprgrmaing_cotent = document.querySelector('#cprgrmaing_cotent');
    const csharp_cotent = document.querySelector('#csharp_cotent');

    const python_svg = document.querySelector("#python_svg");
    const assembly_svg = document.querySelector("#assembly_svg");
    const cprograming_svg = document.querySelector("#cprograming_svg");
    const csharp_svg = document.querySelector("#csharp_svg");

    const python = document.querySelector('#python');
    const cprgrmaing = document.querySelector('#cprgrmaing');
    const assembly = document.querySelector('#assembly');
    const csharp = document.querySelector('#csharp');
    
    python.addEventListener("click", function(){
      if(python_cotent.classList.contains('hidden')){
        python_svg.classList.add('-rotate-90');
        assembly_svg.classList.remove('-rotate-90');
        cprograming_svg.classList.remove('-rotate-90');
        csharp_svg.classList.remove('-rotate-90');
        
        python.classList.add('bg-zinc-200');
        assembly.classList.remove('bg-zinc-200');
        cprgrmaing.classList.remove('bg-zinc-200');
        csharp.classList.remove('bg-zinc-200');
        
        python_cotent.classList.remove('hidden');
        assembly_cotent.classList.add('hidden');
        cprgrmaing_cotent.classList.add('hidden');
        csharp_cotent.classList.add('hidden');
      }
    });
    
    assembly.addEventListener("click", function(){
      if(assembly_cotent.classList.contains('hidden')){
        python_svg.classList.remove('-rotate-90');
        assembly_svg.classList.add('-rotate-90');
        cprograming_svg.classList.remove('-rotate-90');
        csharp_svg.classList.remove('-rotate-90');

        python.classList.remove('bg-zinc-200');
        assembly.classList.add('bg-zinc-200');
        cprgrmaing.classList.remove('bg-zinc-200');
        csharp.classList.remove('bg-zinc-200');

        python_cotent.classList.add('hidden');
        assembly_cotent.classList.remove('hidden');
        cprgrmaing_cotent.classList.add('hidden');
        csharp_cotent.classList.add('hidden');
      }
    });
    
    cprgrmaing.addEventListener("click", function(){
      if(cprgrmaing_cotent.classList.contains('hidden')){
        python_svg.classList.remove('-rotate-90');
        assembly_svg.classList.remove('-rotate-90');
        cprograming_svg.classList.add('-rotate-90');
        csharp_svg.classList.remove('-rotate-90');

        python.classList.remove('bg-zinc-200');
        assembly.classList.remove('bg-zinc-200');
        cprgrmaing.classList.add('bg-zinc-200');
        csharp.classList.remove('bg-zinc-200');

        python_cotent.classList.add('hidden');
        assembly_cotent.classList.add('hidden');
        cprgrmaing_cotent.classList.remove('hidden');
        csharp_cotent.classList.add('hidden');
      }
    });
    csharp.addEventListener("click", function(){
      if(csharp_cotent.classList.contains('hidden')){
        python_svg.classList.remove('-rotate-90');
        assembly_svg.classList.remove('-rotate-90');
        cprograming_svg.classList.remove('-rotate-90');
        csharp_svg.classList.add('-rotate-90');

        python.classList.remove('bg-zinc-200');
        assembly.classList.remove('bg-zinc-200');
        cprgrmaing.classList.remove('bg-zinc-200');
        csharp.classList.add('bg-zinc-200');

        python_cotent.classList.add('hidden');
        assembly_cotent.classList.add('hidden');
        cprgrmaing_cotent.classList.add('hidden');
        csharp_cotent.classList.remove('hidden');
      }
    });
  }

  login()
  {
    const login = document.querySelector('#login');
    const signin = document.querySelector('#signin');
    const signinFavorites = document.querySelector('#signinFavorites');

    const register = document.querySelector('#register');
    register.addEventListener('click',function()
    {
      login.classList.add('hidden');
      signin.classList.remove('hidden');
    })
    const signup = document.querySelector('#signup');
    signup.addEventListener('click', function(){
      signinFavorites.classList.remove('hidden');
      signin.classList.add('hidden');
    })

    const studensvg = document.querySelector('#studensvg');
    const teachersvg = document.querySelector('#teachersvg');

    const content = document.querySelector('#content');
    const student = document.querySelector('#student');
    student.addEventListener('click', function(){
      content.textContent = 'ورود به بخش دانش آموزان';
      teacher.classList.remove('bg-zinc-200');
      student.classList.add('bg-zinc-200');
      studensvg.classList.add('-rotate-90');
      teachersvg.classList.remove('-rotate-90');
    })

    const teacher = document.querySelector('#teacher');
    teacher.addEventListener('click', function(){
      content.textContent = 'ورود به بخش اساتید';
      teacher.classList.add('bg-zinc-200');
      student.classList.remove('bg-zinc-200');
      teachersvg.classList.add('-rotate-90');
      studensvg.classList.remove('-rotate-90');
    })

  }

  admin()
  {
    //preloader
    const preloader = document.querySelector('#preloader');
    window.addEventListener('DOMContentLoaded', () => {
      preloader.classList.add('hidden');
      setTimeout(() => {
      }, 5000);
    })
    //another method for implement preloader
    // if (document.readyState === "loading") {
    //   // Loading hasn't finished yet
      
    // } else {
    //   // `DOMContentLoaded` has already fired
    //   preloader.remove();
    // }

    const button = document.querySelectorAll('#button');
    const main = document.querySelector('#main');
    button.forEach( element => {
      element.addEventListener('click', function(e){
        e.preventDefault();

        //for go to top should set overflow-y-scroll for element
        main.parentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        //preloader mechanism
        preloader.classList.remove('hidden');
        if (document.readyState === "loading") {
          // Loading hasn't finished yet         
        } else {
          // `DOMContentLoaded` has already fired
          setTimeout(() => {
            // window.location.reload();
            preloader.classList.add('hidden');
          }, 500);
        }
        
        main.replaceChildren();
        const profile = this.nextElementSibling;
        main.innerHTML = profile.innerHTML;

        if(main.firstElementChild.id === 'noscroll'){
          main.parentElement.classList.add('no-scrollbar');
          main.parentElement.classList.remove('overflow-y-scroll');
        }else{
          main.parentElement.classList.remove('no-scrollbar');
          main.parentElement.classList.add('overflow-y-scroll');
        }
        })
      })

    // for templating use this code
    // const template = document.querySelector('#template');
    // template.remove();
    // const tem = document.getElementById('button');
    // tem.addEventListener('click', function(e){
    //   e.preventDefault();
    //   main.replaceChildren();
    //   main.append(template.content);
    // })

    var details = [...document.querySelectorAll('details')];
    document.addEventListener('click', function(e) {
      if (!details.some(f => f.contains(e.target))) {
        details.forEach(f => f.removeAttribute('open'));
      } else {
        details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
      }
    })

    //dark mode toggle

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
        } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
        }
    });

  }
}
new app();